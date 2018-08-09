const routes = require('next-routes')();

routes
  .add('/robocalls/main', '/robocalls/main')
  .add('/robocalls/:detail', '/robocalls/detail')
  .add('/robocalls/:unique', '/robocalls/uniqueReport');

module.exports = routes;