import passport from 'passport'
import JWT from 'passport-jwt'
import Google from 'passport-google-oauth2'
import Facebook from 'passport-facebook'
import User from "../models/userModel.js";



const secret = "SECRETHONI";

const opts = {};
opts.jwtFromRequest = JWT.ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secret;

passport.use(
    new JWT.Strategy(opts, (payload, done) => {
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
    new Google.Strategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback',
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ email: profile.email })
                .then(user => {
                    if (user) {
                        return done(null, user);
                    }

                    const name = profile.displayName.split(' ');

                    const newUser = new User({
                        provider: 'google',
                        googleId: profile.id,
                        email: profile.email,
                        firstName: name[0],
                        lastName: name[1],
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
                    return done(err, false);
                });
        }
    )
);

passport.use(
    new Facebook.Strategy(
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
                        firstName: profile.name.givenName,
                        lastName: profile.name.familyName,
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
