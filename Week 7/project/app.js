// setup express
var express = require('express');
var app = express();

// setup handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// establish "public directory" in express
app.use(express.static('public'));

// --- routes --- //
app.get("/",function(req,res){
	var data = {
		nav1: "Contact",
		nav2: "Gallery",
		nav3: "Appointments",
		nav4: "Services & Rates"
	};

	res.render("homepage", data);

});


// contact page
	app.get("/contact",function(req,res){
		var data = {
			title: "Contact",
			phone: "410 961 2834",
			address: "321 Fredricksberg Rd, Fredricksberg VA 12345",
			email: "jrsbrides@gmail.com"
		};
		res.render("contact",data);
	});


// gallery page
	app.get("/gallery",function(req,res){
		var data = {
			title: "Gallery",
			content: "coming soon..."
		};
		res.render("default",data);
	});


// set up appt page
	app.get("/appts",function(req,res){
		var data = {
			title: "Appointments",
			content: "Appointments are made on an idividual basis. Check availability ad make an appointment via the calendar below or contact us to connect with a real person."
		};
		res.render("default",data);	
	});		


// services and rates page
	app.get("/servicesandrates",function(req,res){
		var data = {
			title: "Services and Rates",
			service1: "Hair Styling",
			service2: "Nails",
			service3: "Make-Up"
		};
		res.render("servicesandrates",data);
	});


// 404 Not Found handler	
	app.use(function(req,res,next){
		res.status(404);
		res.render('404');
	});


// 500 server error handler
	app.use(function(err,req,res,next){
		console.error(err.stack);
		res.status(500);
		res.render('500');
	});	


// start the server
	app.listen(3000, function(){
		console.log('Express on http://localhost:3000; press Ctrl-C to terminate.');
	});	