let today=new Date()
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let day=today.getDay()

let day_today=document.querySelector(".day_today")
day_today.innerHTML=`Today is ${daylist[day]}`

let hours=today.getHours()
let prepand=(hours>=12)?"Pm":"AM";

let sec=today.getSeconds()
hours=(hours>=12)? hours -12:hours;
if(hours===0 && prepand==="Pm"){
    if(min===0 && sec===0){
        hours=12
        prepand="PM"
    }
}
if(hours===0 && prepand==="Am=M"){
    if(min===0 && sec===0){
        hours=12
        prepand="AM"
    }
}
let cudate=document.querySelector(".time")
setInterval(()=>{
    let secc=new Date().getSeconds()
    let min=today.getMinutes()
    cudate.innerHTML=`Current date and time is ${hours} ${prepand} :${min} :${secc}`
   
},1000)




//////////////--------------------****************************-----------------////////////////////////

/**
 * 2 Question 
 * 
 */


let btn=document.querySelector(".container button")
function printContant(){
    window.print()
}
btn.addEventListener("click",printContant)


//////////////--------------------****************************-----------------////////////////////////

/**
 * 3 Question 
 * 
 */


let datee=new Date()
let dat=datee.getDate()
let month=datee.getMonth()+1;
let yy=datee.getFullYear();
console.log(dat,month,yy)

if(dat<10){
    dat="0"+dat
}


if(month<10){
    month="0"+month
}

console.log(dat,month,yy)

let currentd=document.querySelector(".current--date")
currentd.innerHTML=`${month}-${dat}-${yy} , ${month}/${dat}/${yy} or ${dat}-${month}-${yy} , ${dat}/${month}/${yy}`;



//////////////--------------------****************************-----------------////////////////////////

/**
 * 4 Question 
 * 
 */

//////////////--------------------****************************-----------------////////////////////////
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);
let aria=document.querySelector(".aria");
aria.innerHTML=" Ans= "+area;




function Animation_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}


//////////////--------------------****************************-----------------////////////////////////

/**
 * 6 Question 
 * 
 */

//////////////--------------------****************************-----------------///////////////////////

let inp =document.querySelector(".inputt")

const printAnswer=function(leaoyar){
    let ansplace=document.querySelector(".ansplace")
  if(leaoyar % 4===0){
    ansplace.innerHTML=`yes it is a leap year`
  }else{
    ansplace.innerHTML=`NO it is not leap year`
  }
}

inp.addEventListener("keydown",(e)=>{
  if(e.key==="Enter"){
    printAnswer(inp.value)
  }
})

/**
 * 7 Question 
 * 
 */

//////////////--------------------****************************-----------------///////////////////////


for(let year=2014;year<=2050;year++){
    let newyear=new Date(year,0,1)
  
    if(newyear.getDay()===0){
         console.log("the sunday will be on this day"+year)
    }
}


/**
 * 8 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////

let rennum=Math.floor(Math.random()*10)+1
console.log(rennum)

let userask=prompt("tell you number");
userask=Number.parseInt(userask);

if(userask==rennum){
    alert("it is correct")
}else(
    alert("that is not correct")
)




*/

/**
 * 9 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/
 
let todayy=new Date()
let cridate=new Date(today.getFullYear(),11,25);
console.log(cridate)
if(todayy.getDate()>=25 && todayy.getMonth()==11){
    cridate.setFullYear((cridate.getFullYear())+1)
}
let msinday=60*60*1000*24;

console.log(Math.ceil((cridate.getTime()-todayy.getTime())/(msinday))+" is dau is left for crismix")



/**
 * 10 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/


let input_1=document.getElementById("input-1");

let input_2=document.getElementById("input-2");
let anss=document.querySelector(".ans")

function multiply(){
 let ans= input_1.value * input_2.value
anss.innerHTML=`the result is  : ${ans}`
}

function devide(){
    let ans= input_1.value / input_2.value
    anss.innerHTML=`the result is  : ${ans}`
}


/**
 * 11 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/


function cel(calsuse){
   let cell=calsuse;
   let celtof=cell * 9/5 +32;
   let mess= `${cell}°C is  ${celtof}°F`;
   console.log(mess)
}
cel(45);
function fToC(fahrenheit) 
{
  const fTemp = fahrenheit;
  const fToCel = (fTemp - 32) * 5 / 9;
  const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
    console.log(message);
} 
fToC(45)


/**
 * 12 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/



let curuntwurl=document.URL;
console.log(curuntwurl)
let pin=document.querySelector(".loadingurl");
pin.innerHTML=curuntwurl

/**
 * 13 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/


let username='abcd';
let nu=12;
this[username]=nu;
console.log(this[username])
//console.log(this.username)
console.log(window)
/**
 * 14 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/

let filename="ravanfaile.php";
let fname=filename.split(".").pop()
console.log(fname)
let filenMAME="havabazi.js";
let fnamE=filenMAME.split(".").pop()
console.log(fnamE)




/**
 * 15 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/



function addin(x,y){
    if(x==y){
        return 3*(x+y);

    }else{
        return x+y
    }
}
console.log(addin(4,4))






/**
 * 16 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/

function checknum(first,secend){
    if(first==50 || secend==50 || secend+first==50){
        return true;
    }else{
        return first+secend;

    }
}

console.log(checknum(10,10))


/**
 * 17 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/


function defrence(n){
    if(n <=19){
        return 19-n
    }else{
        return (n-19)*3
    }
}
console.log(defrence(5))





/**
 * 18 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/



function checkk(n){
    return (Math.abs((100-n)<=20)||Math.abs((400-n)<=20))
}
console.log(checkk(9))



/**
 * 19 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/



function checkNagitave(x,y){
 if((x>0 && y<0)||(x<0&&y> 0)){
    return true;
 }else{
    return false
 }
}

console.log(checkNagitave(2,2))
console.log(checkNagitave(-2,2))
console.log(checkNagitave(2,-2))
console.log(checkNagitave(-2,-2))



/**
 * 20 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/




function checks(x){
    if(x===null||x===undefined||x.substring(0,2)==="py"){
        return x
    }else{
        return "py"+x
    }
}

console.log(checks("pyotone"))


/**
 * 21 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/




function rev(x){
    let a= Array.from(x)
   let b= a.reverse()
   let c=b.join("")
   return c.toString()
}
console.log(rev("hello i ama aman"))
/**OR */
function st(xx){
    if(xx===null||xx===undefined||xx.length<=1){
        return xx
    }else{
        let carr= xx.substring(1,xx.length-1);
        let re=(xx.charAt(xx.length-1)+carr+xx.charAt(0))
        console.log(re)
    }
}
st("animal")