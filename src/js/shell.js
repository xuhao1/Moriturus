function startShell()
{
    var json={"task":"start","cmd":$("#cmd").val()};
    socket.send(JSON.stringify(json));
}