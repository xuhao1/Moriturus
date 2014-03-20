var exec = require("child_process").exec;
function processMessage(msg,socket)
{
    var json=JSON.parse(msg);
    if(json["task"]=="start")
        start(json["cmd"],socket);
}
function start(cmd,socket)
{
    exec(cmd,
     function (error, stdout, stderr) {
        socket.send(stdout);
        });

}
exports.processMessage=processMessage;