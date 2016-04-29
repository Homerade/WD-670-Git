// setup express
var express = require('express');
var app = express();

// setup handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// establish "public directory" in express
app.use(express.static('public'));

//body parser
app.use(require('body-parser').urlencoded({extended:true}));

//file system
var fs = require('fs');

// --- routes --- //
app.get("/",function(req,res){
	var data = {
		nav1: "Appointments",
		nav2: "Services & Rates",
		nav3: "Gallery",
		nav4: "Contact"
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
			blurb: "Appointments are made on an individual basis. Fill in the fields below with your information and submit!"
		};
		res.render("appts",data);	
	});	

//creating a page after submit

	app.post('/new',function(req,res){
		
		//STEP 1
		var appt = {};

		appt.name = req.body.name;
		appt.email = req.body.email;
		appt.phone = req.body.phone;
		appt.date = req.body.date;
		appt.time = req.body.time;
		appt.descript = req.body.descript;

		//STEP 2
		var file = fs.readFileSync('records/appts.json', 'utf8');
		var jsonObject = JSON.parse(file);

		//STEP 3
		jsonObject.apptsReceived.push(appt);

		//STEP 4
		fs.writeFileSync('records/appts.json',JSON.stringify(jsonObject));

		//STEP 5
		res.render('apptThankYou',{name:req.body.name});

	});	

	app.get('/calc',function(req,res){	
		var data = {
			title: "Wage Calculator"
		}
	res.render('calc',data);	
	});	

	app.post('/input',function(req,res){
		 var totalCC = Number(req.body.ccTotal);
		 var totalCash = Number(req.body.cashTotal);
		 var cashDue = Number(req.body.cashDue);
		 var tipout = Number(req.body.tipout);

		 var totalTips = (totalCash - cashDue) + totalCC;
		 var tipoutPC = (tipout / (totalCash + totalCC)) * 100;

		 var data = {
		 	totalTips : totalTips,
		 	tipoutPC : tipoutPC
		 }

		 // The best of my attempts at putting some of the 
		 // form information on the resulting wages page:
		 
		 // res.render('wages',data,{date:req.body.date},{sales:req.body.sales});
		 res.render('wages',data);
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
	app.listen(8888, function(){
		console.log('Express on http://localhost:8888; press Ctrl-C to terminate.');
	});	