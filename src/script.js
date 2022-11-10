function func1()
{

    var x = document.getElementById("age").value;
    var y=document.getElementById("weight").value;

    if(x<=7&&x>=5)
    { 
    if(y<=20&&y>=15){
        document.getElementById("demo3").innerHTML="your weight is perfect";
    }else if(y<15){
        document.getElementById("demo3").innerHTML="your weight is underweight";
    }else if(y>20){
        document.getElementById("demo3").innerHTML="your weight is overweight";
    }
    }
    else if(x>=8&&x<=10  )
    {
        if(y>=21&&y<=25){
            document.getElementById("demo3").innerHTML="your weight is perfect ";
        }else if(y<21){
            document.getElementById("demo3").innerHTML="your weight is underweight";
        }else if(y>25){
            document.getElementById("demo3").innerHTML="your weight is overweight";
        }
    }else if(x<=15&&x>=11 ){
        if(y>=26&&y<=30){
            document.getElementById("demo3").innerHTML="your weight is perfect ";
        }else if(y<26){
            document.getElementById("demo3").innerHTML="your weight is underweight";
        }else if(y>30){
            document.getElementById("demo3").innerHTML="your weight is overweight";
        }
    }
    else if(x<=20&&x>=16 )
    {
        if(y<=40&&y>=31){
            document.getElementById("demo3").innerHTML="your weight is perfect ";
        }else if(y<31){
            document.getElementById("demo3").innerHTML="your weight is underweight";
        }else if(y>40){
            document.getElementById("demo3").innerHTML="your weight is overweight";
        }
    }
    
}