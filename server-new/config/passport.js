import User from "../models/userModel.js";
import passportGoogle from 'passport-google-oauth2'
import JwtStrategy from 'passport-jwt'

const opts = {};
opts.jwtFromRequest = JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "SECRETHONI";
export default function (passport) {
    passport.use(
        new JwtStrategy.Strategy(opts, (payload, done) => {
            User.findById(payload.id)
                .then(user => {
                    if (user) {
                        return done(null, user);
                    }

                    return done(null, false);
                })
                .catch(err => {
                    return done(err, false);
                });
        })
    );
    passport.use(
        new passportGoogle.Strategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: '/auth/google/callback',
            },
            (accessToken, refreshToken, profile, done) => {
                User.findOne({email: profile.email})
                    .then(user => {
                        console.log(user)
                        if (user) {
                            return done(null, user);
                        }
                        const newUser = new User({
                            provider: 'google',
                            googleId: profile.id,
                            email: profile.email,
                            name:profile.displayName,
                            avatar: profile.picture,
                            password: null
                        });

                        newUser.save((err, user) => {
                            if (err) {

                                return done(err, false);
                            }

                            return done(null, user);
                        });
                    })
                    .catch(err => {
                        console.log(err)
                        return done(err, false);
                    });
            }
        )
    );
}
