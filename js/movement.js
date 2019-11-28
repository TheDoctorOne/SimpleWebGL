//Movement file of mine
/**
 * Left(37) and Right(39) arrow keys will turn the character 
 * Front arrow key will move forward frontCode = 38
 */

var tx = 300; var rx = xToRad(0); var sx = 1;
var ty = 25; var ry = yToRad(0); var sy = 1;
var tz = 0; var rz = zToRad(180); var sz = 1;
var xAngleValue = 0;
var yAngleValue = 0;
var zAngleValue = 0;
window.onkeydown = function (e){
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
            console.log("");
            break;
    }
}