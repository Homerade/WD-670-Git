//express
var express = require('express');
var app = express();

//port
app.set('port', process.env.PORT || 9999);

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
var Product = require('./models/product.js')

//file system


//routes
app.get('/', function(req, res){
	Products.find({available:true}, function(err,product){
		var data ={
			products: products.map(function(vacation){
				return {
					name: product.name,
					price: product.price,
					description: product.description
				}
			})
		};
		res.render('products' data);

	});
});

var Bought = require('./models/bought.js');

app.post('/post', function(req, res){
	Bought.update(
		{$push: {name: req.body.name}, {price: req.body.price}, {quantity: req.body.quantity}},
		{upsert: true},
		function(err){
			if(err) {
				console.log(err);
				res.render('500');
			};

	});
});		
		

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

