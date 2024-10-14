function tax()
{
    let lpa = parseInt(window.prompt("enter your LPA"));
    if(lpa < 350000)
    {
        window.alert("you dont want to pay tax")
    }
    else if(lpa > 350000 && lpa < 800000)
    {
        window.alert("you have to pay " + (lpa * 10)/100 + "on your package");
    }
    else if(lpa >= 800000)
        {
            window.alert("you have to pay " + (lpa * 17/100) + "on your package")
        }
    else
    {
        window.alert("invalid")
    }
}

tax();