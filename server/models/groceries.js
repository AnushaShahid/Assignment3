let mongoose = require('mongoose');
// create a grocery model
let groceryModel = mongoose.Schema({
    "name": String,
    "quantity": Number,
    "description": String,
    "price": Number
    },
    {
        collection: "groceries"
    }
);
module.exports = mongoose.model('Grocery', groceryModel);