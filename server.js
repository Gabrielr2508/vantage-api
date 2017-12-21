var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  read = require('./api/models/vantageApiModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://vantage:5kliaozU@ds161426.mlab.com:61426/vantage-data',{
    useMongoClient: true,
    connectTimeoutMS: 1000
  }); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/vantageApiRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
  

app.listen(port);


console.log('Vantage Vue RESTful API server started on: ' + port);