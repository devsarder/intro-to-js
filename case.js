const userName = 'blackPink';
const userInput = 'blackPinK'

if (userName.toLowerCase === userInput.toLowerCase){
    console.log('valid user');
}else{
    console.log('invalid user');
}

const lyrics = 'the quick brown fox jumps over the lazy dog';

let searchString = 'Fox'
// let doesExist = lyrics.includes(searchString);
let doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExistOneLine);