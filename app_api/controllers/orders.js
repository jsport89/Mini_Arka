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
  console.log('Getting Orders...');
  Order
    .find()
    .exec(function(err, orders) {
      sendJSONresponse(res, 200, orders);
    });
};

/* PUT update order's status */
module.exports.updateOrder = function(req, res) {
  var orderID = req.params.order_id;

  console.log("***********Inside app_api updateOrder:");
  console.log("Order_ID: " + orderID);

  Order
    .findById(orderID)
    .exec(
      function(err, order) {
        if (!order) {
          sendJSONresponse(res, 404, {
            "message": "locationid not found"
          });
          return;
        } else if (err) {
          sendJSONresponse(res, 400, err);
          return;
        }
        console.log("**********In update order exec");
        console.log("Order retrieved: ")
        console.log(order);

        statusToSet = req.body.status;
        manufacturerToSet = req.body.manufacturer;

        if (statusToSet !== "Select")
          order.status = statusToSet;

        if (manufacturerToSet !== "")
          order.mfgName = manufacturerToSet;

        order.save(function(err, order) {
          if (err) {
            sendJSONresponse(res, 404, err);
          } else {
            console.log("**********Updated order entry");
            sendJSONresponse(res, 200, order);
          }
        });
      }
  );

};
