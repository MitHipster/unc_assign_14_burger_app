/*jslint esversion: 6, browser: true*/
// Require MySQL connection
const connection = require('./connection.js');

// Object to hold our SQL statement functions.
const orm = {
  selectAll: (cols, table, call) => {
    const qry = 'SELECT ?? FROM ?? ORDER BY date DESC';
    connection.query(qry, [cols, table], (err, result) => {
      call(err, result);
    });
  },
  insertOne: () => {

  },
  updateOne: (table, update, cond, call) => {
    const qry = 'UPDATE ?? SET devoured = ? WHERE id = ?';
    connection.query(qry, [table, update, cond], (err, result) => {
      if (err) console.log('SQL', this.sql);
      call(err, result);
    });
  }
};

module.exports = orm;
