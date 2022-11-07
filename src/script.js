function func1()
{

    var x = document.getElementById("age").value;
    var y=document.getElementById("weight").value;

    if(x<=7 && y<=20)
    {
   
    document.getElementById("demo3").innerHTML="your weight is perfect";
    }
    else if(x<=8 && y<=25)
    {
        document.getElementById("demo3").innerHTML="you are underweight";
    }
    else if(x<=15 && y<=30)
    {
        document.getElementById("demo3").innerHTML="your weight is normal";
    }
    else if(x<=20 && y<=40)
    {
        document.getElementById("demo3").innerHTML="your weight is good";
    }
}