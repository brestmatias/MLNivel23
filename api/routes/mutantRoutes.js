module.exports = function(app) {
  var mutant = require('../controllers/mutantController');

  // todoList Routes
  app.route('/mutant/')
    .post(mutant.checkMutant);

    
  app.route('/stats')
    .get(mutant.stats);
};