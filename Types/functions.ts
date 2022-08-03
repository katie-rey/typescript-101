// Function parameter type annotations:
const doSomething = (person: string, age: number, isFunny: boolean) => {}

// Return type annotation:
function greet(person: string = 'stranger'): string {
  // 'stranger' is the default value
  return `Hi there, ${person}!`
}

// Named function
function square(num: number): number {
  return num * num
}

square(3)
greet('Tonya Harding')
doSomething('ChickenFace', 78, true)

// Arrow function: stored in a variable
const add = (x: number, y: number): number => {
  // annotating return value, however is not necessary but ensures no errors are thrown
  return x + y
}

// Contextual Type Clues
const colors = ['red', 'orange', 'yellow']
colors.map((color) => {
  // map is a method on colors, which is an array of strings
  return color.toUpperCase()
})

// Void      // if we are not returning any value, we can use void
// undefined or null
function printTwice(msg: string): void {
  console.log(msg)
  console.log(msg)
}

// Never returns
function makeError(msg: string): never {
  throw new Error(msg)
}
// if a function never ends and never returns
function gameLoop(): never {
  while (true) {
    console.log('GAME LOOP RUNNING!')
  }
}
