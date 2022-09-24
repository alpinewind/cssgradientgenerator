var css = document.querySelector("h3");
var colorOne = document.querySelector(".selectColorOne");
var colorTwo = document.querySelector(".selectColorTwo");
var backgroundGradient = document.getElementById("bgGradient");
var randomColor = document.getElementById("randomButton");
var copyText = document.getElementById("copyButton");

	css.textContent = backgroundGradient.style.background +
		"linear-gradient(to right, "
		+ "rgb(255, 2, 0)" 
		+ ", "
		+ "rgb(255, 239, 0)" 
		+ ");";

function randomizeInputValue() {
	let randomGenerated1 = "#" + Math.floor(Math.random()*16777215).toString(16);
	let randomGenerated2 = "#" + Math.floor(Math.random()*16777215).toString(16);
	colorOne.value = randomGenerated1;
	colorTwo.value = randomGenerated2;
	setGradient();
	randomColor.style.background = "linear-gradient(to right,"
		+ colorOne.value
		+ ", "
		+ colorTwo.value 
		+ ")";
}

function setGradient() {
	backgroundGradient.style.background = "linear-gradient(to right,"
		+ colorOne.value
		+ ", "
		+ colorTwo.value 
		+ ")";
		randomColor.style.background = "linear-gradient(to right,"
		+ colorOne.value
		+ ", "
		+ colorTwo.value 
		+ ")";
		css.textContent = backgroundGradient.style.background + ";"; //shows value of gradient on screen
}

function copyToClipboard () {
let textArea = document.createElement("textArea");
textArea.setAttribute("type", "hidden");
textArea.textContent = css.textContent;
document.body.appendChild(textArea);
textArea.select();
document.execCommand("copy");
document.body.removeChild(textArea);
}

copyText.addEventListener("click", copyToClipboard);
randomColor.addEventListener("click", randomizeInputValue);
colorOne.addEventListener("input", setGradient);
colorTwo.addEventListener("input", setGradient);