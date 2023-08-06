const lyrics = "the quick brown. fox jumps over the lazy dog";

let parts = lyrics.split(".");
console.log(parts);

function pandaCost(singaraPrice, somuchaPrice, jilapiPrice) {
  let singara = 7;
  let somucha = 10;
  let jilapiPr = 15;
  const totalCostSingara = singara * singaraPrice;
  const totalCostSomucha = somucha * somuchaPrice;
  const totalCostJilapiPr = jilapiPr * jilapiPrice;
  let totalCost = totalCostSingara + totalCostSomucha + totalCostJilapiPr;
  return totalCost;
}
const sum = pandaCost(2, 4, 6);
console.log(sum);

// mathematical methods
let num1 = 25;
let num2 = 45;
const gap = num1 - num2;
// const gap = Math.abs(num1 - num2);
console.log(gap);
if (gap < 5) {
  console.log("you guys can be friends");
} else {
  console.log("you guys stay apart");
}

// math.round and math.random combined with round practicing


let number = 4.5658452;
// console.log(Math.round(number));
// console.log(Math.ceil(number));
// console.log(Math.floor(number));

let random = Math.random()*10;
let round = Math.round(random);
console.log(round);

