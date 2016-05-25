var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8080;
server.listen(port, function() {
  console.log("Server listening on port "+ port +"...");
});
//----------------------------------------------------

app.get('/', function(request, response) {
  response.sendFile(__dirname + "/public/html/index.html");
});
