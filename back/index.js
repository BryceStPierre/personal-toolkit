const tableActions = require('./data-access/table');

tableActions.createTable('topic.Notes', (err, res) => {
  console.log(err);
  console.log(res);

  tableActions.dropTable('topic.Notes', (err, res) => {
    console.log(err);
    console.log(res);
  });
});
