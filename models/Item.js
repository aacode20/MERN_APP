const mongoose = require('mongoose');
const Schema = mongoose.Schema; //importing schema as schema from mongoose basically

//Create the Item Schema
const ItemSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}); //new instance of the schema object, each item has a required name and a date, which defaults to current date

module.exports = Item = mongoose.model("item",ItemSchema); //exports the mongoose schema for an item as a model so we can bring it in to other files