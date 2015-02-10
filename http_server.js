'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var parsedUrl = req.url.split('/');

  if(req.url === '/time') {
    res.write(Date() + '\n');
  } else
  if(parsedUrl[1] === 'greet') {
    res.write('(*Voice of Dracula) Greeting ' + parsedUrl[2] +
              '. Enter, of your own free will.\n');
  } else {
    res.write("I don't know what to do with that request\n");
  }

  res.end();
});

server.listen(3000);
