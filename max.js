// let jim = 90;
// let dela = 87;
// let chinku = 77;

// if(jim > dela && jim >chinku){
//     console.log('jim you will get the cake');
// }
// else if(dela > jim && dela > chinku){
//     console.log('dela you will get the cake');
// }
// else{
//     console.log('chinku you will get the cake');
// }

function determineCakeRecipient(jim, dela, chinku) {
  if (jim > dela && jim > chinku) {
    return "jim";
  } else if (dela > jim && dela > chinku) {
    return "dela";
  } else {
    return "chinku";
  }
}
let jim = 58;
let dela = 87;
let chinku = 99;
const recipient = determineCakeRecipient(jim, dela, chinku);
console.log(recipient, "you will get the cake");

function maxNum(a, b, c) {
  return Math.max(a, b, c);
}
let a = 100;
let b = 200;
let c = 300;
const maxNumber = maxNum(a, b, c);
console.log("the max number is :", maxNumber);

// used function to find the tallest number of an array..

function maxInArray(numbers) {
  let tallest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if(element > tallest){
        tallest = element;
    }
  }
  return tallest;
   
}

let heights = [165, 265, 465, 789, 152, 133];
const tallestPerson = maxInArray(heights);
console.log ('the tallest person is ',tallestPerson);


