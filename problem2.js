function isLgGiven(value) {
  if (typeof value !== "number") {
    return "please enter a positive number";
  } else {
    const difference = value - 7;
    if (difference < 7) {
        return difference;
    }else{
        return value*2
    }
  }
}
console.log(isLgGiven('15'));


// prime numbers
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
const num = 29;
console.log(isPrime(num));
