var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Item = require('../models/groceries');
let ItemController = require('../controller/groceries')
/* Get route for the Bio Books list */
// Read Operation
router.get('/', ItemController.DisplayGrocerylist);
/* Get route for Add Book page --> Create */
router.get('/add', ItemController.AddItem); 
/* Post route for Add Book page --> Create */
router.post('/add', ItemController.ProcessItem);
/* Get route for displaying the Edit Book page --> Update */
router.get('/edit/:id', ItemController.EditItem);
/* Post route for processing the Edit Book page --> Update */
router.post('/edit/:id', ItemController.ProcessEditItem);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', ItemController.DeleteItem);
module.exports = router;