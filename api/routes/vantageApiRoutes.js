'use strict';
module.exports = function(app) {
  var vantageRead = require('../controllers/vantageApiController');

  
  app.route('/read')
    .get(vantageRead.list_all_reads)
    .post(vantageRead.create_a_read);


  app.route('/read/:readHour')
    .get(vantageRead.get_a_read)
    .put(vantageRead.update_a_read)
    .delete(vantageRead.delete_a_read);
};
