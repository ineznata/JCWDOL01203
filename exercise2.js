let celcius = 15;
let fahrenheit = (celcius * (9/5)) + 32;
console.log(fahrenheit, "F");

let number = 23;
if(number % 2 == 0) {
    console.log("even");
} else {
    console.log("odd");
}

// 5 = 2,3,4
let prime = "is a prime number"
for (let i = 2; i < number; i++) {
    if (number % 1 === 0) {
        console.log("is not a prime number");
        break;
    }
}

console.log(number, " ",prime);


let n = 8;
let result = 0;
for(let i = 1; i <= n; i++) {
    // console.log(i);
    result = result + i; 
}

console.log(result);


let f = 8;
let result2 = 1;
for(let i = 1; i <= f; i++) {
    // console.log(i);
    result2 = result2 * i; 
}

console.log(result2);


// 0+1+1+2+3+5+8+13+21+34+55+89+
let deret = 16;
let num1 = 0;
let num2 = 1;
let result3 = 0;

console.log(" deret ke 1 = ", num2);
for(let i = 2; i <= deret; i++) {
    result3 = num1 + num2;
    num1 = num2;
    num2 = result3;
    console.log(" deret ke ", i, " = ", num2);
}