var a = 10;
console.log(a);
var b = "hello";
console.log(b);
var c = /** @class */ (function () {
    function c(param) {
        console.log(param);
    }
    return c;
}());
var x = new c("hello");
var z = true;
if (10 < 11)
    console.log(z);
