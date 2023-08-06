function wordReverse(text){
    let words = text.split(' ');
    let reversed = []
    for(let i = words.length - 1; i >= 0; i--){
        let element = words[i];
        reversed.push(element);
    }
    const reversedArr = reversed.join(' ');
    return reversedArr;
}

const str ='the quick brown fox jumps over the lazy dog';
const result = wordReverse(str);
console.log(result);