"use strict"; /* включение сторого режима*/

/*---------------START less  Compare Scopes of the var and let Keywords---------*/
function checkScope() {
	let i = 'function scope';
	if (true) {
		let i = 'block scope';
		console.log('Block scope i is: ', i);
	}
	console.log('Function scope i is: ', i);
	return i;
}
console.log(checkScope());
/*---------------END less  Compare Scopes of the var and let Keywords---------*/

/*---------------START less  Mutate an Array Declared with const---------*/
const s = [5, 7, 2];
function editInPlace() {
	// Only change code below this line

	// Using s = [2, 5, 7] would be invalid
	s.pop();
	s.unshift(2);
	// Only change code above this line
}
editInPlace();
/*---------------END less  Mutate an Array Declared with const---------*/

/*---------------START less  Write Arrow Functions with Parameters---------*/
const myConcat = (arr1, arr2) => arr1.concat(arr2);
;

console.log(myConcat([1, 2], [3, 4, 5]));
/*---------------END less  Write Arrow Functions with Parameters---------*/
/*---------------START less  Set Default Parameters for Your Functions---------*/
const increment = (number, value = 1) => number + value;
/*---------------END less  Set Default Parameters for Your Functions---------*/

/*----START less  Use the Rest Parameter with Function Parameters------*/
const sum = (...args) => {
	//const args = [x, y, z];
	let total = 0;
	for (let i = 0; i < args.length; i++) {
		total += args[i];
	}
	return total;
}
/*-----END less  Use the Rest Parameter with Function Parameters-------*/


/*----START less  Destructuring via rest elements------*/
function removeFirstTwo(list) {
	// Only change code below this line
	const [, , ...shorterList] = list; // Change this line
	// Only change code above this line
	return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
/*-----END less  Destructuring via rest elements-------*/

/*----START less  Create Strings using Template Literals------*/
const result = {
	success: ["max-length", "no-amd", "prefer-arrow-functions"],
	failure: ["no-var", "var-on-top", "linebreak"],
	skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
	// Only change code below this line
	const failureItems = [];
	for (let i = 0; i < arr.length; i++) {
		failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
	}
	// Only change code above this line

	return failureItems;
}

const failuresList = makeList(result.failure);
/*-----END less  Create Strings using Template Literals-------*/

/*----START less  Use getters and setters to Control Access to an Object------*/
// Only change code below this line
class Thermostat {
	constructor(farengate) {
		this._f = farengate;
	}
	// getter
	get temperature() {
		return (5 / 9) * (this._f - 32);
	}
	// setter
	set temperature(updatedCelsium) {
		this._f = updatedCelsium * 9 / 5 + 32;
	}
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

/*-----END less  Use getters and setters to Control Access to an Object-------*/

/*----START less  Create a Module Script------*/
<html>
  <body>
    <!-- Only change code below this line -->
<script type="module" src="index.js"></script>

    <!-- Only change code above this line -->
  </body>
</html>

/*-----END less  Create a Module Script-------*/

/*----START less  Use export to Share a Code Block------*/
export const uppercaseString = (string) => {
   return string.toUpperCase();
 }
 
 export const lowercaseString = (string) => {
   return string.toLowerCase()
 }

/*-----END less  Use export to Share a Code Block-------*/

/*----START less  Reuse JavaScript Code Using import------*/
import { uppercaseString, lowercaseString } from './string_functions.js';
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
/*-----END less   Reuse JavaScript Code Using import-------*/


/*----START less  Use * to Import Everything from a File------*/
import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
/*-----END less   Use * to Import Everything from a File-------*/

/*----START less  Create an Export Fallback with export default------*/
export default function subtract(x, y) {
	return x - y;
}
/*-----END less   Create an Export Fallback with export default-------*/

/*----START less  Import a Default Export------*/
// Only change code above this line
import subtract from "./math_functions.js";
subtract(7,4);
/*-----END less   Import a Default Export-------*/

/*----START less  Complete a Promise with resolve and reject------*/
const makeServerRequest = new Promise((resolve, reject) => {
	// responseFromServer represents a response from a server
	let responseFromServer;

	if(responseFromServer) {
		resolve("We got the data");

	} else {
		reject("Data not received");

	}
});
/*-----END less   Complete a Promise with resolve and reject-------*/