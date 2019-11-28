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