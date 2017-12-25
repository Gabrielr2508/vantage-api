'use strict';
module.exports = function(app) {
  var vantageRead = require('../controllers/vantageApiController'),
      userHandlers = require('../controllers/userController.js');

  
  app.route('/read')
    .get(vantageRead.list_all_reads)
    .post(userHandlers.loginRequired, vantageRead.create_a_read);

  app.route('/read/last')
    .get(vantageRead.getLastRead);

  app.route('/read/:readHour')
    .get(vantageRead.get_a_read)
    .put(userHandlers.loginRequired, vantageRead.update_a_read)
    .delete(userHandlers.loginRequired, vantageRead.delete_a_read);

  app.route('/auth/register')
    .post(userHandlers.register);

  app.route('/auth/login')
    .post(userHandlers.sign_in);
};
