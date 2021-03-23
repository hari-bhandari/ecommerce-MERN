import User from "../models/userModel.js";
import passportGoogle from 'passport-google-oauth20'
import JwtStrategy from 'passport-jwt'
import facebookStrategy from 'passport-facebook'
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
                callbackURL: '/',
            },
            (accessToken, refreshToken, profile, done) => {
                console.log('hey')
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
    passport.use(
        new facebookStrategy.Strategy(
            {
                clientID:process.env.FACEBOOK_CLIENT_ID,
                clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
                callbackURL: process.env.FACEBOOK_CALLBACK_URL,
                profileFields: [
                    'id',
                    'displayName',
                    'name',
                    'emails',
                    'picture.type(large)'
                ]
            },
            (accessToken, refreshToken, profile, done) => {
                User.findOne({ facebookId: profile.id })
                    .then(user => {
                        if (user) {
                            return done(null, user);
                        }

                        const newUser = new User({
                            provider: 'facebook',
                            facebookId: profile.id,
                            email: profile.emails ? profile.emails[0].value : null,
                            name: profile.name.givenName+' ' +profile.name.familyName,
                            avatar: profile.photos[0].value,
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
                        return done(err, false);
                    });
            }
        )
    );
}
