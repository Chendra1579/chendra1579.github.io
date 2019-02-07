//create a function to check answers
function checkAns()
{
    //make an array to store feedback on every  question m,
    var feedback =[];
    //keep score
    var score=0;
    //check answers
    var q1answer= document.quiz.a1.value.toLowerCase();
    if (q1answer === '')
    {
        alert("please fill in input 1")

    }
    else {


        if (q1answer === 'sora') {
            score = score + 1;
            feedback.push("CORRECT!")
        }
        else {
            feedback.push("wrong, The answer was sora")
        }

        //push feedback to the array
        //check our work
        //check A2
        if (document.quiz.a2.value === 'crepe') {
            //increase the score
            score++;
            feedback.push("question 2 is correct!")
        } else {
            feedback.push("wrong, the answer is crepe")
        }
        //check A3
        if (document.quiz.ans3a.checked === true && document.quiz.ans3b.checked === true && document.quiz.ans3d.checked === true) {
            if (document.quiz.ans3c.checked === true || document.checked === true) {
                feedback.push("Wrong!Question 3 was Hong Kong/California/Japan")
            } else {
                score++;
                feedback.push("correct")
            }
        } else {
            feedback.push("Wrong!Question 3 was Hong Kong/California/Japan")
        }
        return"Answers:"+ feedback + "                  Score: "+ score


        //check work
        //alert(feedback);
        //alert(score);
    }
}
