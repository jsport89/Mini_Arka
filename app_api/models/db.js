var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://localhost/Loc8r';
mongoose.connect(dbURI);

/* Check for successful connection through mongoose*/
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});

/* Check for connection error */
mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});

/* Check for disconnection event */
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

// BRING IN YOUR SCHEMAS & MODELS
require('./orders');
