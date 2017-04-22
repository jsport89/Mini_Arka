var mongoose = require( 'mongoose' );

var addressSchema = new mongoose.Schema({
  street: String,
  state: String,
  zip: Number,
  country: String
});

var orderSchema = new mongoose.Schema({
    userid: String,
    quantity: Number,
    shippingAddress: [ addressSchema ],
    unitPrice: Number,
    subTotal: Number,
    shippingService: String,
    shippingPrice: Number,
    total: Number,
    tax: Number,
    createdAt: String,
    status: String,
    mfgName: String

});

mongoose.model('Order', orderSchema);
mongoose.model('Address', addressSchema);
