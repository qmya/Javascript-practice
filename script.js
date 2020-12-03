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

//if you try to convert a string to a number that is not a number in real life
//type conversion 😎
console.log(Number("Qandeel")); //it will give you that this is not a number 😂
console.log(typeof "Qandeel");
//converting a Number to a String
console.log(String(23));
console.log(typeof 23); // we got white 23 which means its converted into a string "23" 👍🏽

//type coersion: when an operator is dealing with two types e.g string & number 🤓
console.log("I am " + 23 + " years old"); // Here the number is converted to string because of an operator . So when ever there is a number in between a string an ✚ operator is used it will convert it a string

// Not all numbers are converted in to string
console.log("23" - "10" - 3);
//- operators actually convert the strings to the number

console.log("23" * "3");
//convert the string to a number and ✖ it.

console.log("23" / "3");
//convert the string to a number and ➗

//booleans
console.log("23" > "10"); // yes it works 😎

let n = "1" + 1; // "1"+1=11 also plus treat it like a string
console.log(n);
n = n - 1; //11-1=10
console.log(n);

let m = "5" - 2; // minus always convert the string to a number
console.log(m);

//truthy and falsy values
//5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("Qandeel")); //true
console.log(Boolean({})); //true
console.log(Boolean("")); //false

//type coersion in if and else
//falsey: 👇🏽
let money = 0; //0 is a falsey value
if (money) {
  //money is not true thats why it went to another condition
  console.log("Don't spend it all 😛");
} else {
  console.log("you should get a job 👀");
}
//truth: 👇🏽
money = 1000; //1000 is a truthy value
if (money) {
  //money is not true thats why it went to another condition
  console.log("Don't spend it all 😛");
} else {
  console.log("you should get a job 👀");
}
//another example

let height; // doesnot have any value. FALSEY
if (height) {
  //false
  console.log("Yay! height is defined");
} else {
  //true
  console.log("Nope! height is undefined");
}
//equality operators
//ALWAYS USE THE STRICT VERSION 👉🏽 ===
const ageNow = 18; //assignment =
if (ageNow === 18)
  console.log("You are now adult and aloud to drive (=== strict equality)"); // comparison ===
console.log("You are now adult and aloud to drive (== loose equality)");
//=== strict equality
//== loose equality

//Prompt
const favouriteNumber = Number(prompt("What's your favourite number"));
console.log(typeof favouriteNumber, favouriteNumber); //string

if (favouriteNumber === 23) {
  //23 = 23
  console.log("Cool! this is a Number");
} else if (favouriteNumber == 23) {
  //here the '23' is converted to 23 by == operator and hence '23'== 23 😁
  console.log("Cool! this is a string");
}

//DIFFERENT OPERATOR
// NOT EQUAL TO (STRICT VERSION) 👉🏽 !==
// NOT EQUAL TO (LOSS VERSION) 👉🏽 !=

if (favouriteNumber !== 23) console.log("why not 23");

//BOOLEAN LOGIC : THE "AND", "OR" & "NOT" OPERATORS
const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = false;
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);

//Not operator !
console.log(!hasDriverLicense);
console.log(!hasGoodVision);

//example
const shouldDrive = hasDriverLicense && hasGoodVision;
if (hasDriverLicense && hasGoodVision) {
  console.log("Yes, You can drive 🚗");
} else {
  console.log("Sorry, you can not drive 🙅🏼‍♀️");
}
if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Ready to drive");
} else {
  console.log("Sorry, you can not drive 🙅🏼‍♀️");
}

console.log(hasDriverLicense || hasGoodVision || isTired);
console.log(hasDriverLicense && hasGoodVision && isTired);

//CODING CHALLENGE 3 📝
//Calculate the average score for each item , using the test Data below:
//TEST DATA: Dolphins score 96,108 and 89. Koalas score 88, 91 and 110
//Solution:
// const dolphinAverage = (96 + 108 + 89) / 3;
// console.log(dolphinAverage);
// const koalasAverage = (88 + 91 + 110) / 3;
// console.log(koalasAverage);
//Compare the averages and determine who is the winner
// if (dolphinAverage > koalasAverage) {
//   console.log("Dolphin is the winner 🐬 🏆");
// } else if (koalasAverage > dolphinAverage) {
//   console.log("Koalas is the winner 🐨 🏆");
// } else if (dolphinAverage === koalasAverage) {
//   console.log("DRAW ");
// }
//3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
//TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
//Solution:
const dolphinAverage = (97 + 112 + 101) / 3;
console.log(dolphinAverage);
const koalasAverage = (109 + 95 + 123) / 3;
console.log(koalasAverage);

if (dolphinAverage > koalasAverage && dolphinAverage >= 100) {
  console.log("Dolphin is the winner 🐬 🏆");
} else if (koalasAverage > dolphinAverage && koalasAverage >= 100) {
  console.log("Koalas is the winner 🐨 🏆");
} else if (
  koalasAverage === dolphinAverage &&
  koalasAverage >= 100 &&
  dolphinAverage >= 100
) {
  console.log("Both are winner 🏆");
} else if (
  koalasAverage === dolphinAverage &&
  koalasAverage != 100 &&
  dolphinAverage != 100
) {
  console.log("No winner");
}
//4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
//TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
const dolphinScore = (97 + 112 + 101) / 3;
const koalasScore = (109 + 95 + 106) / 3;

if (
  koalasAverage === dolphinScore &&
  koalasScore >= 100 &&
  dolphinScore >= 100
) {
  console.log("Draw");
} else {
  console.log("No one wins");
}
