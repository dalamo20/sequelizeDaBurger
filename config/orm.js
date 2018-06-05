var connection = require('./connection.js');

var orm = {
    // creating a orm.selectAll function and taking the tableName and cb arguments
    // this cb comes from burger.js
    selectAll: function (tableName, cb) {
        // creates a sql query
        var queryString = 'SELECT * FROM ??'
        // connects to database using the querySting - creates a callback 
        connection.query(queryString, [tableName], function (err, result) {
            // if there is an err throw an err
            if (err) throw err;
            // then call the callback function and pass in the result
            cb(result);
            // this cb is from `selectAll: function (tableName, cb)`
        });
    },
    insertOne: function (tableName, newDataObject, cb) {
        var queryString = 'INSERT INTO ?? SET ?';
        connection.query(queryString, [tableName, newDataObject], function (err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });
    },
    updateOne: function (tableName, updatedDataObject, id, cb) {
        var queryString = 'UPDATE ?? SET ? WHERE id = ?'
        connection.query(queryString, [tableName, updatedDataObject, id], function (err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;