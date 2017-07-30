var http = require('http'),
	finalhandler = require('finalhandler'),
	serveIndex = require('serve-index'),
	serveStatic = require('serve-static'),
	open = require('open'),
	index, serve, port, root;
	
port = 8080;

root = '../GettingStarted';

index = serveIndex(root, {view: 'details', icons: true});

serve = serveStatic(root, {
	index: 'index.html'
});

var server = http.createServer(function onRequest(req, res) {
	var  done = finalhandler(req, res);
	serve(req, res, function onNext(err) {
		if (err) {
			return done(err);
		}
		
		index(req, res, done);
	});
});

console.log('Starting server on port ' + port + '...');

server.listen(port);
open('http://localhost:' + port + '/');