var http = require('http');

http.createServer(function(req,res){
	var path = req.url.replace(/\/>(?:\?.*)?$/, '').toLowerCase();
	switch(path) {
		case '/homepage':
				res.writeHead(200, { 'Content-type': 'text/plain' });
				res.end('Homepage');
				break;
		case '/about':
				res.writeHead(200, { 'Content-type': 'text/plain' });
				res.end('About');
				break;
		default:
				res.writeHead(404, { 'Content-type': 'text/plain' });
				res.end('Not Found');
				break;					
	}
}).listen(3000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate...');
