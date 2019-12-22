//Movement file of mine
/**
 * Left(37) and Right(39) arrow keys will turn the character 
 * Front arrow key will move forward frontCode = 38
 */

var tx = -200; var rx = xToRad(0); var sx = 1;
var ty = 0; var ry = yToRad(0); var sy = 1;
var tz = 0; var rz = zToRad(0); var sz = 1;
var xAngleValue = 0;
var yAngleValue = 0;
var zAngleValue = 0;

var cameraNewAngle = 0;
window.onkeydown = function (e) {
    //alert(String.fromCharCode(e.keyCode)+" : "+e.keyCode);
    switch(e.keyCode) {
        //Left arrow key
        case 37:
            yAngleValue += 5;
            if(yAngleValue>360) yAngleValue -= 360;
            ry = yToRad(yAngleValue);
            break;
        //Right arrow key
        case 39:
            yAngleValue -= 5;
            if(yAngleValue<0) yAngleValue += 360;
            ry = yToRad(yAngleValue);
            break;
        //Front arrow key
        case 38:
                zAngleValue -= 5;
                if(zAngleValue<0) zAngleValue += 360;
                rz = zToRad(zAngleValue);
            break;
        //Z = 90 -> Camera Angle dec
        case 90:
                cameraNewAngle -= 5;
                cameraAngleRadians = degToRad(cameraNewAngle--);
            break;
        //x = 88 -> Camera Angle inc
        case 88:
                cameraNewAngle += 5;
                cameraAngleRadians = degToRad(cameraNewAngle++);
            break;
    }
}