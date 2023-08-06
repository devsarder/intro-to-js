function isInteger(value) {
  if (typeof value !== "number") {
    return "please provide a number";
  }
}
console.log(isInteger(20));


function isString(value) {
    if (typeof value !== "string") {
        return "please provide a (string)"
    }else {
        const arr = value.split(".");
        const lastElement = arr.pop();
        return lastElement === 'js'
    }
}
console.log(isString('hello world.js'))