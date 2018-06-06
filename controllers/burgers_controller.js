// think of this as the main file 
// burger_controller - burger 

// controlls all functions for one tables routes
var express = require('express');
var db = require("../models");

// all api routes
var router = express.Router();

// routes

// -- get route for the root route using express
// router.get("route", function)
router.get("/", function (req, res) {
    // use db because that's where we require the models above - which contains the Burger table we created
    // findAll is sequelize syntax to return all the data
    db.Burger.findAll().then(function (data) {
        // console.log(data);
        // res.render = result of the findAll function
        // res.render("route", { always an object- tablename: what you want back })
        res.render("index", { burgers: data });
    });
});

// router.post(route, function)
router.post("/burgers/insert", function (req, res) {
    // console.log(req.body);
    // use db because that's where we require the models above - which contains the Burger table we created
    // .create() is the sequelize function to POST new info into our database
    db.Burger.create(
        { // only have to specify the col you need created
            burger_name: req.body.burger_name,
            // booleans you may want to give a default value
            devoured: 0
        }
    ).then(function (data) {
        // reloads page
        res.redirect("/");
    });
});

// router.put(route, function)
// route/: <-- the : allows you to create a URL with the optional use of an id
router.put("/burgers/:id", function (req, res) {
    // use db because that's where we require the models above - which contains the Burger table we created
    // .update() is the sequelize function to UPDATE existing info in our database
    db.Burger.update(
        {
            // in the update function - everything you update has to be its own object
            devoured: 1
        },
        {
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            // res.sendStatus(200); <-- sequelize syntax for all is good and allows the page and database to be update
            res.sendStatus(200);
        });
});

module.exports = router;