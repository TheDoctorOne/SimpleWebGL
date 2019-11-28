var gl;
var entity;
var program;
var positionAttr;
var colorAttr;
var matrixUni;
var colorBuffer;
var positionBuffer;
var indexBuffer;

window.onload = function init() {
    entity = new Entity();
	var canvas = document.getElementById( "gl-canvas" );
	gl = canvas.getContext("webgl");
	if ( !gl ) { alert( "WebGL isn't available" ); }

	//Configuring WebGL
	gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
	gl.clearColor(0, 0, 0, 1); //Changes canvas color
	

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
	
	scene();
};

function scene() {
	
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
	entity.setIndicies();
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(entity.indicies), gl.STATIC_DRAW);
	
	configureToRender(gl, program);

	entity.draw(gl, positionAttr, positionBuffer, colorAttr, colorBuffer, matrixUni, indexBuffer);

	requestAnimationFrame(scene);
}
