var gl;
var entity;
var program;
var positionAttr;
var colorAttr;
var matrixUni;
var normalBuffer;
var positionBuffer;
var indexBuffer;
var reverseLightDirectionLocation;

//Camera Vars
var radius = 200;
var cameraAngleRadians;
var fieldOfViewRadians;
var aspect;
var zNear;
var zFar;
var projectionMatrix;
var cameraMatrix;
var viewMatrix;
var viewProjectionMatrix;

window.onload = function init() {
    entity = new Entity();
	var canvas = document.getElementById( "gl-canvas" );
	gl = canvas.getContext("webgl");
	if ( !gl ) { alert( "WebGL isn't available" ); }

	//Configuring WebGL
	gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
	gl.clearColor(0, 0, 0, 0); //Changes canvas color
	

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
	colorAttr = gl.getUniformLocation(program, "u_color");
	matrixUni = gl.getUniformLocation(program, "matrix");
	reverseLightDirectionLocation = gl.getUniformLocation(program, "u_reverseLightDirection");
	//In WebGL, attributes get their data from buffers so we need to create a buffer
	positionBuffer = gl.createBuffer();
	normalBuffer  = gl.createBuffer();
	indexBuffer = gl.createBuffer();

	cameraAngleRadians = degToRad(0);
	fieldOfViewRadians = degToRad(60);
	zNear = 1;
	zFar = 2000;
	scene();
};


function setCamera() {
    aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
	projectionMatrix = m4.perspective(fieldOfViewRadians, aspect, zNear, zFar);
	cameraMatrix = m4.yRotation(cameraAngleRadians);
    cameraMatrix = m4.translate(cameraMatrix, 0, 0, radius * 1.5);
    viewMatrix = m4.inverse(cameraMatrix);
	viewProjectionMatrix = m4.multiply(projectionMatrix, viewMatrix);

}

function scene() {

	gl.uniformMatrix4fv(matrixLocation, false, worldViewProjectionMatrix);
	gl.uniform4fv(colorLocation, [1, 1, 1, 1]);
	gl.uniform3fv(reverseLightDirectionLocation, m4.normalize([0.5, 0.7, 1]));
	
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
	entity.setIndicies();
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(entity.indicies), gl.STATIC_DRAW);
	
	configureToRender(gl, program);
	setCamera();
	entity.draw(gl, positionAttr, positionBuffer, colorAttr, colorBuffer, matrixUni, indexBuffer, viewProjectionMatrix);

	requestAnimationFrame(scene);
}
