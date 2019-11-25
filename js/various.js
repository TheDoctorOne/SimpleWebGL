/**
 * Creates shader
 * @param {*} gl        : WebGL context
 * @param {*} type      : Type of the shader(Vertex | Fragment)
 * @param {*} source    : Source code of the shader
 * @returns shader if success
 */
function createShader(gl, type, source) {
    var shader = gl.createShader(type); //Creates the shader
    gl.shaderSource(shader, source); //Attachs source code to shader
    gl.compileShader(shader); //Compiles the shader
    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS); //Gets the related boolean
    if(success) {
        return shader;
    }

    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
}

/**
 * Creates program
 * @param {*} gl                : WebGL context
 * @param {*} vertexShader      : Vertex Shader
 * @param {*} fragmentShader    : Fragment Shader
 * @returns program if success
 */
function createProgram(gl, vertexShader, fragmentShader) {
    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    var success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if(success) {
        return program;
    }

    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
}

function attributeDefiner(gl, attr, buffer, size) {
    gl.enableVertexAttribArray(attr);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

    var type = gl.FLOAT;
    var normalized = false;
    var stride = 0;
    var offset = 0;

    //At behind the function below binds the ARRAY_BUFFER bind point to "positionBuffer" so now we are free to bind anything we 
    //want to ARRAY_BUFFER bind point. Attribute will use the "positionBuffer".
    gl.vertexAttribPointer(attr, size, type, normalized, stride, offset);
}

function configureToRender(gl, program) {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
}

function render(gl, count) {
    var primitiveType = gl.TRIANGLES;
    var offset = 0;
    gl.drawArrays(primitiveType, offset, count);
}