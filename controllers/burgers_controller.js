// think of this as the main file 
// burger_controller - burger - orm

// controlls all functions for one tables routes
var express = require('express');
var db = require("../models");
// all api routes
var router = express.Router();

// routes

// -- get route for the root route using express
// -- this route needs to connect to the burger.js (models) to select all the data
// router.get("route", function)
router.get("/", function (req, res) {
    //findAll is sequelize syntax 
    db.Burger.findAll(function (data) {
        // this cb `function (data)` becomes cb in burger.js
        // we are passing this callback function to burger.selectAll
        // console.log(data);
        //res.render = result of the findAll function
        //res.render("route", {always an object - table name: what you want back})
        res.render("index", { burgers: data });
    });
});

//router.post("route", function)
router.post("/burgers/insert", function (req, res) {
    console.log(req.body);
    //.create() is sequelize function to POST new info into database
    db.Burger.create(
        {//only specify columns you need to create
        burger_name: req.body.burger,
        //BOOLEANS you want to give default value to
        devoured: 0
     }).then(function (data) {
         //reloads page
        res.redirect("/");
    });
});


//router.put("route", function)
//route/: <-- the : allows you to create a URL with optional use of an id
router.put("/burgers/:id", function (req, res) {
    // var updateBurger = { burger_name: "" };
    //.update() is sequelize function to UPDATE existing info in our database 
    db.Burger.update({
        //in update function - everything you want to update has to be its own object
        devoured: 1
     }, {
         where: {
             id: req.params.id
         }
     }).then(function (data) {
         //this is sequelize syntax for all is good 
        res.sendStatus(200);
    });
});

module.exports = router;