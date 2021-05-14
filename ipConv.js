var ip = document.getElementById('in');
var out = document.getElementById('out');

var tab = [];

function dec2bin(dec) 
{
    return (dec >>> 0).toString(2);
}

function class1(){}

function bin2dec(bin) 
{
    return parseInt(bin, 2);
}

ip.addEventListener('focusout', function (e) 
{
    var i=0;
    res = ip.value.split(".");
    if (res[0].search(/^[10]+$/) != -1) 
    {
        res.forEach(k => 
        {
            tab[i] = bin2dec(k);
            i++;
        });
        class1(tab[0]);
    } 
    else 
    {
        res.forEach(k => 
        {
            tab[i] = dec2bin(k);
            i++;
        });
        class1(res[0]);
    }
    out.value = tab.join(".");
}, false)