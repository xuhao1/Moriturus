function connect()
{
    socket = io.connect('http://localhost:8080');
    socket.on('connect', 
        function (){
            $("#status").text("Connected");
            $("#status").attr("onClick","")
        }
        );
    socket.on('disconnect', 
        function (){
            $("#status").text("disConnected");
            $("#status").attr("onClick","connect()");
        }
        );
    socket.on('message',
        function(mes)
        {
            mesjson=eval("("+mes+")");
            if(mesjson['task']=='ProcOutMes')
            {
                console.log(mesjson['task']);
                if($("#entrydis"+entrynow).length==0)
                {
                    $("#sample").append(outputEntry(entrynow));
                    $("#sample").append(inputEntry(entrynow));
                }
                $("#entrydis"+entrynow).text($("#entrydis"+entrynow).text()+mesjson['mes']);
            }
        });
}
connect();