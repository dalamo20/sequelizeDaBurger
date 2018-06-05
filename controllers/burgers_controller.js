// think of this as the main file 
// burger_controller - burger - orm

// controlls all functions for one tables routes
var express = require('express');
var burger = require("../models/burger");
// all api routes
var router = express.Router();

// routes

// -- get route for the root route using express
// -- this route needs to connect to the burger.js (models) to select all the data
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        // this cb `function (data)` becomes cb in burger.js
        // we are passing this callback function to burger.selectAll
        // console.log(data);
        res.render("index", { burgers: data });
    });
});

router.post("/burgers/insert", function (req, res) {
    console.log(req.body);

    burger.insertOne(req.body, function (data) {
        res.redirect("/");
    });
});

router.put("/burgers/:id", function (req, res) {
    // var updateBurger = { burger_name: "" };
    burger.updateOne({ devoured: 1 }, req.params.id, function (data) {
        res.sendStatus(200);
    });
});

module.exports = router;