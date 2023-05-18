String

let name: string = 'Sally';

Boolean

let completed: boolean = false;

Number

let aNumber: number = 20;

Array

let ages: number[] = [21, 30, 70]
// equivalent but less common in real-world apps
let ages: Array<number> = [21, 30, 70]

Classes

class Calculator {
private result: number;
constructor(){
this.result = 0;
}
add(x:number) {
this.result += x;
}
subtract(x:number) {
this.result -= x;
}
getResult():number {
return this.result;
}
}
// use it
let calculator = new Calculator();
calculator.add(10);
calculator.subtract(9);
console.log(calculator.getResult()); // 1
