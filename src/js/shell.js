function startShell()
{
    var json={"task":"start","cmd":$("#cmd").val()};
    socket.send(JSON.stringify(json));
    entrynow=0;
    $("#sample").html("<pre><code id='entrydis0'></code></pre>");
    $("#sample").append(inputEntry(0));
}
function runShell(num)
{
    var json={"task":"run","mes":$("#entryinput"+num).val()};
    socket.send(JSON.stringify(json));
    emptyEntry(num+1);
    if(num==entrynow)
    {
        entrynow++;
    }
}
function run(event,num)
{
    adaptInput(num);
    if (event.keyCode == 13 && event.shiftKey) 
    {
        runShell(num);
    }
}