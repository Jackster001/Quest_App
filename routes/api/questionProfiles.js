const express= require('express');
const router= express.Router();
const mongoose= require('mongoose');
const passport=require('passport');

//Post Model
const questionProfile = require('../../models/Post');

//Validation
const validatePostInput=require('../../validation/post')

router.get('/test', (req,res)=> res.json({msg: 'Posts works'}));

router.get('/', (req,res)=>{
    Post.find()
    .sort({date: -1})
    .then(posts => res.json(posts))
    .catch(err=> res.status(404).json({nopostsfound:'No posts found with that id'}));
});

router.get('/:id', (req,res)=>{
    Post.find()
    .sort({date: -1})
    .then(posts => res.json(posts))
    .catch(err=> res.status(404).json({nopostfound:'no post found with that id'}));
});

router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    const {errors, isValid} = validatePostInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }
    const newPost = new Post({
        text: req.body.text,
        firstName: req.body.firstName,
        avatar: req.body.avatar,
        user: req.user.id
    });
    newPost.save().then(post => res.json(post));
});

// router.delete('/:id', passport.authenticate('jwt', {session:false}), (req, res) => {
    
// })

module.exports =router;