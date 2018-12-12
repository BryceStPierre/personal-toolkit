const db = require('./database');

db.query('SELECT NOW()', (err, rows) => {
  console.log(rows);
});
