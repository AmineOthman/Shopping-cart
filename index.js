//Product 1 ------------------------------------------------------//
var x = 0;
var y = 0;
var z = 0;



function plus1()
{
    var a=document.getElementById('price1').innerHTML;
    a++;
    document.getElementById('price1').innerHTML=  a; 
    document.getElementById('total1').innerHTML=  a*60;

    x=parseInt(a*60);    
    document.getElementById('total').innerHTML=x+y+z; 
}

function minus1()
{
    var b=document.getElementById('price1').innerHTML;
    if (b > 0) 
    {
      b--;
    document.getElementById('price1').innerHTML=b;
    document.getElementById('total1').innerHTML=b*60;
    x=parseInt(b*60);    
    document.getElementById('total').innerHTML=x+y+z; 

    } else if (b<0){
        document.getElementById('price1').innerHTML=0;
        document.getElementById('total1').innerHTML=0;
        document.getElementById('total').innerHTML=0;

    }
    
}

//Product 2--------------------------------------------------------------//

function plus2()
{
    var a=document.getElementById('price2').innerHTML;
    a++;
    document.getElementById('price2').innerHTML=  a; 
    document.getElementById('total2').innerHTML=  a*120;

    y=parseInt(a*120);    
    document.getElementById('total').innerHTML=x+y+z; 
}

function minus2()
{
    var b=document.getElementById('price2').innerHTML;
    if (b>0){
    b--;
    document.getElementById('price2').innerHTML=b;
    document.getElementById('total2').innerHTML=b*120;
    y=parseInt(b*120);    
    document.getElementById('total').innerHTML=x+y+z; 

    }else if (b<0){
    document.getElementById('price2').innerHTML=0;
    document.getElementById('total2').innerHTML=0;
    document.getElementById('total').innerHTML=0;
    }

    
}

//Product3-------------------------------------------------------------------//
function plus3()
{
    var a=document.getElementById('price3').innerHTML;
    a++;
    document.getElementById('price3').innerHTML=  a; 
    document.getElementById('total3').innerHTML=  a*40;

    z=parseInt(a*40);    
    document.getElementById('total').innerHTML=x+y+z; 
}

function minus3()
{
    var b=document.getElementById('price3').innerHTML;
    if (b>0){
    b--;
    document.getElementById('price3').innerHTML=b;
    document.getElementById('total3').innerHTML=b*40;
    z=parseInt(b*40);    
    document.getElementById('total').innerHTML=x+y+z;
    }else if (b<0){
    document.getElementById('price3').innerHTML=0;
    document.getElementById('total3').innerHTML=0;
    document.getElementById('total').innerHTML=0; 
    }
    
}




