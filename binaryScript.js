
function tenToSmall(num, base) //convert a base 10 number to a smaller base
{
    //the tenToSmall function os expecting a number  (num) in base 10
    //it will convert the number (num) to the value of 'base'
    num = Number(document.toBinary.origin.value) ; //number to convert
    base = Number(document.toBinary.newBase.value); //destination base
    var smallNum = ""; //store remainders here
    while (num > 0 ) // continue looping while num isn't zero
    {
        smallNum = num%base + smallNum; //3%5 = 2 .... % returns remainder
        //setup num fpr the next iteration of the loop
        num = Math.floor(num/base);
        alert(smallNum);
        alert(num);
    }
    return smallNum;
}
function smallToTen(num,base)//convert a small base number to base-10
{
    num = 1101; //13
    base = 2;//base of number to convert to base 10
    var tenNum = 0;//stores number to be output to the end
    var numLength = num.toString().length; //converts num to a STRING, then counts rhe number of characters in the string


    while (num) {
        var denominator = math.pow(10, (numLength - 1)); //gets denominator of fraction
        //for 1101, denominators will be 1000, 100 ,10, 1
        var currentDigit = Math.floor(num / denominator); //captures a 1 or0 to multiply by 2^numLength
        //above means 1101,1000...101/100=1.... 01/10=0....1/1=1....
        tenNum = tenNum + currentDigit * Math.pow(base, numLength - 1);
        //currentDigit*2^3.... currentDigit*2*1 etc.
        num = num % denominator; //reduces num for next iteration...
        //1101 -> 01 -> 1 ->0
        numLength--; //decrease the numLength value by 1... eventually it will hit zero
    }
}
// from Binary