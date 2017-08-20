/*jslint esversion: 6, browser: true*/
const orm = require('../config/orm.js');

// Add calls to ORM functions and add module exports method
const burger = {
  selectAll: (call) => {
    orm.selectAll('*', 'burgers', (err, data) => {
      call(err, data);
    });
  },
  updateOne: (update, cond, call) => {
    orm.updateOne('burgers', update, cond, (err, data) => {
      call(err, data);
    });
  }
};

// Export database functions for controller to use.
module.exports = burger;
