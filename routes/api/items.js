const express= require('express');
const router= express.Router();
//Item model
const Item= require('../../models/Item');



//@route    GET api/items
//@desc     Get all items
//@access   public 
router.get('/', (req, res)=> {
    Item.find()
    .sort({date: -1})
    .then(items => res.json(items))
});

//@route    POST api/items
//@desc     Create a item
//@access   public 
router.post('/', (req, res)=> {
    const newItem=new Item({
        question:req.body.question
    });
    newItem.save().then(Item => res.json(Item));
});



//@route    DELTE api/items/:id
//@desc     Delete a item
//@access   public 
router.delete('/:id', (req, res)=> {
    Item.findById(req.params.id)
    .then(item => item.remove().then(()=> res.json({success:true})))
    .catch(err=> res.status(404).json({success:false}));
});

module.exports =router;
