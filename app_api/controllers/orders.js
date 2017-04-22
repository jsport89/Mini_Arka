var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Address = mongoose.model('Address');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/* Create and add order */
module.exports.createOrder = function(req, res) {
   console.log("****About to add the following to MONGODB****");
   console.log("shippingAdd:");
   console.log(req.body.shippingAddress.street);
   console.log(req.body);
   Order.create({
     userid: req.body.userid,
     quantity: req.body.quantity,
     shippingAddress: {
        street: req.body.shippingAddress.street,
        city: req.body.shippingAddress.city,
        state: req.body.shippingAddress.state,
        zip: req.body.shippingAddress.zip,
        country: req.body.shippingAddress.country
     },
     unitPrice: req.body.unitPrice,
     subTotal: req.body.subTotal,
     shippingService: req.body.shippingService,
     shippingPrice: req.body.shippingPrice,
     total: req.body.total,
     tax: req.body.tax,
     createdAt: req.body.createdAt,
     status: req.body.status,
     mfgName: req.body.mfgName
     },
     function(err, order) {
     if (err) {
       console.log(err);
       sendJSONresponse(res, 400, err);
       res.redirect('/dashboard/user');
     } else {
       console.log("Added Order:")
       console.log(order);
       sendJSONresponse(res, 201, order);
     }
   });
};

/* GET Orders */
/* GET list of locations */
module.exports.getOrders = function(req, res) {
/*
  res.status(200);
  res.json({"status" : "success"});
*/
  console.log("***********Inside getOrders.");
  console.log('Getting Orders...', req.params);
  Order
    .find()
    .exec(function(err, orders) {
      sendJSONresponse(res, 200, orders);
    });

};

module.exports.updateOrder = function(req, res) {
   console.log("***********Inside updateOrder:");
   console.log(req.params);
/*
  if (!req.params.locationid) {
    sendJSONresponse(res, 404, {
      "message": "Not found, locationid is required"
    });
    return;
  }
  Loc
    .findById(req.params.locationid)
    .select('-reviews -rating')
    .exec(
      function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "locationid not found"
          });
          return;
        } else if (err) {
          sendJSONresponse(res, 400, err);
          return;
        }
        location.name = req.body.name;
        location.address = req.body.address;
        location.facilities = req.body.facilities.split(",");
        location.coords = [parseFloat(req.body.lng), parseFloat(req.body.lat)];
        location.openingTimes = [{
          days: req.body.days1,
          opening: req.body.opening1,
          closing: req.body.closing1,
          closed: req.body.closed1,
        }, {
          days: req.body.days2,
          opening: req.body.opening2,
          closing: req.body.closing2,
          closed: req.body.closed2,
        }];
        location.save(function(err, location) {
          if (err) {
            sendJSONresponse(res, 404, err);
          } else {
            sendJSONresponse(res, 200, location);
          }
        });
      }
  );
  */
};
