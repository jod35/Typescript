var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        //..
        console.log("X is " + this.x + "Y is " + this.y);
    };
    return Point;
}());
// to make use of the method "draw",
var new_point = new Point();
new_point.x = 1;
new_point.y = 2;
new_point.draw();
