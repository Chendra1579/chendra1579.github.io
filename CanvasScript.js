
function calculate(expression)
{
    //expression' is a string of everything in your calculator
    //we need to EXTRACT the first number from the 'expression'
    //expression = 1+2

    var firstNum = Number(expression.substr(0,1));
    var operator= expression.substr(1,1);   // capture  the '+'
    var secondNum = Number(expression.substr(2,1));
    var numLength = expression.length;

    if (numLength > 3)
    {
        x = 0;
        var testNum = Number(expression.substr(x,1));
        while(testNum % 1 === 0)
        {
            x= x+1;
            testNum = Number(expression.substr(x,1));
        }
        firstNum= Number(expression.substr(0,x));
        operator= expression.substr(x,1);
        secondNum=Number(expression.substr(x+1, numLength-(x+1)));

    }
    // credit jacob

    if (operator === '+') // that means I add firstNum & secondNum
    {
        return addNums(firstNum,secondNum);//returns the result of calling 'addNums
        //After sending ot firstNUm and secondNum

    }
    else if ( operator=== '-')
    {
        //call subtract nums
        return subNums(firstNum,secondNum);//returns the result of calling 'addNums
    }
    else if ( operator=== '*')
    {
        //call subtract nums
        return multNums(firstNum,secondNum);//returns the result of calling 'addNums
    }
    else if ( operator=== '/')
    {
        //call subtract nums
        return divNums(firstNum,secondNum);//returns the result of calling 'addNums
    }
}
function addNums(p1,p2)
{
    //p1 abf p2 are sent to addNums.... to do this
    return p1+p2;
}
function subNums(p1,p2)
{
    //p1 abf p2 are sent to addNums.... to do this
    return p1-p2;
}
function multNums(p1,p2)
{
    //p1 abf p2 are sent to addNums.... to do this
    return p1*p2;
}
function divNums(p1,p2)
{
    //p1 abf p2 are sent to addNums.... to do this
    return p1/p2;
}
