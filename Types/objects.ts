// Objects as parameters:
// set key value pairs (first parameter is the key, second parameter is the type!)
function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`)
}

printName({ first: 'Thomas', last: 'Jenkins' })

// object literal defined inline
const singer = { first: 'Mick', last: 'Jagger', age: 473, isAlive: true }
printName(singer)

//      variable             type                 object with values
// let coordinate: { x: number; y: number } = { x: 34, y: 2 };

//                                this is the object type
// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

// function doublePoint(point: { x: number; y: number }): {
//   x: number;
//   y: number;
// } {
//   return { x: point.x * 2, y: point.y * 2 };
// }

// type Point = {
//   x: number;
//   y: number;
// };

let coordinate: Point = { x: 34, y: 2 }

function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() }
}

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 }
}

// Creating type aliases & nested object types
type Song = {
  title: string
  artist: string
  numStreams: number
  credits: { producer: string; writer: string }
}

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`)
}

// Nested object types
const mySong: Song = {
  title: 'Unchained Melody',
  artist: 'Righteous Brothers',
  numStreams: 12873321,
  credits: {
    producer: 'Phil Spector',
    writer: 'Alex North',
  },
}

const earnings = calculatePayout(mySong)
console.log(earnings)
printSong(mySong)

// Optional properties (refer to z and ? )
type Point = {
  x: number
  y: number
  z?: number
}

const myPoint: Point = { x: 1, y: 3 }

// Read-only properties, caanot write to it
type User = {
  readonly id: number
  username: string
}

const user: User = {
  id: 12837,
  username: 'catgurl',
}

console.log(user.id)
user.id

// Intersection types
type Circle = {
  radius: number
}

type Colorful = {
  color: string
}

type ColorfulCircle = Circle & Colorful

const happyFace: ColorfulCircle = {
  radius: 4,
  color: 'yellow',
}

type Cat = {
  numLives: number
}
type Dog = {
  breed: string
}

// Adding on a new type as well as intersecting types
type CatDog = Cat &
  Dog & {
    age: number
  }

const christy: CatDog = {
  numLives: 7,
  breed: 'Husky',
  age: 9,
}
