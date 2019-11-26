var gl;
var entity;
var program;
var positionAttr;
var colorAttr;
var matrixUni;
var colorBuffer;
var positionBuffer;
var indexBuffer;
var tx = 300; var rx = toRad(0); var sx = 1;
var ty = 10; var ry = toRad(0); var sy = 1;
var tz = 0; var rz = toRad(180); var sz = 1;
function toRad(degree) {
    return degree * Math.PI / 180;
}
window.onload = function init() {
    entity = new Entity();
	var canvas = document.getElementById( "gl-canvas" );
	gl = canvas.getContext("webgl");
	if ( !gl ) { alert( "WebGL isn't available" ); }

	//Configuring WebGL
	gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
	gl.clearColor(0, 0, 0, 1); //Makes canvas transparent
	

	//Getting the source code
	var vertexShaderSource = document.getElementById("vertex-shader").text;
	var fragmentShaderSource = document.getElementById("fragment-shader").text;

	//Creating the shader
	var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
	var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

	//Creating the program
	program = createProgram(gl, vertexShader, fragmentShader);

	//Getting attribute from source code
	positionAttr = gl.getAttribLocation(program, "vPosition");
	colorAttr = gl.getAttribLocation(program, "col");
	matrixUni = gl.getUniformLocation(program, "matrix");
	//In WebGL, attributes get their data from buffers so we need to create a buffer
	positionBuffer = gl.createBuffer();
	colorBuffer = gl.createBuffer();
	indexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
	entity.setIndicies();
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(entity.indicies), gl.STATIC_DRAW);
	
	scene();
};

function scene() {
	
	configureToRender(gl, program);

	entity.draw(gl, positionAttr, positionBuffer, colorAttr, colorBuffer, matrixUni, indexBuffer);

	//requestAnimationFrame(scene);
}

function rotX() {
	var val = document.getElementById("input").value;
	rx = toRad(val);
	scene();
}
var val = 0;
function rotY() {
	if(val == 360) val = 0;
	//var val = document.getElementById("input").value;
	ry = toRad(val);
	scene();
	val++;
	requestAnimationFrame(rotY);
}
function rotZ() {
	var val = document.getElementById("input").value;
	rz = toRad(val);
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
