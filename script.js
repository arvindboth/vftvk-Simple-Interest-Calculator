function updateRate()
{
    var ratevalue = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=ratevalue;
    return true;
}

function compute()
{
    var amount = document.getElementById("principal");
    if (amount.value<=0)
    {
        alert("Enter a positive number");
        amount.focus();
        return false;
    }
    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
    resultyear = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML = 
    "If you deposit <mark>"+principal+"</mark>,<br>&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160 at an interest rate of <mark>"+rate+"%</mark>.<br>&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160 You will receive an amount of <mark>"+interest+"</mark>,<br>&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160 in the year <mark>"+resultyear+"</mark>";
    
    return true;
    
}
