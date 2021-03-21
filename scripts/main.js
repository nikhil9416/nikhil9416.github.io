let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox01.png') {
        myImage.setAttribute('src', 'images/meme-smile01.png');
    } else if (mySrc === 'images/meme-smile01.png') {
        myImage.setAttribute('src', 'images/meme-smile02.png');
    }
    else if (mySrc === 'images/meme-smile02.png') {
        myImage.setAttribute('src', 'images/firefox01.png');
    }

}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {

    let myName = prompt('Please enter your name.');
    alert(myName);
    if(!myName){
        setUserName()
    }
    else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'This is cool, ' + myName;
    }

  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'This is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }