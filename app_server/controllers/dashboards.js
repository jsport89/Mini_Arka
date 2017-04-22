/* To make requests to mongodb */
var request = require('request');

var apiOptions = {
  server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = "https://immense-hamlet-42746.herokuapp.com";
}

/* Report Errors */
var _showError = function (req, res, status) {
  var title, content;
  if (status === 404) {
    title = "404, page not found";
    content = "Oh dear. Looks like we can't find this page. Sorry.";
  } else if (status === 500) {
    title = "500, internal server error";
    content = "How embarrassing. There's a problem with our server.";
  } else {
    title = status + ", something's gone wrong";
    content = "Something, somewhere, has gone just a little bit wrong.";
  }
  res.status(status);
};

/* Generate UID */
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

/* GET 'user' dashboard */
module.exports.displayUserDashboard = function(req, res){
  res.render('user_dashboard');
};

/* GET 'admin' dashboard */
module.exports.displayAdminDashboard = function(req, res){
  res.render('admin_dashboard');
};

/* POST 'newOrder' */
module.exports.newOrder = function(req, res){
  var requestOptions, path, locationid, postdata;
  var date = new Date();
  var orderCreatedAt = date.toISOString();

  path = "/api/create_order";
  postdata = {
    userid: guid(),
    quantity: req.body.quantity,
    shippingAddress: {
       street: req.body.street,
       city: req.body.city,
       state: req.body.state,
       zip: req.body.zip,
       country: req.body.country
   },
   unitPrice: Math.random(),
   subTotal: Math.random(),
   shippingService: req.body.rates,
   shippingPrice: Math.random(),
   total: Math.random(),
   tax: Math.random(),
   createdAt: orderCreatedAt,
   status: "New Order",
   mfgName: "Assign Manufacturer Name" /* Ask what this is */
  };
  /* meta data for db use */
  requestOptions = {
    url : apiOptions.server + path,
    method : "POST",
    json : postdata
  };
  console.log("*****POSTDATA in app_server controller:");
  console.log(postdata);
  console.log("*******URL:: " + requestOptions.url);


  /* Error check if req from user has unfilled fields */

  /* send to db api */
  request(
    requestOptions,
    function(err, response, body) {
      if (response.statusCode === 201) {
        res.redirect('/');
      }
      else {
/* fix this later */
        console.log("ERRRRR " + JSON.stringify(err));
        _showError(req, res, response.statusCode);
      }
   }
 );
};

/* POST - Update order status */
module.exports.updateOrder = function(req, res) {
  var requestOptions, path, orderID;
  console.log("*********Inside app_server updateOrderStatus");
  console.log("Req.body: ");
  console.log(req.body);
  path = "/api/update_order/";
  orderID = req.params.order_id;
  postdata = {
    status : req.body.status,
    manufacturer : req.body.manufacturer
  };

  requestOptions = {
    url: apiOptions.server + path + orderID,
    method : "PUT",
    json : postdata
  };

  request(
     requestOptions,
     function(err, response, body) {
        console.log("Response status code: ");
        console.log(response.statusCode);
        if (response.statusCode === 200) {
           console.log("*******About to redirect..")
           res.redirect('/dashboard/admin');
        }
        else {
           console.log("ERRRR " + JSON.stringify(err));
           _showError(req, res, response.statusCode);
        }
     }
 )

};
