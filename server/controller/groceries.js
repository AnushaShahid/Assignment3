var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Grocery = require('../models/groceries');


// CRUD OPERATION

// Read Operation
// Get route for the book list
module.exports.DisplayGrocerylist = async (req,res,next)=>{ //< Mark function as async
    try{
       const groceryList = await Grocery.find(); //< Use of await keyword
       res.render('groceries/list', {
          title: 'Grocery', 
          Grocerylist:groceryList
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('groceries/list', {
          error: 'Error on server'
       });
    }
 };

// Add Operation
// Get route for displaying the Add-Page -- Create Operation
 module.exports.AddItem = (req,res,next)=>{
    try{
        res.render('groceries/add',
        {
            title:'Add Item'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('groceries/list',
        {
            error: 'Error on the server'
        });
    }
};

// Post route for processing the Add-Page -- Create Operation
module.exports.ProcessItem = (req,res,next)=>{
    try{
        let newItem = Grocery({
            "name":req.body.name,
            "quantity":req.body.quantity,
            "description":req.body.description,
            "price":req.body.price
        });
        Grocery.create(newItem).then(() =>{
            res.redirect('/grocery-list')
        })
    }
    catch(error){
        console.error(err);
        res.render('groceries/list',
        {
            error: 'Error on the server'
        });
    }
};

// Edit Operation
// Get route for displaying the Edit Operation -- Create Operation
module.exports.EditItem = async (req,res,next)=>{
    try{
    const id = req.params.id;
    const itemToEdit = await Grocery.findById(id);
    res.render('groceries/edit',
    {
        title:'Edit Item',
        Grocery:itemToEdit
    })
    }
    catch(error){
        console.error(err);
        res.render('groceries/list',
        {
            error: 'Error on the server'
        });
    }
}
// Post route for processing the Add-Page -- Create Operation
module.exports.ProcessEditItem = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedItem = Grocery({
            "_id":id,
            "name":req.body.name,
            "quantity":req.body.quantity,
            "description":req.body.description,
            "price":req.body.price
        });
        Item.findByIdAndUpdate(id,updatedItem).then(()=>{
            res.redirect('/grocery-list')
        });
    }
    catch(error){
        console.error(err);
        res.render('groceries/list',
        {
            error: 'Error on the server'
        });
    }
}

// Delete Operation
// Get route for perform Delete Operation -- Deletion
module.exports.DeleteItem = (req,res,next)=>{
    try{
        let id = req.params.id;
        Grocery.findByIdAndDelete(id).then(() =>
        {
            res.redirect('/grocery-list')
        })
    }
    catch(error){
        console.error(err);
        res.render('groceries/list',
        {
            error: 'Error on the server'
        });
    }
}