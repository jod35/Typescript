var a;
var b;
var c;
var d;
var e; //array of strings
var f = [1, 2, 3, 4];
var g = ["jona", 1, 2, 3, 4, "heh", true];
//enums
var colorRed = 0;
var colorBlue = 1;
var colorGreen = 7;
//all these are related to each other and their values can be stored in an enum 
// forexample
var Color;
(function (Color) {
    Color[Color["colorRed"] = 0] = "colorRed";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var background_color = Color.Blue; //sets it to Blue
