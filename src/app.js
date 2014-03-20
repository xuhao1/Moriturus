var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);
heart=require('./heart')
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/js/*', function (req, res) 
{
  res.sendfile(__dirname + req.path);
});

app.get('/css/*', function (req, res) 
{
  res.sendfile(__dirname + req.path);
});

io.sockets.on('connection', function (socket) {
    socket.on('message',function (msg){
        console.log(msg);
        heart.processMessage(msg,socket);
    });
});
server.listen(8080);