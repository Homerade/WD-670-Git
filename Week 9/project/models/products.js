var mongoose = require('mongoose');

var productSchema = mongoose.Schema ({
	name: String,
	price: Number,
	description: String,
	inventory: Number, //hidden
	available: Boolean, //in the future attach to inventory: 0=false, allElse=true
	//eventual quick order quantity: field and 'Add to Cart' button
});

var Product = mongoose.model('Product', productSchema);
module.exports = Product;