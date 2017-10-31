

var myBody = document.querySelector('p');
myBody.textContent = 'okay, better then ughh';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '/Users/ieqadministrator/Desktop/practice project/Images/smiley.jpeg') {
      myImage.setAttribute ('src','/Users/ieqadministrator/Desktop/practice project/Images/smiley_2.jpeg');
    } else {
      myImage.setAttribute ('src','/Users/ieqadministrator/Desktop/practice project/Images/smiley.jpeg');
    }
}

document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}

var myButton = document.querySelector('button');

var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello Interloper, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello Interloper, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}