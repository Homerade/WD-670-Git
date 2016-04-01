var express = require('express');

var app = express();

//routes
app.get('/', function(req,res){
	var text = '<h2>Welcome to your personal filing system</h2>';
	text += '<h3><a href="/medical">Medical Documents</a></h3>';
	text += '<h3><a href="/interviews">Interviews</a></h3>';
	text += '<h3><a href="/notes">Notes</a></h3>';
	res.send(text);
});

	app.get('/medical', function(req,res){
		var text = '<h1>Medical documents</h1>';
		text += '<h3>Here you can store all pertinent medical documents and information</h3>';
		text += '<a href="/medical/testresults">test results</a>';
		text += '<a href="/medical/drnotes">doctor&#146s notes</a>';
		res.send(text);
	});

			app.get('/medical/testresults',function(req,res){
				var text = '<h1>Test Results</h1>';
				text += '<h3>stored here</h3>';
				res.send(text);
			});

			app.get('/medical/drnotes',function(req,res){
				var text = '<h1>Doctor&#146s Notes</h1>';
				text += '<h3>Doctor&#146s notes filed here</h3>';
				res.send(text);
			});

	app.get('/interviews',function(req,res){
		var text = '<h1>Interviews</h1>';
		text += '<h3>Here you can store recorded audio interview files<h3>';
		res.send(text);
	});

	app.get('/notes',function(req,res){
		var text = '<h1>Notes<h1>';
		text += '<h3>Here you can file notes related to your research process and findings</h3>';
		res.send(text);
	});

app.use(function(req,res,next){
	res.status(404);
	res.send('404 - Not Found');
});
//server
app.listen(3000, function() {
	console.log('Port 3000, at your service!');
});