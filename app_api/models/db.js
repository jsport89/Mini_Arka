var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://localhost/Loc8r';
if (process.env.NODE_ENV === 'production') {
    //dbURI = process.env.MONGOLAB_URI;
  dbURI = "mongodb://arka_challenge:arkajules422@ds151028.mlab.com:51028/heroku_j2dbj5mb";
}
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
