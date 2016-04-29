var mongoose = require('mongoose');

var boughtSchema = mongoose.schema ({
	name: String,
	price: Number,
	quantity: Number,
	inventory: Number, 
	available: Boolean, 
});

var Bought = mongoose.model('Bought', boughtSchema);
module.exports = bought;