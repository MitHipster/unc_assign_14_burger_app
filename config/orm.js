/*jslint esversion: 6, browser: true*/
// Require MySQL connection
const connection = require('./connection.js');

// Object to hold our SQL statement functions.
const orm = {
  selectAll: (cols, table, call) => {
    const qry = 'SELECT ?? FROM ??';
    connection.query(qry, [cols, table], (err, result) => {
      call(err, result);
    });
  },
  insertOne: () => {

  },
  updateOne: () => {

  }
};

module.exports = orm;
