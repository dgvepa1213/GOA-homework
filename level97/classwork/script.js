
const firstElement = document.getElementById("first-element");
const secondElement = document.querySelector(".second-element");
const thirdElement = document.querySelector("body div:nth-child(3)");


firstElement.style.color = "red";
firstElement.style.backgroundColor = "yellow";
firstElement.style.fontSize = "20px";
firstElement.style.fontStyle = "italic";
firstElement.textContent = "Modified First Element";


secondElement.style.color = "blue";
secondElement.style.backgroundColor = "lightgreen";
secondElement.style.fontSize = "18px";
secondElement.style.fontWeight = "bold";
secondElement.textContent = "Modified Second Element";


thirdElement.style.color = "purple";
thirdElement.style.backgroundColor = "orange";
thirdElement.style.fontSize = "16px";
thirdElement.style.textDecoration = "underline";
thirdElement.textContent = "Modified Third Element";