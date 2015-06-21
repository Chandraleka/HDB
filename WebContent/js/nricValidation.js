var NRIC1=[];
function isValidNric()
{
var NRIC=document.getElementById("nric").value;
alert("NRIC"+NRIC);
if(NRIC.length==0 && NRIC.length!=9 )
{

alert("Invalid No");
return false;   
}
else
{
NRIC=NRIC.toUpperCase();
alert("Upper case"+NRIC);
var i;


for(i=0;i<=8;i++)
{
window.NRIC1[i]=NRIC.charAt(i);

}  if(NRIC1[0]=='S' || NRIC1[0]=='T' || NRIC1[0]=='F' || NRIC1[0]=='G')
  {
 if(checkNumeric())
 {
   if(checkAlphaNumeric())
   {
 
   
   if(NRIC1[0]=='S' || NRIC1[0]=='T')
   {
    var letter=checkUIN();
   alert("First letter is S or T");
   var letter1=String.fromCharCode(letter+65);
   alert("letter1:"+letter1);
   if(NRIC[8]==letter1)
   return true;
   else
   return false;
   
   }
   else if(NRIC1[0]=='F' || NRIC[0]=='G')
      { 
      checkFIN();  
      alert("First letter is F or G")      }
       }
     }  
 }
  else{
  alert("Invalid first letter");
  }
}}

function checkUIN()
{

NRIC1[1]=parseInt(NRIC1[1])*2;
NRIC1[2]=parseInt(NRIC1[2])*7;
NRIC1[3]=parseInt(NRIC1[3])*6;
NRIC1[4]=parseInt(NRIC1[4])*5;
NRIC1[5]=parseInt(NRIC1[5])*4;
NRIC1[6]=parseInt(NRIC1[6])*3;
NRIC1[7]=parseInt(NRIC1[7])*2;
var weight=0;
for(i=1;i<8;i++)
{
weight+=NRIC1[i];

}
alert(weight);
var set=(NRIC1[0]=='T')?4:0;
alert("setvalue "+set);
NRIC2=parseInt((weight+set)/11);
alert("NRIC2 "+NRIC2);
remainder=(weight+set)%11;
alert("remainder "+remainder);
NRIC3=NRIC2-remainder;
alert("NRIC3"+NRIC3);
return NRIC3;

}
function checkFIN()
{
NRIC1[1]=parseInt(NRIC1[1]);
NRIC1[2]=parseInt(NRIC1[2]);
NRIC1[3]=parseInt(NRIC1[3]);
NRIC1[4]=parseInt(NRIC1[4]);
NRIC1[5]=parseInt(NRIC1[5]);
NRIC1[6]=parseInt(NRIC1[6]);
NRIC1[7]=parseInt(NRIC1[7]);
var weight=0;
for(i=1;i<8;i++)
{
weight+=NRIC1[i];
}
alert("weight :"+weight);
}
function checkNumeric()
{
alert("numeric function called");
for(i=1;i<8;i++)
{
if(!isNaN(NRIC1[i]))
{
alert("Numeric check done"+NRIC1[i]);
}
else
{
alert("Not numeric no");
return false;
}
}
return true;
}
function checkAlphaNumeric()
{
var letter=/^[A-Za-z]+$/;
alert(NRIC1[8]);
if(NRIC1[8].match(letter))
{
alert(" Alpha Numeric check done");
return true;
}
else
{
alert("Not alpha numeric no");
return false;
}
}

