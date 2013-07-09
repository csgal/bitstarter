var express = require('express');

var app = express.createServer(express.logger());

/*
app.get('/', function(request, response) {
  response.send('Hello World 2!');
});
*/
var fs = require('fs');
fs.readFileSync('index.html');
var buf = new Buffer(fs, 'utf-8');
app.get('/', function(request, response) {
   response.send(buf);
};

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
