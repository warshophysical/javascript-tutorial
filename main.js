var MyHeading=document.querySelector('h1');

var myColor='green'

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

// document.querySelector('html').onclick = function() {
//     alert('Hey you! out there in the cold');
// }

var myHTML = document.querySelector('html');
myHTML.onclick = function() {
    alert('Hey you! out there in the cold')
};

var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sungerbob1.png') {
      myImage.setAttribute('src','images/sungerbob2.png');
    } else {
      myImage.setAttribute('src','images/sungerbob3.png');
    }
}

var myButton=document.querySelector('button');
var myTextLine=document.querySelector('h2');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myTextLine.textContent = 'Mozilla is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myTextLine.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }


