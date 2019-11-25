/**
 * I am using this file as class file.
 * 1 head -- Cube           (6 px)
 * 1 chest -- quadrangular  (10 px height, 8px width, 5 px depth)
 * 2 arms --- quadrangular (12 px height, 5 px width, 5 px depth)
 * 2 legs --- quadrangular (12 px height, 4 px width, 5 px depth)
 * 
 */


class Entity {
    constructor() {
        this.scale = 150;
        this.x = 6.0;
        this.y = 28.0;
        this.z = 0.0;
        this.initCoordinates(this.x, this.y, this.z);
    }

    initCoordinates(x,y,z) {
        this.head = this.setCoordinates(x, y, z, 6.0, 6.0, 6.0);
        this.chest = this.setCoordinates(x-1, y-6, z, 8.0, 10.0, 5.0);
        this.armLeft = this.setCoordinates(x-6, y-6, z, 5.0, 12.0, 5.0);
        this.armRight = this.setCoordinates(x+7, y-6, z, 5.0, 12.0, 5.0);
        this.legLeft = this.setCoordinates(x-1, y-16, z, 4.0, 12.0, 5.0);
        this.legRight = this.setCoordinates(x+3, y-16, z, 4.0, 12.0, 5.0);
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
}