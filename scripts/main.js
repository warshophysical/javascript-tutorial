var MyHeading=document.querySelector('h1');

var myColor='blue'

if (myColor=='green'){
    heading='welcome to my green world!';
} else{
    heading='welcome to my greenless world'
    alert('are you at the wrong place?')
}

MyHeading.textContent=heading;

var myText=document.querySelector('p');

function multiply(num1,num2){
    var result=num1*num2;
    return result;
}

var myNumber1=5;
var myNumber2=10;

var myCalculation=multiply(myNumber1,myNumber2);
var myCalculation=myCalculation.toString()
myText.textContent=myCalculation
