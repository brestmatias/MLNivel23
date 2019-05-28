var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  DNA = require('./api/models/dna');
  bodyParser = require('body-parser');

  
mongoose.Promise = global.Promise;
console.log('Conecting to Data Base...');
const uri='mongodb://magneto:magneto1@ds261626.mlab.com:61626/mutantchecker';
mongoose.connect(uri, {useNewUrlParser: true } ).then(
  err => { console.error(err); }
);; 
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/mutantRoutes');
routes(app); 
app.listen(port);

console.log('MutantChecker RESTful API server started on: ' + port);