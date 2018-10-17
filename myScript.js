function temp()
{
    var Temperature = Number(document.project1.num.value);
    //create logic that outputs temperature different depending on number selected
    if (Temperature >= 110 )
    {
        return "Welcome to Wakanda";
    }
    else if (Temperature>= 80)
    {
        return  "summer";
    }
    else if(Temperature>= 60)
    {
        return "spring";
    }
    else if (Temperature>= 40)
    {
        return "Fall";
    }
    else if (40 >= Temperature)
    {
        return "Winter";
    }
}
function working()
    {
        var work = document.project2.cal.value;
        var min= Number(document.project2.TimeNum.value);
        //create logic that outputs "hello world" different depending on language selected
        if (work == 'jog' ) //case of jog
        {
                return min*5 + " Cal";
        }
        else if (work == 'swim')
        {
                return min*4 + " Cal";
        }
        else if (work == 'golf')
        {
                return min*2 + " Cal";
        }
        else if(work == 'VS')
        {
                return min + " Cal";
        }
        else if ( work == 'baseball')
        {
                return min*3 + " Cal";
        }
        else
        {
            return "please choose a sport";
        }

    }
function grade()
{
    var num5 = Number(document.project3.percentage.value);
    //create logic that outputs temperature different depending on number selected
    if (num5 >= 110) {
        return "A++";
    }
    else if (num5 >= 90) {
        return "A";
    }
    else if (num5 >= 80) {
        return "B";
    }
    else if (num5 >= 70) {
        return "C";
    }
    else if (num5 >= 60) {
        return "D";
    }
    else
    {
        return "F";
    }
}
function isPrime()
{
    /*var x = 7;
    var y = 3;
    var z =x%y;
    alert(z);
    */
    var checkNum = document.primeNumber.pNum.value;
    var checkPrime=true; // this is a boolean variable aja always set to true or false

    if (checkNum<=1)
    {
        alert(checkNum + "is NOT prime")
        return
    }
    for (var i=checkNum-1; i>1; i--)
    {
        if (checkNum%i==0) // means no remainder
        {
            checkPrime=false;
        }
    }
    //After the ;loop completes, display a message based on the value of check prime
    if (checkPrime== true)
    {
        alert(checkNum + " isPrime")
    }
    else
    {
        alert(checkNum+" is not prime")
    }
}
/*
from javaScript FUN
 */



