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
function workOut()
    {
        var work = document.project2.type.value;
        var min= Number(document.project2.Time.value);
        //create logic that outputs "hello world" different depending on language selected
        if (work == 'jog' ) //case of jog
        {
            if (min>=1)
            {
                return min*5 + " Cal"
            }
        }
        else if (work == 'swim')
        {
            if (min>=1)
            {
                return min*4 + " Cal"
            }
        }
        else if (work =='golf')
        {
            if (min>=1)
            {
                return min*2 + " Cal"
            }
        }
        else if(work == 'VS')
        {
            if (min>=1)
            {
                return min*1 + " Cal"
            }
        }
        else if ( work == 'baseball')
        {
            if (min>=2)
            {
                return min*2 + " Cal"
            }
        }
        else
        {
            return "please choose a sport"
        }

    }
function grade(Number) {
    var GRADENUM = Number(document.project2.Num.value);
    //create logic that outputs grade different depending on number selected
    if (GRADENUM >= 90) {
        return "A";
    }
    else if (GRADENUM >= 80) {
        return "B";
    }
    else if (GRADENUM >= 70) {
        return "C";
    }
    else if (GRADENUM >= 60) {
        return "D";
    }
    else if (GRADENUM) {
        return "F+";
    }
    else {
        NC
    }
}

