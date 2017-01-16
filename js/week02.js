var a = 3;
var b = 5;
var c;
// Task 1
// Task 1

alert ("var a =3;\nvar b 5; \nvar c; \n---------\n\n" + 
	"a + b = " + (a + b) + "\n" +
	"a - b = " + (a - b) + "\n" +
	"a * b = " + (a * b) + "\n" +
	"a / b = " + (a / b) + "\n" +
	"a % b = " + (a % b) + "\n" +
	"a += b = " + (a += b) + "\n" +
	"a -= b = " + (a -= b) + "\n" +
	"a *= b = " + (a *= b) + "\n" +
	"a /= b = " + (a /= b) + "\n" +
	"a %= b = " + (a %= b) + "\n" +
	"a == b = " + (a == b) + "\n" +
	"a != b = " + (a != b) + "\n" +
	"a > b = " + (a > b) + "\n" +
	"a < b = " + (a < b) + "\n" +
	"!a && c = " + (!a && c) + "\n" +
	"!a || !c = " + (!a || !c)
);
	
	
// Task 2
var first_name = "Craig";
var last_name = "Clark";
var email = "clar0711@algonquinlive.com";
var output = "My name is " + first_name + " " + last_name + ". You can contact me at " + email + ".";

alert(output);


// Task 3
var numbers = [
	Math.floor(Math.random() * (200 - 100) + 100), // the starting number is always 0 so this is 0 not 1
	Math.floor(Math.random() * (200 - 100) + 100), // this is 1 not 2
	Math.floor(Math.random() * (200 - 100) + 100), // this is 2 not 3
	Math.floor(Math.random() * (200 - 100) + 100), // this is 3 not 4
	Math.floor(Math.random() * (200 - 100) + 100) // this is 4 not 5
];

//alert(numbers[0] + " + " + numbers[4] + " = " + (numbers[0] + numbers[4]));

/* check for even or odd numbers
% modulous is division with remainder
5 % 2 = 1 //a nunber is odd
6 % 2 = 0 //a number is even
*/

var mytotal = (numbers[0] + numbers[4]);

if (mytotal % 2 == 1) {
	alert(numbers[0] + " + " + numbers[4] + " = " + mytotal + ".\n" + mytotal + " is an odd number.");
} else {
	alert(numbers[0] + " + " + numbers[4] + " = " + mytotal + ".\n" + mytotal + " is an even number.");
		}
