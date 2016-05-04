var mongoose = require('mongoose');

var cartSchema = mongoose.Schema ({
	datetime: {
		type:Date,
		default:Date.now
	},
	name: String,
	price: Number,
	quantity: Number,
	inventory: Number, 
	available: Boolean, 
});

var Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;

//price: {
//		amount: Number,
//		measurement: String
//	},