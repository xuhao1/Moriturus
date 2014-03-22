function inputEntry(entrynow)
{
    var apphtml="<div class='btn-group' style='position:relative;top:1em'>";
    apphtml+="<button type='button' class='btn btn-default'>In["+entrynow+"]</button>";
    apphtml+="<button type='button' class='btn btn-default' onClick='runShell("+entrynow+")'>Abort</button>";
    apphtml+="</div>";
    apphtml+="<textarea rows='1' class='form-control inputarea' rows='2' onkeydown='return run(event,"
        +entrynow+")'  id='entryinput"+entrynow+"'></textarea>";
    return apphtml;
}
function outputEntry(entrynow)
{
    var apphtml="<div class='output alert alert-success'>out["+entrynow+"]=</div>";
    apphtml+="<pre><code id='entrydis"+entrynow+"'></code></pre>";
    return apphtml;
}
function calcuRows(str)
{
    var sum=1;
    for(var i=0;i<str.length;i++)
    {
        if(str[i]=='\n')
            sum++
    }
    return sum;
}
function adaptInput(num)
{  
    var entry=$("#entryinput"+num);
    var str=entry.val();
    entry.attr("rows",calcuRows(str));
}
function emptyEntry(num)
{
    if($("#entrydis"+num).length!=0)
    {
         $("#entrydis"+num).html(""); 
    }
}