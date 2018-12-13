const db = require('../database');
const queries = require('../database/queries');

const createTable = (tableName, callback) => {
  db.query(queries.createTable(tableName), (err, res) => {
    callback(err, res);
  });
}

const dropTable = (tableName, callback) => {
  db.query(queries.dropTable(tableName), (err, res) => {
    callback(err, res);
  });
}

module.exports = {
  createTable,
  dropTable
}