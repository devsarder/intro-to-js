let first = 2;
let second = 3;

// first approach in a valid way
// const temp = first;
// first = second;
// second = temp;

// second approach in a valid way with array
[first, second] = [second, first]
console.log(first, second);