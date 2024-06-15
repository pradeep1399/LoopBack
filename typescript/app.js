// class HelloWorld {
//     constructor(message){
//         console.log(message);
//     }
// }
// const helloWorld = new HelloWorld('Welcome to typescript');
// console.log(helloWorld);
//############################## Generic Function #####################################
// function loggerAndReturn<T>(thing: T) : T {
//     return thing;
// }
// // const message: string = loggerAndReturn<string>('Hello Generic Function');
// const message1: string = loggerAndReturn('Hello Generic Function');
// const message2: number = loggerAndReturn(7);
// console.log(message1);
// console.log(message2);
//############################## Generic Function with T Array Type #####################################
// function getArray<T>(itmes: T[]): T[] {
//     return new Array<T>().concat(itmes);
// }
// let myNumArr = getArray<number>([100, 200, 300]);
// let myStrArr = getArray<string>(['Hello', 'World']);
// let myNumArr = getArray([100, 200, 300]);
// let myStrArr = getArray(['Hello', 'World']);
// console.log(myNumArr);
// console.log(myStrArr);
// myNumArr.push('Helowr');  // complier error
// myStrArr.push(1);  // complier error
//############################## Generic Function with  ultiple Type Variable #####################################
// function getInfo<T, U>(id: T, name: U): void {
//     console.log(typeof id + ', ' + typeof name);
// }
// getInfo<number, string>(1, 'Pradeep');
// //############################## Generic Constraints #####################################
// class Customer {
//     firstName: string;
//     lastName: string;
//     constructor(fname: string, lname: string){
//         this.firstName = fname;
//         this.lastName = lname;
//     }
// }
// function customerLogger<T extends Customer>(customer: T): void {
//     console.log(`${customer.firstName} ${customer.lastName}`); 
// }
// let customer = new Customer('John', 'Doe');
// customerLogger(customer);
// customerLogger('John, Doe');  //Compiler Error
// //############################## Generic Interface to describe object properties #####################################
// interface Pair<T, U> {
//     first: T;
//     second: U;
// }
// let p: Pair<string, number> = {first: '10k', second: 1000};
// console.log(p);
// const person: Pair<string, string> = {first: 'John', second: 'Malik'};
// console.log(person);