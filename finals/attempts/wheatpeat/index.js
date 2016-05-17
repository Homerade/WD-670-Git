//express
var express = require('express');
var app = express();

//port
app.set('port', process.env.PORT || 9000);

//handlebars
var handlebars = require('express-handlebars').create({ defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//public archive (add dirname?)
app.use(express.static('public'));

//body parser
app.use(require('body-parser').urlencoded({extended:true}));

//credentials
var credentials = require('./credentials.js');

//mongoose
var mongoose = require('mongoose');
mongoose.connect(credentials.mongo); // or 'mongodb://localhost/adrastea' ?

//model
var Products = require('./models/products.js');

Products.find(function(err, products){
	if(products.length) return;

	new Products({
		name: 'wheat',
		price: 5,
		description: 'whole milled wheat',	
		inventory: 50,
		available: true
	}).save();	

	new Products({
		name: 'barley',
		price: 3,
		description: 'whole barley kernels',
		inventory: 70,
		available: true
	}).save();

});

//routes
app.get('/', function(req, res){
	Products.find({available:true}, function(err,products){
		var data ={
			products: products.map(function(products){
				return {
					name: products.name,
					price: products.price,
					description: products.description
				};
			})
		};
		res.render('products', data);

	});
});

var Cart = require('./models/cart.js');

app.post('/post', function(req, res){
	new Cart({
		name: req.body.itemName,
		price: req.body.itemPrice,
		inventory: req.body.itemInventory,
		available: req.body.itemAvail,
		quantity: req.body.quantity,
		datetime: req.body.datetime
	}).save(function(err){
		if (err){console.log(err);}
		res.redirect('/');
	});
});

	// Cart.update(
	// 	{name: req.body.name}, 
	// 	{price: req.body.price}, 
	// 	{$push: {quantity: req.body.quantity}},
	// 	{upsert: true},
	// 	function(err){
	// 		if(err) {
	// 			console.log(err);
	// 			res.render('500');
	// 		}
	// 		res.redirect('/'); //leave out the var = data bc you already have it now
	// 	}
	// );		

// 		var data = {
// 			cart: cart.map(function(cart){
// 				return {
// 					name: cart.name,
// 					price: cart.price,
// 					quantity: cart.quantity
// 				};
// 			})
// 		};
// 			res.redirect('/', data);
// 	});
// });		
		

// 404
app.use(function (req,res,next) {
	res.status(404);
	res.render('404');
});

// 500
app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

// listen
app.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});	

