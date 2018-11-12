const express= require('express');
const router= express.Router();
const User= require('../../models/User');
const gravatar= require('gravatar');
const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys= require('../../config/keys');
const passport=require('passport');
const validateRegisterInput= require('../../validation/register');
const validateLoginInput= require('../../validation/login');

router.get('/users', (req, res)=> {
    User.find()
    .sort({date: -1})
    .then(users => res.json(users))
});

// router.post('/create', (req, res)=> {
//     const newUser=new User({
//         question:req.body.question
//     });
//     newUser.save().then(User => res.json(User));
// });

router.get('/test', (req, res)=> res.json({msg: 'Users Works'}));

router.post('/register',(req, res)=>{
    const {errors, isValid} = validateRegisterInput(req.body);
    //check validation
    if(!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({email: req.body.email})
    .then(user=>{
        if(user){
            errors.email = 'Email already exists'
            return res.status(400).json({email:'Email already exists'});
        }else{
            const avatar=gravatar.url(req.body.email,{
                s: 200, 
                r: 'pg',
                d: 'mm'
            });
            newUser=new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                avatar,
                password: req.body.password
            });
            bcrypt.genSalt(10, (err, salt)=>{
                bcrypt.hash(newUser.password,salt, (err, hash)=>{
                    if(err)throw err;
                    newUser.password=hash;
                    newUser.save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                })
            })
        }
    })
})

router.post('/login', (req, res)=>{
    const {errors, isValid} = validateLoginInput(req.body);
    //check validation
    if(!isValid){
        return res.status(400).json(errors);
    }
    const email=req.body.email;
    const password = req.body.password;

    //find user by email
    User.findOne({email})
    .then(user => {
        if(!user){
            errors.email = 'User not Found'
            return res.status(404).json(errors);
        }
        //check password
        bcrypt.compare(password, user.password)
            .then(isMatch =>{
                if(isMatch){
                    //User is matched
                    
                    const payload = {id: user.id, firstName: user.firstName,lastName: user.lastName, avatar: user.avatar} //create jwt playload

                    //Sign token
                    jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token)=>{
                        res.json({
                            success:true,
                            token: 'Bearer '+token
                        })
                    });
                }else{
                    errors.password="Password Incorrect"
                    return res.status(400).json(errors);
                }
            })
    });
});

//returning current user
router.get('/current', passport.authenticate('jwt',{session:false}), (req, res)=>{
    res.json({
        id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email
    });
});

router.delete('/users/:id', (req, res)=> {
    User.findById(req.params.id)
    .then(user => user.remove().then(()=> res.json({success:true})))
    .catch(err=> res.status(404).json({success:false}));
});

module.exports =router;
