// programm1
// celcius to farenheit

let celciuss = prompt("Enter the Temp in celcius");
let farenheite = (celciuss * 9/5) + 32;
console.log(farenheite);


// programm2
// farenheit to celcius

let farenheit = prompt("Enter the temp in Farenheit");
let celcius = (farenheit - 32) * 5/9;
console.log(celcius);


// programm3
// percentage of matriculation examination

let totalMarks = 1100;
let gainMarks = prompt("Enter your gain marks");
let percentage = (gainMarks / totalMarks) * 100;
console.log("Your percentage is =>", percentage);


// programm4
// write a programm in which user prompt the value not be negative it will be a positive number

let number =+ prompt("Enter a number");

if (number > 0){
    document.write("Your number is positive");
}
else {
    document.write("Your number is negative");
}


// programm5
// write a programm in which the user prompt data and if the value is equal to or greater then 10 then it will show Thanks else it show 😥😥😥😥😥😥😥

let userValue = + prompt("Enter your value");

if (userValue >= 10) {
    document.write("Thanks");
}
else {
document.write("😥😥😥😥😥😥😥Sorry your number is greater then 10");
}