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

// get odd numbers of an array
function getOddArray(numbers) {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if (element % 2 == 1) {
        arr.push(element);
    }
  }
  return arr;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const oddNumbers = getOddArray(numbers);
console.log(oddNumbers);
