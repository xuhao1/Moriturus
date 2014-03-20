var spawn = require("child_process").spawn;
function processMessage(msg,socket)
{
    var json=JSON.parse(msg);
    if(json["task"]=="start")
    {
        runningprocs=start(json["cmd"],socket);
    }
    else if(json['task']=='run')
    {
        runningprocs.write(json['mes']);
    }

}
function start(cmd,socket)
{
    if( typeof(proc)!='undefined')
    {
        if(proc!=null)
        {
            console.log("kill");
            proc.kill();
        }
    }
    proc=spawn(cmd,{stdio:['pipe', 'pipe', 'pipe' ]});
    var output=proc.stdout;
    output.setEncoding('utf8');
    var input=proc.stdin;
    output.on("readable",
        function()
        {
            var jsonsend={"task":"ProcOutMes","mes":output.read()};
            socket.send(JSON.stringify(jsonsend));
        } );

    proc.stderr.on("readable",
        function()
        {
            var jsonsend={"task":"ProcErrMes","mes":output.read()};
            socket.send(JSON.stringify(jsonsend));
        } );
    return input;
}
exports.processMessage=processMessage;