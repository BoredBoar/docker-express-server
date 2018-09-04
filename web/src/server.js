var express = require('express');
var app = express();
var PORT = 3333;

var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/static'));

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('custom-message', function(data) {
    //do something here
    console.log(data)
  });
});

app.get('/', function (req, res) {
  res.sendFile('./src/index.html', err => {
    if(err) {
      console.log("Error sending index file")
    }
  });
});

server.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

// const express = require('express')
// const app = express()
//
// app.get('/', (req, res) => res.send('Hello World!'))
//
// app.listen(3333, () => console.log('Example app listening on port 3333!'))
