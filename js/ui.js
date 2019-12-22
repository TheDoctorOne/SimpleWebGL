function rotX() {
	var val = document.getElementById("input").value;
	rx = xToRad(val);
	scene();
}

function rotY() {
	var val = document.getElementById("input").value;
	ry = yToRad(val);
	scene();
}
function rotZ() {
	var val = document.getElementById("input").value;
	rz = zToRad(val);
	scene();
}

function setX() {
	var val = document.getElementById("input").value;
	tx = val;
	scene();
}
function setY() {
	var val = document.getElementById("input").value;
	ty = val;
	scene();
}
function setZ() {
	var val = document.getElementById("input").value;
	tz = val;
	scene();
}


//Background Color Change
var transparency = 1;
var RED = 0;
var GREEN = 0;
var BLUE = 0;
function setTransparency() {
	var val = document.getElementById("input").value;
	transparency = val;
	scene();
}
function setRed() {
	var val = document.getElementById("input").value;
	RED = val;
	scene();
}

function setBlue() {
	var val = document.getElementById("input").value;
	BLUE = val;
	scene();
}

function setGreen() {
	var val = document.getElementById("input").value;
	GREEN = val;
	scene();
}