// String Variable With Explicit Annotation
let movieTitle: string = 'Amadeus'
movieTitle = 'Arrival'
movieTitle = 9 //This results in an error!
movieTitle.toUpperCase()

// Number Variable with explicit annotation
let numCatLives: number = 9
numCatLives += 1
numCatLives = 'zero' //Error!

// Explicitly typed boolean variable:
let gameOver: boolean = false
gameOver = true
gameOver = 'true' //error!!

// Type Inference
let tvShow = 'Olive Kitteridge'
tvShow = 'The Other Two'
tvShow = false

let isFunny = false
isFunny = true
isFunny = 'asd'

// the any type
let thing: any = 'hello' //This is not a great idea!
thing = 1
thing = false
thing() // calling it as a function
thing.toUpperCase() // using a method

// Delayed initialisation and Implicit Any
const movies = ['Arrival', 'The Thing', 'Aliens', 'Amadeus']
let foundMovie: string // if type is not declared, TS infurs this as 'any'

for (let movie of movies) {
  if (movie === 'Amadeus') {
    foundMovie = 'Amadeus'
  }
}
