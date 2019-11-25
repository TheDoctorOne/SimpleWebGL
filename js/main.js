var gl;
var points = [
	0, 0, 0.2,
	0.3, 0, 0,
	0.6, 0.4, 0.5,
	0.2, 0.2, 0.2
];
var entity;
window.onload = function init(){
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

	//Creating the shader, using the function at "various.js"
	var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
	var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

	//Creating the program, func at "various.js"
	var program = createProgram(gl, vertexShader, fragmentShader);

	//Getting attribute from source code
	var positionAttr = gl.getAttribLocation(program, "vPosition");
	var colorAttr = gl.getAttribLocation(program, "col");
	//In WebGL, attributes get their data from buffers so we need to create a buffer
	var positionBuffer = gl.createBuffer();
	var colorBuffer = gl.createBuffer();
	//Binding the buffer
	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

	/** Source for this : https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html
	 * There's a lot going on here. The first thing is we have positions which is a JavaScript array. 
	 * WebGL on the other hand needs strongly typed data so the part new Float32Array(positions) creates a new array of 32bit floating point numbers and copies the values from positions. 
	 * gl.bufferData then copies that data to the positionBuffer on the GPU. It's using the position buffer because we bound it to the ARRAY_BUFFER bind point above.
	 * The last argument, gl.STATIC_DRAW is a hint to WebGL about how we'll use the data. WebGL can try to use that hint to optimize certain things. 
	 * gl.STATIC_DRAW tells WebGL we are not likely to change this data much.
	 */
	
	configureToRender(gl, program);

	entity.draw(gl, positionAttr, positionBuffer, colorAttr, colorBuffer);
};
