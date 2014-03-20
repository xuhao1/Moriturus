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
                    $("#sample").append("<p>out["+entrynow+"]=</p>");
                   $("#sample").append("<pre><code id='entrydis"+entrynow+"'></code></pre>");
                   var apphtml="<p> In["+(entrynow+1)+"]=</p>";
                    apphtml+="<textarea rows='1' class='form-control' rows='2' onkeypress='return run(event,"
                    +entrynow+")'  id='entryinput"+entrynow+"'></textarea>";
                    $("#sample").append(apphtml);
                }
                $("#entrydis"+entrynow).text($("#entrydis"+entrynow).text()+mesjson['mes']);
            }
        });
}
connect();