const express= require('express');
const router= express.Router();
const User= require('../../models/User');

router.get('/users', (req, res)=> {
    User.find()
    .sort({date: -1})
    .then(users => res.json(users))
});

router.post('/create', (req, res)=> {
    const newUser=new User({
        question:req.body.question
    });
    newUser.save().then(User => res.json(User));
});
router.delete('/users/:id', (req, res)=> {
    User.findById(req.params.id)
    .then(user => user.remove().then(()=> res.json({success:true})))
    .catch(err=> res.status(404).json({success:false}));
});
