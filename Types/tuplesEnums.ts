// tuples are fixed in their type and their length

// This specifies the array must contain numbers but doesn't specify the length
const rgbColor: number[] = [23, 45, 234, 234]

// This is a tuple! They are not used very often
// It specifies type and length - only 3 numbers are allowed
const color: [number, number, number] = [255, 0, 45]

// Example of a tuple
type HTTPResponse = [number, string]

const goodRes: HTTPResponse = [200, 'OK']

// An array of tuples:
const responses: HTTPResponse[] = [
  [404, 'Not Found'],
  [200, 'OK'],
]

// Enum Example:
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}
const myStatus = OrderStatus.DELIVERED

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.RETURNED)

// String Enum:
enum ArrowKeys {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}
