function number()
{
    let num1 = parseInt(window.prompt("enter number one"))
    let num2 = parseInt(window.prompt("enter number two"))
    let num3 = parseInt(window.prompt("enter number three"))

    if(num1>num2 && num1>num3)
    {
        window.alert("number one is greater");
    }

    else if (num2>num1 && num2>num3)
    {
        window.alert("number two is greater")
    }

    else
    {
        window.alert("number three is greater")
    }

        
}

number();