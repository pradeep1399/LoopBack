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


function log(title: string) {
    return function(target, key, descriptor) {
        const original = descriptor.value;
        descriptor.value = function(...args: any[]) {
            //Call the original method
            const result = original.apply(this, args);
            //Log the call and the rsult
            console.log(`title: ${title} ${key} with args ${JSON.stringify(args)} returned ${JSON.stringify(result)}`);
            //Return the rresult
            return result;
        }
        return descriptor;
    }
}

class Calculator {
    //Using the decorator @log
    @log('Calculator')
    square(n: number) {
        return n*n;
    }
}
    
    const calculator = new Calculator();
    calculator.square(2);
    calculator.square(3);