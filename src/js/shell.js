function startShell()
{
    var json={"task":"start","cmd":$("#cmd").val()};
    socket.send(JSON.stringify(json));
    entrynow=0;
    $("#sample").html("<pre><code id='entrydis0'></code></pre>");
    var apphtml="<p> In[1]=";
    apphtml+="<textarea rows='1'  class='form-control' onkeypress='return run(event,0)' rows='2' id='entryinput0'></textarea>";
    $("#sample").append(apphtml);
}
function run(event,num)
{
    //TODO 修复在shift-enter时候会多出一行
    if (event.keyCode == 13 && event.shiftKey) 
    {
        var json={"task":"run","mes":$("#entryinput"+num).val()};
        socket.send(JSON.stringify(json));
        if($("#entrydis"+(num+1)).length!=0)
        {
           $("#entrydis"+(num+1)).html(""); 
        }
        if(num==entrynow)
        {
            entrynow++;
        }
        /*
        str=$("#entryinput"+num).val();
        str=$("#entryinput"+num).val(str.substring(0,str.length-1));
        */
    }
    else if(event.keyCode==13)
    {
        var rowsnow=parseInt($("#entryinput"+num).attr('rows'));
        $("#entryinput"+num).attr("rows",rowsnow+1);
    }
}