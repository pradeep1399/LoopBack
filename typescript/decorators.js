// function log(target, key, descriptor) {
//     const original = descriptor.value;
//     descriptor.value = function(...args: any[]) {
//         //Call the original method
//         const result = original.apply(this, args);
//         //Log the call and the rsult
//         console.log(`${key} with args ${JSON.stringify(args)} returned ${JSON.stringify(result)}`);
//         //Return the rresult
//         return result;
//     }
//     return descriptor;
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// class Calculator {
//     //Using the decorator @log
//     @log
//     square(n: number) {
//         return n*n;
//     }
// }
//     const calculator = new Calculator();
//     calculator.square(2);
//     calculator.square(3);
function log(title) {
    return function (target, key, descriptor) {
        var original = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            //Call the original method
            var result = original.apply(this, args);
            //Log the call and the rsult
            console.log("title: ".concat(title, " ").concat(key, " with args ").concat(JSON.stringify(args), " returned ").concat(JSON.stringify(result)));
            //Return the rresult
            return result;
        };
        return descriptor;
    };
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    //Using the decorator @log
    Calculator.prototype.square = function (n) {
        return n * n;
    };
    __decorate([
        log('Calculator')
    ], Calculator.prototype, "square", null);
    return Calculator;
}());
var calculator = new Calculator();
calculator.square(2);
calculator.square(3);
