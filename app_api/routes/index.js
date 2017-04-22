var express = require('express');
var router = express.Router();
var controlOrders = require('../controllers/orders');

/* Routes for orders */
router.post('/create_order', controlOrders.createOrder);
router.get('/get_orders', controlOrders.getOrders);
router.put('/update_order/:order_id', controlOrders.updateOrder);

module.exports = router;
