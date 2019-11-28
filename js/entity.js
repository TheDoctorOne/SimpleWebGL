/**
 * I am using this file as class file.
 * Defaul values for entity
 * 1 head -- Cube           (6 px)
 * 1 chest -- quadrangular  (10 px height, 8px width, 5 px depth)
 * 2 arms --- quadrangular (12 px height, 5 px width, 5 px depth)
 * 2 legs --- quadrangular (12 px height, 4 px width, 5 px depth)
 * 
 */


class Entity {
    initProperties() {
        this.scale = 0.1;
        
        this.headWidth = 6.0;
        this.headHeight = 6.0;
        this.headDepth = 3.0;

        this.chestWidth = 8.0;
        this.chestHeight= 11.5;
        this.chestDepth = 3.0;

        this.armWidth = 3.0;
        this.armHeight= 12.0;
        this.armDepth = 3.0;

        this.legWidth = 3.0;
        this.legHeigth= 12.0;
        this.legDepth = 3.0;

        this.x = -3.0; //Top left behind corner of the head
        this.y = -3.0;
        this.z = -1.5;
    }

    constructor() {
        this.initProperties();
        this.initCoordinates(this.x, this.y, this.z);
        this.initColors();
    }

    initCoordinates(x,y,z) {
        this.head = this.setCoordinates(x, y, z,                                                                                                                 this.headWidth, this.headHeight, this.headDepth);
        this.chest = this.setCoordinates(x-((this.chestWidth-this.headWidth)/2), y-this.headHeight, z,                                                           this.chestWidth, this.chestHeight, this.chestDepth);
        this.armLeft = this.setCoordinates(x-((this.chestWidth-this.headWidth)/2) - this.armWidth, y-this.headHeight, z,                                         this.armWidth, this.armHeight, this.armDepth);
        this.armRight = this.setCoordinates(x-((this.chestWidth-this.headWidth)/2) + this.chestWidth, y-this.headHeight, z,                                      this.armWidth, this.armHeight, this.armDepth);
        this.legLeft = this.setCoordinates(x-((this.chestWidth-this.headWidth)/2), y-(this.headHeight+this.chestHeight), z,                                      this.legWidth, this.legHeigth, this.legDepth);
        this.legRight = this.setCoordinates(x-((this.chestWidth-this.headWidth)/2) + this.chestWidth - this.legWidth, y-(this.headHeight+this.chestHeight), z,   this.legWidth, this.legHeigth, this.legDepth);
    }

    initColors() {
        this.headColor = this.setColor(0.5, 0, 0);
        this.chestColor = this.setColor(0, 0.5, 0);
        this.armColor = this.setColor(0.5, 0.5, 0);
        this.legColor = this.setColor(0, 0, 0.5);
        Array.prototype.push.apply(this.headColor,this.chestColor);
        Array.prototype.push.apply(this.headColor,this.armColor);
        Array.prototype.push.apply(this.headColor,this.armColor);
        Array.prototype.push.apply(this.headColor,this.legColor);
        Array.prototype.push.apply(this.headColor,this.legColor);
    }

    setColor(r, g, b) {
        var colArray = [
            //Front
            r, g+0.1, b, 1,
            r, g+0.1, b, 1,
            r, g+0.1, b, 1,
            r, g+0.1, b, 1,

            //Back
            r+0.1, g, b, 1,
            r+0.1, g, b, 1,
            r+0.1, g, b, 1,
            r+0.1, g, b, 1,

            //Top
            r, g, b+0.1, 1,
            r, g, b+0.1, 1,
            r, g, b+0.1, 1,
            r, g, b+0.1, 1,

            //Bottom
            r, g, b, 1,
            r, g, b, 1,
            r, g, b, 1,
            r, g, b, 1,

            //Right
            r, g+0.1, b+0.1, 1,
            r, g+0.1, b+0.1, 1,
            r, g+0.1, b+0.1, 1,
            r, g, b, 1,

            //Left
            r+0.1, g+0.1, b, 1,
            r+0.1, g+0.1, b, 1,
            r+0.1, g+0.1, b, 1,
            r+0.1, g+0.1, b, 1
        ];
        return colArray;
    }

    setCoordinates(x, y, z , w, h, d) { //Top close left corner of the object with width, height, depth
        x = x / this.scale;
        y = y / this.scale;
        z = z / this.scale;
        
        w = w / this.scale;
        h = h / this.scale;
        d = d / this.scale;
        this.coordinates = [
            //Front
            x+w, y, z+d,
            x, y, z+d,
            x, y-h, z+d,
            x+w, y-h, z+d,

            //Back (Tek Değişiklik Z üzerinde = Front - Derinlik)
            x, y-h, z,
            x, y, z, //15 - 16 - 17
            x+w, y, z,
            x+w, y-h, z,

            //Top
            x, y, z,
            x, y, z+d,
            x+w, y, z+d,
            x+w, y, z,

            //Bottom
            x+w, y-h, z,
            x+w, y-h, z+d,
            x, y-h, z+d,
            x, y-h, z,

            //Right
            x+w, y-h, z,
            x+w, y, z,
            x+w, y, z+d,
            x+w, y-h, z+d,

            //Left
            x, y, z,
            x, y-h, z,
            x, y-h, z+d,
            x, y, z+d,
        ];
        return this.coordinates;
    }

    setIndicies() {
        this.indicies = this.genIndices(0); //Head
        Array.prototype.push.apply(this.indicies,this.genIndices(24)); //Chest
        Array.prototype.push.apply(this.indicies,this.genIndices(48)); //Arm
        Array.prototype.push.apply(this.indicies,this.genIndices(72)); //Arm
        Array.prototype.push.apply(this.indicies,this.genIndices(96)); //Leg
        Array.prototype.push.apply(this.indicies,this.genIndices(120)); //Leg
    }

    genIndices(start) {
        return [
            start+0,  start+1,  start+2,      start+0,  start+2,  start+3,    // front
            start+4,  start+5,  start+6,      start+4,  start+6,  start+7,    // back
            start+8,  start+9,  start+10,     start+8,  start+10, start+11,   // top
            start+12, start+13, start+14,     start+12, start+14, start+15,   // bottom
            start+16, start+17, start+18,     start+16, start+18, start+19,   // right
            start+20, start+21, start+22,     start+20, start+22, start+23,   // left
          ];
    }

    draw (gl, positionAttr, positionBuffer, colorAttr, colorBuffer, matrixUniform, indexbuffer) {        
        this.pNum= 36;
        this.drawHead(gl, positionAttr, positionBuffer, colorAttr, colorBuffer, matrixUni, indexbuffer);
        this.drawChest(gl, positionAttr, positionBuffer, colorAttr, colorBuffer, matrixUni, indexbuffer);
        this.drawArms(gl, positionAttr, positionBuffer, colorAttr, colorBuffer, matrixUni, indexbuffer);
        this.drawLegs(gl, positionAttr, positionBuffer, colorAttr, colorBuffer, matrixUni, indexbuffer);
    }

    drawHead(gl, positionAttr, positionBuffer, colorAttr, colorBuffer, matrixUniform, indexbuffer) {
        attributeDefiner(gl, positionAttr, positionBuffer, 3);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.head), gl.STATIC_DRAW);
        attributeDefiner(gl, colorAttr, colorBuffer, 4);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.headColor), gl.STATIC_DRAW);
        gl.uniformMatrix4fv(matrixUniform, false, movementUpdate(gl));
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexbuffer);
        render(gl, this.pNum);
    }

    drawChest(gl, positionAttr, positionBuffer, colorAttr, colorBuffer, matrixUniform, indexbuffer) {
        attributeDefiner(gl, positionAttr, positionBuffer, 3);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.chest), gl.STATIC_DRAW);
        attributeDefiner(gl, colorAttr, colorBuffer, 4);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.chestColor), gl.STATIC_DRAW);
        gl.uniformMatrix4fv(matrixUniform, false, movementUpdate(gl));
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexbuffer);
        render(gl, this.pNum);
    }

    drawArms(gl, positionAttr, positionBuffer, colorAttr, colorBuffer, matrixUniform, indexbuffer) {
        attributeDefiner(gl, positionAttr, positionBuffer, 3);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.armRight), gl.STATIC_DRAW);
        attributeDefiner(gl, colorAttr, colorBuffer, 4);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.armColor), gl.STATIC_DRAW);
        gl.uniformMatrix4fv(matrixUniform, false, movementUpdate(gl));
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexbuffer);
        render(gl, this.pNum);

        
        attributeDefiner(gl, positionAttr, positionBuffer, 3);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.armLeft), gl.STATIC_DRAW);
        attributeDefiner(gl, colorAttr, colorBuffer, 4);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.armColor), gl.STATIC_DRAW);
        gl.uniformMatrix4fv(matrixUniform, false, movementUpdate(gl));
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexbuffer);
        render(gl, this.pNum);
    }

    drawLegs(gl, positionAttr, positionBuffer, colorAttr, colorBuffer, matrixUniform, indexbuffer) {
        attributeDefiner(gl, positionAttr, positionBuffer, 3);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.legRight), gl.STATIC_DRAW);
        attributeDefiner(gl, colorAttr, colorBuffer, 4);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.legColor), gl.STATIC_DRAW);
        gl.uniformMatrix4fv(matrixUniform, false, movementUpdate(gl));
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexbuffer);
        render(gl, this.pNum);

        
        attributeDefiner(gl, positionAttr, positionBuffer, 3);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.legLeft), gl.STATIC_DRAW);
        attributeDefiner(gl, colorAttr, colorBuffer, 4);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.legColor), gl.STATIC_DRAW);
        gl.uniformMatrix4fv(matrixUniform, false, movementUpdate(gl));
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexbuffer);
        render(gl, this.pNum);
    }
}