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
        this.scale = 20;

        this.x =-4.5; //Top left corner of the head
        this.y = 14.0;
        this.z = 0.0;
        
        this.headSize = 4.0;

        this.chestWidth = 6.0;
        this.chestHeight= 10.0;
        this.chestDepth = 5.0;

        this.armWidth = 3.0;
        this.armHeight= 12.0;
        this.armDepth = 5.0;

        this.legWidth = 2.5;
        this.legHeigth= 12.0;
        this.legDepth = 5.0;
    }

    constructor() {
        this.initProperties();
        this.initCoordinates(this.x, this.y, this.z);
        this.initColors();
    }

    initCoordinates(x,y,z) {
        this.head = this.setCoordinates(x, y, z,                                                                                                                            this.headSize, this.headSize, this.headSize);
        this.chest = this.setCoordinates(x-((this.chestWidth-this.headSize)/2), y-this.headSize, z,                                                                         this.chestWidth, this.chestHeight, this.chestDepth);
        this.armLeft = this.setCoordinates(x-((this.chestWidth-this.headSize)/2) - this.armWidth, y-this.headSize, z,                                                       this.armWidth, this.armHeight, this.armDepth);
        this.armRight = this.setCoordinates(x-((this.chestWidth-this.headSize)/2) + this.chestWidth, y-this.headSize, z,                                                    this.armWidth, this.armHeight, this.armDepth);
        this.legLeft = this.setCoordinates(x-((this.chestWidth-this.headSize)/2), y-(this.headSize+this.chestHeight), z,                                                    this.legWidth, this.legHeigth, this.legDepth);
        this.legRight = this.setCoordinates(x-((this.chestWidth-this.headSize)/2) + this.chestWidth - this.legWidth, y-(this.headSize+this.chestHeight), z,                 this.legWidth, this.legHeigth, this.legDepth);
    }

    initColors() {
        this.headColor = this.setColor(1, 0, 0);
        this.chestColor = this.setColor(0, 1, 0);
        this.armColor = this.setColor(1, 0, 0);
        this.legColor = this.setColor(0, 0, 1);
    }

    setColor(r, g, b) {
        var colArray = [
            //Front
            r, g, b, 1,
            r, g, b, 1,
            r, g, b, 1,
            r, g, b, 1,

            //Back
            r, g, b, 1,
            r, g, b, 1,
            r, g, b, 1,
            r, g, b, 1,

            //Top
            r, g, b, 1,
            r, g, b, 1,
            r, g, b, 1,
            r, g, b, 1,

            //Bottom
            r, g, b, 1,
            r, g, b, 1,
            r, g, b, 1,
            r, g, b, 1,

            //Right
            r, g, b, 1,
            r, g, b, 1,
            r, g, b, 1,
            r, g, b, 1,

            //Left
            r, g, b, 1,
            r, g, b, 1,
            r, g, b, 1,
            r, g, b, 1
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
        var coordinates = [
            //Front
            x, y, z,// Top left
            x+w, y, z,// Top Right
            x, y-h, z,// Bottom Left
            x+w, y-h, z,// Bottom Right

            //Back (Tek Değişiklik Z üzerinde = Front - Derinlik)
            x+w, y, z-d,// Top Right
            x, y, z-d,// Top left
            x+w, y-h, z-d,// Bottom Right
            x, y-h, z-d,// Bottom Left

            //Top
            x+w, y, z,
            x+w, y, z-d,
            x, y, z-d,
            x, y, z,

            //Bottom
            x+w, y-h, z,
            x+w, y-h, z-d,
            x, y-h, z-d,
            x, y-h, z,

            //Right
            x+w, y, z-d,
            x+w, y-h, z-d,
            x+w, y, z,
            x+w, y-h, z,

            //Left
            x, y, z-d,
            x, y-h, z-d,
            x, y, z,
            x, y-h, z
        ];
        return coordinates;
    }

    draw (gl, positionAttr, positionBuffer, colorAttr, colorBuffer) {
        attributeDefiner(gl, positionAttr, positionBuffer, 3);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.head), gl.STATIC_DRAW);
        attributeDefiner(gl, colorAttr, colorBuffer, 4);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.headColor), gl.STATIC_DRAW);
        render(gl, 24);
    
        attributeDefiner(gl, positionAttr, positionBuffer, 3);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.chest), gl.STATIC_DRAW);
        attributeDefiner(gl, colorAttr, colorBuffer, 4);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.chestColor), gl.STATIC_DRAW);
        render(gl, 24);
    
        attributeDefiner(gl, positionAttr, positionBuffer, 3);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.armLeft), gl.STATIC_DRAW);
        attributeDefiner(gl, colorAttr, colorBuffer, 4);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.armColor), gl.STATIC_DRAW);
        render(gl, 24);
    
        attributeDefiner(gl, positionAttr, positionBuffer, 3);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.armRight), gl.STATIC_DRAW);
        attributeDefiner(gl, colorAttr, colorBuffer, 4);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.armColor), gl.STATIC_DRAW);
        render(gl, 24);
    
        attributeDefiner(gl, positionAttr, positionBuffer, 3);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.legLeft), gl.STATIC_DRAW);
        attributeDefiner(gl, colorAttr, colorBuffer, 4);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.legColor), gl.STATIC_DRAW);
        render(gl, 24);
    
        attributeDefiner(gl, positionAttr, positionBuffer, 3);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.legRight), gl.STATIC_DRAW);
        attributeDefiner(gl, colorAttr, colorBuffer, 4);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.setColor(1, 0 ,1)), gl.STATIC_DRAW);
        render(gl, 24);
    }
}