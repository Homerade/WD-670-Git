var express = require('express');

var app = express();

//routes
app.get('/', function(req,res){
	res.send('<h2>Welcome to your personal filing system</h2><h3>Medical Documents</h3><h3>Interviews</h3><h3>Notes</h3>');
});

app.get('/medical', function(req,res){
	res.send('<h1>Medical documents</h1><h3>Here you can store all pertinent medical documents and information</h3></br>test results</br>doctor&#146s notes');
});

		app.get('/medical/testresults',function(req,res){
			res.send('<h1>Test Results</h1><h3>stored here</h3>')
		});

		app.get('/medical/drnotes',function(req,res){
			res.send('<h1>Doctor&#146s Notes</h1><h3>Doctor&#146s notes filed here</h3>')
		});

app.get('/interviews',function(req,res){
	res.send('<h1>Interviews</h1><h3>Here you can store recorded audio interview files<h3>');
});

app.get('/notes',function(req,res){
	res.send('<h1>Notes<h1><h3>Here you can file notes related to your research process and findings</h3>');
});

app.use(function(req,res,next){
	res.status(404);
	res.send('404 - Not Found');
});
//server
app.listen(3000, function() {
	console.log('Port 3000, at your service!');
});