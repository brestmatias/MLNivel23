module.exports = function(app) {
  var mutant = require('../controllers/mutantController');

  // todoList Routes
  app.route('/mutant/')
    .post(mutant.checkMutant);

    /*
  app.route('/tasks/:taskId')
    .get(mutant.read_a_task)
    .put(mutant.update_a_task)
    .delete(mutant.delete_a_task);*/
};