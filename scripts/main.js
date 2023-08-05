var myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/123.jpg") {
    myImage.setAttribute("src", "images/222.jpg");
  } else {
    myImage.setAttribute("src", "images/123.jpg");
  }
};

alert("555555555567894541213")
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Mozilla is cool, " + storedName;
  }


function setUserName() {
    let myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Mozilla is cool, " + myName;
  }

  myButton.onclick = function () {
    setUserName();
  };