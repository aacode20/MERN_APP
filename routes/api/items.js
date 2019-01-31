const express = require('express');
const router = express.Router();

//any requests to api/items/ to the server gets routed here

//Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get all items
// @access Public
router.get('/', (req,res) => { //Tells express to route '/' requests to routes/api/items to this function that needs two parameters that retuns all items
    Item.find()  //Passing no arguments into Models.find in mongoose returns every item in the DB(like SELECT *)
        .sort({ date: -1 }) //Sorts all items by date in descending order
        .then(items => res.json(items)) //Returns JSON of these items
}); //stays in this endpoint, doesn't go anywhere else

// @route POST api/items
// @desc Create an Item
// @access Public
router.post('/', (req,res) => { 
    const newItem = new Item({
        name: req.body.name
    }); //Gets the name from the body of the request, and creates a new TODO item
    newItem.save().then(item => res.json(item)) //Saves the item, and then returns JSON of it
    console.log(req.body.name + ' added to database!');
}); 

// @route DELETE api/items/:id
// @desc Delete an Item
// @access Public
router.delete('/:id', (req,res) => {  // '/:id' means we can pass in the id, because we are going to require this to delete the item
    Item.findById(req.params.id) //Find item by id passed in, id is usually unique
        .then(item => item.remove().then(() => res.json({ success: true }))) //If item found and deleted, return success true
        .catch(err => res.status(404).json({ success: false })); //If item not found 404, return success false  
     //From params not body this time since it is in the URI
});
      


module.exports = router;