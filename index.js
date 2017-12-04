
var fs = require('fs');
var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
	response.setHeader("Content-Type", "text/html; charset=utf-8");

	if (request.method === 'GET' && request.url === '/') {

	fs.readFile('./index.html', function(err, html) {
	    if (err) throw err; 
	    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
	    response.write(html);
	  	response.end();
	 });	 	
	} else {
		response.statusCode = 404;
		fs.readFile('./fox.jpg', function(err, img) {
			var imagedata = new Buffer(img).toString('base64');
			response.write('<h1>.ssssssssssss..Nie połączyłeś się!</h1>');
			response.write("<img src='data:fox.jpg;base64,"+imagedata+"'/>");
    		response.end();
		});
	}
});		
server.listen(8000);


