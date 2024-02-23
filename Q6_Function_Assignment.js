// Do Addition Using currying function

function curry(num1){
    return function(num2){
            return num1+num2;
    }
}
const Addition=curry(10)(54);
console.log(`The Addition num1 and num2 is ${Addition}.`);