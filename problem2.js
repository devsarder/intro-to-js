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
