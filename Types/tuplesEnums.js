// tuples are fixed in their type and their length
// This specifies the array must contain numbers but doesn't specify the length
var rgbColor = [23, 45, 234, 234];
// This is a tuple! They are not used very often
// It specifies type and length - only 3 numbers are allowed
var color = [255, 0, 45];
var goodRes = [200, 'OK'];
// An array of tuples:
var responses = [
    [404, 'Not Found'],
    [200, 'OK'],
];
// Enum Example:
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var myStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.RETURNED);
// String Enum:
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
})(ArrowKeys || (ArrowKeys = {}));
