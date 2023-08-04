// //
// const myArray = [10, 20, 30, 40, 50];
// const searchValue = 30;
// let foundIndex = -1;

// for (let i = 0; i < myArray.length; i++) {
//   if (myArray[i] === searchValue) {
//     foundIndex = i;
//     break; // Exit the loop as soon as the value is found
//   }
// }

// if (foundIndex !== -1) {
//   console.log(`Value ${searchValue} found at index ${foundIndex}.`);
// } else {
//   console.log(`Value ${searchValue} not found in the array.`);
// }

// let x = [1, 2, 3, 4];
// let y = 5;
// let a = x.splice(0, 0, y);
// console.log(a);
// let iphonePrice = 10000;
// let myBudget = 55000;
// if (iphonePrice < myBudget) {
//   console.log("i can effort");
// } else {
//   console.log("i have not enough money to purchase");
// }
/* for(let i = 0; i < 10; i++) {

  console.log(i)
  console.log('vai a fanculo');
} */
/* let arr = [40, 50, 100, 200, 300, 400];

for(let i = 0; i < arr.length; i+=2){
  var number = arr[i];
  console.log(number);
} */
// for(let i = 0; i <= 100; i++) {
//   console.log(i);
//   if(i < 19) {
//     continue
//   }
// }
/* function bringSingara(toatalMoney){
  var singaraPrice = 10;
  var quantity = toatalMoney / singaraPrice;
  return quantity
}
var totalSingara = bringSingara(200);
console.log(totalSingara); */

/* var laptop = {
  brand: 'hp',
  color:'gray',
  size: 16,
  core: 'i5'
}

const keys = Object.keys(laptop);
console.log(keys);

for (var i = 0; i < keys.length; i++) {
  var propertyName = keys[i];
  var propertyValue = laptop[propertyName];

  console.log(propertyName , propertyValue);
}

 */

/* function makeAvg(a, b, c) {
  var sum = a + b + c;
  return sum;
}
var result = makeAvg(10, 20, 30);
console.log(result);

let person = {
  name: "John",
  number: 3887596065,
  addresses: "cota ,italy",
};

for (let i in person) {
  // console.log([typeof(i),i]);
  console.log(person[i]);
}

function printInfo(name) {
  console.log(name, "valo hoya jaw");
}

printInfo("masud"); */

/* function num(a, b) {
  let result = a + b;
  return result;
}
let finalResult = num(12, 10);
console.log(finalResult); */
/* function sumOfArray(arr){
  let sum = 0;
  for (let item of arr){
    sum += item;
  }
  return sum;
}

const num = [1, 2, 3, 4, 5, 6];
const total = sumOfArray(num);
console.log(total); */

/* function sumOfArray(arr) {
  for(let item of arr){
    let sum = 0;
    if (item % 2 === 1){
      sum += item
    }
    return sum;
  }
}


const num = [1, 2, 3, 4, 5, 6];
 const totalOdd = sumOfArray(num);
 console.log(totalOdd);

 function Feet(dadaInches){
  let inches = 12;
  let dadaFeet = dadaInches / inches;
  return dadaFeet;

 }
 let totalFeet = Feet(144);
 console.log(totalFeet);

 function isLeafYear(year){
  if (year % 4 == 0) {
    console.log('leaf year')
  }else('not a leaf year');
 }
 let leafYear = isLeafYear(2024);
 console.log(leafYear); */
/* 
function getSumOfAnArray(gotOddNumbers) {
  let sum = 0;
  for (let i = 0; i < gotOddNumbers.length; i++) {
    // console.log(numbers[i]);
    if (gotOddNumbers[i] % 2 == 1) {
      return gotOddNumbers[i];
    }
    sum + gotOddNumbers[i];
  }
  return sum;
}

// const numbers = [10, 20, 30, 40, 50, 60, 13, 15, 23];

function getOddSumOfAnArray(numbers1){
  const oddNumbers = [];
  for (let i = 0; i < numbers1.length; i++) {
    let index = i;
    let element = numbers1[index];
    if(element % 2 !== 0) {
      oddNumbers.push(element);
    }
  }return oddNumbers;
}


let total = getSumOfAnArray(gotOddNumbers);
const numbers1 = [10, 20, 30, 40, 50, 60, 13, 15, 23];
let gotOddNumbers = getOddSumOfAnArray(numbers1);
console.log() */
// function factorial(number) {
//     let sum = 1;
//     for (let i = 1; i <= number; i++) {
//       sum = sum * i;
//     }
//     return sum;
// }

// function factorial(number) {
//   let sum = 1;
//   for (let i = number; i >= 1; i--) {
//     sum = sum * i;
//   }
//   return sum;
// }
 function factorial(number) {
  let i = number;
  let sum = 1;
  while (i >= 1) {
    console.log(i);
    sum = sum * i;
    i--;
 }
 return sum;
}
const total = factorial(20);
console.log(total);
