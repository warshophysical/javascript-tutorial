var MyHeading=document.querySelector('h1');

var myColor='blue'

if (myColor=='green'){
    heading='welcome to my green world!';
} else{
    heading='welcome to my greenless world'
    alert('are you at the wrong place?')
}

MyHeading.textContent=heading;