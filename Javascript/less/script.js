"use strict"; /* включение сторого режима                   */
/*-------------- less 1  START------------*/

// комментарий однострочный
/* комментарий многострочный
как в CSS */


/*---------------les 1 END------------*/

/*-------------- less 2 - 8  START------------*/

var myName; //less 2
myName = 5; //less 3

var a; //less 4
a = 7; //less 4
var b = a; //less 4

var c = 9; //less 5

var myFirstName = "myFirstName"; //less 6
var myLastName = "myLastName"; //less 6

var a = 5; //less 7
var b = 10; //less 7
var c = "I am a"; //less 7
a = a + 1; //less 7
b = b + 5; //less 7
c = c + " String!"; //less 7

const FCC = "freeCodeCamp";  //less 10
let fact = "is cool!";  //less 10
fact = "is awesome!"; //less 10
console.log(FCC, fact);  //less 10

/*---------------les 2 - 10 END------------*/

/*-------------- less 15, 16, 21, 22, 23 ,24  START------------*/
let myVar = 87;
myVar++;  // less 15 Increment a Number with JavaScript    myVar = myVar + 1;

let myVars = 87;
myVars--;  // less 16  Decrement a Number with JavaScript   myVars = myVars - 1;

let a = 3;
a += 12; // less 21  Compound Assignment With Augmented Addition   a = a + 12;

let a = 87;
a -= 12; // less 22  Compound Assignment With Augmented Subtraction   a = a - 12;

let a = 7;
a *= 6; // less 23  Compound Assignment With Augmented Multiplication   a = a * 6;

let a = 75;
a /= 12; // less 24  Compound Assignment With Augmented Division    a = a / 12;
/*---------------les 15, 16, 21, 22, 23, 24 END------------*/

/*---------------START less  Escaping Literal Quotes in Strings---------*/
const myStr = "I am a \"double quoted\" string inside \"double quotes\"." 
/*---------------END less  Escaping Literal Quotes in Strings---------*/

/*---------------START less  Quoting Strings with Single Quotes---------*/
const myStr1 = '<a href="http://www.example.com" target="_blank">Link</a>'; //снаружи одинарные кавычки, внутри двойные
/*---------------END less  Quoting Strings with Single Quotes---------*/

/*---------------START less  Concatenating Strings with the Plus Equals Operator---------*/
let myStr2 = "This is the first sentence.";
myStr2 += " This is the second sentence.";
/*---------------END less  Concatenating Strings with the Plus Equals Operator---------*/


/*---------------START less  Concatenating Strings with Plus Operator---------*/
const myStr3 = "This is the start. " + "and This is the end."; 
/*---------------END less  Concatenating Strings with Plus Operator---------*/

/*---------------START less  Generate Random Fractions with JavaScript---------*/
function randomFraction() {
	return Math.random();
}
/*---------------END less  Generate Random Fractions with JavaScript---------*/


/*---------------START less  Use Recursion to Create a Countdown---------*/
function countdown(n) {
	if (n < 1) {
		return [];
	} else {
		const countArray = countdown(n - 1);
		countArray.unshift(n);
		return countArray;
	}
}
/*---------------END less  Use Recursion to Create a Countdown---------*/
/*---------------START less  Use Recursion to Create a Range of Numbers---------*/
function rangeOfNumbers(startNum, endNum) {

	if (endNum < startNum) {
		return [];
	} else {
		const countArray = rangeOfNumbers(startNum, endNum - 1);
		countArray.push(endNum);
		return countArray;
	}

};

console.log(rangeOfNumbers(2, 5));
/*---------------END less  Use Recursion to Create a Range of Numbers---------*/