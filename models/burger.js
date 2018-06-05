// models/burger.js is specific to the burgers table
var orm = require('../config/orm');

var burger = {
    // Console log all the burgers.
    // burger.selectAll takes one argumemt - cb
    // this cb comes from burgers_controller 
    // generally comes from wherever you call it - but here it is burgers_controller
    selectAll: function (cb) {
        // calling orm.selectAll - hint () 
        // passing the arguments of the table name and a callback function - hint no ()
        orm.selectAll("burgers", cb);
        // the cb above becomes the cb in orm.js
    },
    // insert one new burger
    insertOne: function (newDataObject, cb) {
        orm.insertOne("burgers", newDataObject, cb);
    },
    // update an existing burger
    updateOne: function (updatedDataObject, id, cb) {
        orm.updateOne("burgers", updatedDataObject, id, cb);
    }
};

module.exports = burger;