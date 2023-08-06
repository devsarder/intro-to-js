function reverseStr(text){

    let reversed = ''
    for(let i = text.length - 1; i >= 0; i--){
        let element =text[i];
        reversed += element;
        // console.log(element)
        console.log(element, reversed);

    }
    return reversed;

}


const str1 = "i'm a web developer";
const reversed = reverseStr(str1);
console.log(reversed);