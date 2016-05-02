var mongoose = require('mongoose');

var cartSchema = mongoose.Schema ({
	name: String,
	price: {
		amount: Number,
		measurement: String
	},
	quantity: Number,
	inventory: Number, 
	available: Boolean, 
});

var Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;