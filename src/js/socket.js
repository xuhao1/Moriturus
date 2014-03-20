socket = io.connect('http://localhost:8080');
socket.on('connect', 
    function (){
        $("#status").text("Connected");
    }
);
socket.on('disconnect', 
    function (){
        $("#status").text("disConnected");
    }
);
socket.on('message',
function(mes)
{
    alert(mes);
});