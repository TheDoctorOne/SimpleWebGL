function setPerspective() {
	perspective = true;
	tx = -200;
	ty = 0;
	tz = 0;
	rx = xToRad(0);
	ry = yToRad(0);
	rz = zToRad(0);
	scene();
}
function setOrthogonal() {
	perspective = false;
	tx = 300;
	ty = -170;
	tz = 0;
	rx = xToRad(0);
	ry = yToRad(0);
	rz = zToRad(180);
	scene();
}

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

function ScaleX() {
	var val = document.getElementById("input").value;
	sx = val;
	scene();
}

function ScaleY() {
	var val = document.getElementById("input").value;
	sy = val;
	scene();
}

function ScaleZ() {
	var val = document.getElementById("input").value;
	sz = val;
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