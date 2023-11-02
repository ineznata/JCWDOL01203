let length = 5;
let width = 3;

let area = length * width;
let perimeter = 2 * (length + width);

console.log(area);
console.log(perimeter);

let radius = 5;

let diameter = 2 * radius;
let circumference = 2 * 3.14 * radius;
let areaCircle = 3.14 * radius**2;

console.log(diameter, circumference, areaCircle);

let a = 80;
let b = 65;
let totalAngles = 180;

let c = totalAngles - a - b;

console.log(c);

let date1 = new Date ("2022-01-20");
let date2 = new Date ("2022-01-22");

let diffDate = date2 - date1;

console.log(diffDate / (1000 * 60 * 60 * 24));

let days = 366;
let year = Math.floor(days / 365)
let month = Math.floor((days % 365)/30);
let remDays = (days % 365) % 30;

console.log("year = ", year, "month = ", month, "days = ", remDays);