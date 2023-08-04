function sumOfArray(array) {
    let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    sum += value;
  }
  return sum;
}

let array = [1, 21, 22, 23, 24, 25, 26, 27, 28, 29];
let countSum = sumOfArray(array);
console.log(countSum);