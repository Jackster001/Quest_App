const JwtStrategy = require ('passport-jwt').strategy;
const ExtractJwt= require('passport-jwt').ExtractJwt;
const mongoose =requhire ('mongoose');
const User= mongoose.model('users');
const keys = require('../config/keys');

const opts={};
opts.jwtFormRequestion = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey=keys.secretOrKey;

module.exports= passport =>{
    passport.use(new JwtStrategy(opts,(jwt_payload, done)=>{
        
    }));
}