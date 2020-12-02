let js = "amazing";
// if (js === "amazing") alert("JavaScript is fun");
console.log(40 + 100 + 30);

let firstName = "Qandeel";
console.log(firstName);
let age = 25;
console.log(age);

//Data types
console.log(typeof age);

let JavascriptIsFun = true;
console.log(JavascriptIsFun);
JavascriptIsFun = "Yes!";
console.log(JavascriptIsFun);

let year;
console.log(year);

year = 1995;
console.log(year);
// age in 2050

const now = 2020;
const agePurdal = now - 1986;
const ageQandeel = now - 1995;
console.log(ageQandeel, agePurdal);
//2**3 means 2 to the power of 3
console.log(ageQandeel * 2, agePurdal / 2, 2 ** 3);

//+: is used to add/join or concatinate two strings
const lastName = "Mya";
const fullName = firstName + " " + lastName;
console.log(fullName);

//assignment operators

let x = 10 + 5; //x=15
x += 10; //we add 10 to the 15 = 25
x++; //x=x+1
console.log(x);

//Comparison operators
//Results of a comparison operators should be a booleans
console.log(agePurdal > ageQandeel); //true
console.log(ageQandeel >= 26);

//assignment the value

let z, y;
z = y = 25 - 10 - 5; //in assignment the value works from right-to-left
console.log(z, y);

const averageAge = (ageQandeel + agePurdal) / 2;
console.log(averageAge);

// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.*/

//Test Data # 01
// const marksHeight = 1.69;
// const marksMass = 78;
// const johnsHeight = 1.95;
// const johnsMass = 92;
// const BMI = mass / height ** 2;
// const marksBMI = marksMass / marksHeight ** 2;

// const johnsBMI = johnsMass / (johnsHeight * johnsHeight);

// const compareBMI = marksBMI > johnsBMI;
// console.log(marksBMI, johnsBMI, compareBMI);

// Test Data # 02
// const marksHeight = 1.88;
// const marksMass = 95;
// const johnsHeight = 1.76;
// const johnsMass = 85;
// const marksBMI = marksMass / marksHeight ** 2;

// const johnsBMI = johnsMass / (johnsHeight * johnsHeight);
// const compareBMI = marksBMI > johnsBMI;
// console.log(marksBMI, johnsBMI, compareBMI);

//Strings and templates literals
// const firstName = "Qandeel";
// const age = 25;
const job = "web developer";

const aboutMe =
  "I'm" +
  " " +
  firstName +
  " " +
  age +
  " " +
  "years old and I am a" +
  " " +
  job;
console.log(aboutMe);

const newFirstName = `I'm ${firstName}, a ${age} year older and I am a ${job}`;
console.log(newFirstName);

//for newline or multiple line
//template strings
console.log(`String
multiple
line`);

// If and else
age = 15;
// const isOldEnough = age >= 18;
if (age >= 18) {
  //if the condition is true than the it will give us something written inside this {}
  console.log("eligible for driving 🚗");
} else {
  console.log("She is not permitted to drive 🙅🏼‍♀️");
  const yearLeftToDrive = 18 - age;
  console.log(
    `Sarah have to wait ${yearLeftToDrive} years to start driving 😊`
  );
}

//if else without console.log
const birthYear = 1995;
let century = "";
if (birthYear <= 2000) {
  century = "20th century";
} else {
  century = "21th century";
}
console.log(century);

//coding challenge
//if and else
const marksHeight = 1.69;
const marksMass = 78;
const johnsHeight = 1.95;
const johnsMass = 92;
// const BMI = mass / height ** 2;
const marksBMI = marksMass / marksHeight ** 2;

const johnsBMI = johnsMass / (johnsHeight * johnsHeight);

const compareBMI = marksBMI > johnsBMI;
console.log(marksBMI, johnsBMI, compareBMI);

//if and else condition
if (marksBMI > johnsBMI) {
  console.log("Marks BMI is higher than Johns BMI 💪🏻");
  const bothBMI = `Mark's BMI ${marksBMI} is higher than John's ${johnsBMI}`;
  console.log(bothBMI);
}

// converting the string to the integer to string and vice versa
const inputYear = "1995";
//convert the string to an integer
const changeStringToNumber = Number(inputYear);
console.log(changeStringToNumber, inputYear);
console.log(changeStringToNumber + 18);
