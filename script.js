
function clickHandler() {
	let line = document.getElementById("line");
	line.style.fill = "red";
	console.log("got here")
}

document.getElementById("lineChangeButton").addEventListener('click', clickHandler);

function mouseOver() {
	let circle = document.getElementById("circle");
	circle.style.fill = "orange"
}

function mouseOut() {
	let circle = document.getElementById("circle");
	circle.style.fill = "palevioletred"
}