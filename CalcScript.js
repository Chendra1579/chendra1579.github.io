
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


function drawShapes()

{

    drawLines();

    drawText();

    //drawImage();

    drawCircles();

    drawRectangles();

    initialized();

}

function drawImage()

{

        var pic1 = new Image();

        pic1.src= "img/earth_PNG35.png";

}



var a;// this will reference the animation function

var iX = 360;

var iY = 360;

var iW = 60;

var iH = 70;

function drawRectangles()

{   //ties canvas object from index.html to your javascript

    var canvas = document.getElementById("myCanvas");

    //this next line is arguably the most important

    var ctx = canvas.getContext("2d");

    ctx.fillStyle="#f8f8f7";

    ctx.fillRect(150,350,70,50);

}



function drawCircles() {

    var canvas = document.getElementById("myCanvas");

    var ctx = canvas.getContext("2d");



    ctx.beginPath();

    ctx.arc(200, 250, 60, 0, (1 / 2) * Math.PI);

    ctx.fillStyle = "#000000";

    ctx.stroke();

    ctx.fill();



    ctx.beginPath();

    ctx.arc(100, 250, 60, (1 / 2) * Math.PI, 3.2);

    ctx.fillStyle = "#000000";

    ctx.stroke();

    ctx.fill();



    ctx.beginPath();

    ctx.arc(150, 350, 100, 0, 180);

    ctx.fillStyle = "#ff0c13";

    ctx.stroke();

    ctx.fill();



    ctx.beginPath();

    ctx.arc(150, 320, 10, 0, 180);

    ctx.fillStyle = "#000000";

    ctx.stroke();

    ctx.fill();



    ctx.beginPath();

    ctx.arc(225, 320, 10, 0, 180);

    ctx.fillStyle = "#000000";

    ctx.stroke();

    ctx.fill();



    //angel



    ctx.beginPath();

    ctx.arc(375, 100, 100, 0, 180);

    ctx.fillStyle = "#ffffff";

    ctx.stroke();

    ctx.fill();



    ctx.beginPath();

    ctx.arc(350, 75, 10, 0, 180);

    ctx.fillStyle = "#000000";

    ctx.stroke();

    ctx.fill();



    ctx.beginPath();

    ctx.arc(290, 75, 10, 0, 180);

    ctx.fillStyle = "#000000";

    ctx.stroke();

    ctx.fill();

}

function drawLines()

{

    var canvas = document.getElementById("myCanvas");

    var ctx = canvas.getContext("2d");

    ctx.beginPath();

    ctx.moveTo(0,0);

    ctx.lineWidth=9;

    ctx.lineTo(500,500);

    ctx.strokeStyle="ff0000";

    ctx.stroke();

    ctx.lineWidth=9;



}

function drawText()

{

    var canvas = document.getElementById("myCanvas");

    var ctx = canvas.getContext("2d");

    ctx.fillStyle="#000000";

    ctx.font= "70px Ariel";

    ctx.fillText("Devil",0,500);

}



//draw an image dynamically

var pic1 = new Image();

pic1.src= "img/earth_PNG35.png";



function halo()

{

    var ctx = document.getElementById("myCanvas").getContext("2d");



    ctx.beginPath();

    ctx.arc(375, 10, 50, 0, 180);

    ctx.stroke();

    ctx.strokeStyle="CCB404";

}



function drawBackGround()

{

    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.fillStyle = "#f9fffb";

    ctx.fillRect(0,0, window.innerWidth, window.innerHeight)//the height and width are to adjust whatever

                                                            // the canvas dimension are

}



function initialized()// sets up the animation

{

    //create a rect to animate



    drawBackGround();



    var ctx = document.getElementById("myCanvas").getContext("2d");



    ctx.drawImage(pic1,iX,iY,iW,iH);//picture

}

function startAnimation()

{

    animate();

}



var moveAmount = 4;

var moveUpAmount = 4;



function animate()

{

    a=requestAnimationFrame(animate); //function that enables animation in js

    initialized();

    drawLines();

    drawText();

    //drawImage();

    drawCircles();

    drawRectangles();





    checkPic();

    movePicRight();

    MovePicUp();

}

function movePicRight()

{

    var ctx = document.getElementById("myCanvas").getContext("2d");

    iX = iX + moveAmount;// move 4 pixels ever refresh

    ctx.drawImage(pic1,iX,iY,iW,iH);//picture

}





function MovePicUp()

{



    var ctx = document.getElementById("myCanvas").getContext("2d");

    iY = iY + moveUpAmount;// move 4 pixels ever refresh

    ctx.drawImage(pic1,iX,iY,iW,iH);//picture

}

function checkPic()

{



    if (iX > 450)

    {

        moveAmount = moveAmount *(-1);

    }



    if (iX < 0)

    {

        moveAmount = moveAmount *(-1);

    }

    if (iY > 445)

    {

        moveUpAmount = moveUpAmount *(-1);

    }



    if (iY < 0)

    {

        moveUpAmount = moveUpAmount *(-1);

    }

}
