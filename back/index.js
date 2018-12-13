const tableActions = require('./data-access/table');

tableActions.createTable('Notes', (err, res) => {
  console.log(err);
  console.log(res);


  tableActions.dropTable('Notes', (err, res) => {
    console.log(err);
    console.log(res);
  });

});

