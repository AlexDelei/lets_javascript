/*
string -> 'bob' or "Bob"
boolean = true
array = [1, 'Bob', 'Steve', 10]
accessing array values = array[0] or indexing as always
Object - everything in javascript is an object and can be stored in a variable
i.e 
let myVariable = document.querySelector('h1');

EACH END OF LINE ENDS WITH A SEMI COLON
*/
// single line comment
/*

##################


###  OPERATORS IN JAVASCRIPT  ###


----------Addition------------
->common math addition i.e 5 + 10;
->combining two strings i.e 'Hello' + 'Alex';

---------Subtraction----------
-> ( - )
---------Multiply--------------
-> ( * )
---------Divide----------------
-> ( / )
---------Strict Equality--------
-> This performs a test to see if two values are equal and of the same
-> data tyoe. It returns a true/false result
-> ( === )
-> Example:
-> let myVariable = 7;
-> myVariable === 9; For this case it will return False since 7 is not equal to 9

-----Comaprison Operators---
-> Not, does-not-equal
-> This returns the logically opposite value of what it precedes. i.e turns
-> a true into a false

-> For "NOT" , the basic expression is true but the comparison returns false
-> because we negate it.
-> let myVariable = 7;
-> !(myVariable === 7);

-> "DOES-NOT-EQUAL" gives basically the same result with a different syntax.
-> i.e let myVariable = 8;
->      myVariable !== 8;

-------Logical Operators------
--> Logical AND ( && )
--> Logical OR ( || )
--> Logical NOT ( ! )

------Unary Operators---------
-> A unary operation is an operation with only one operand
!--> delete
----> the delete operator deletes an object's property
!--> typeof
----> the typeof operator returns a string indicating the tyoe of the unevaluated opreand
!--> void
----> the void operator specifies an expression to be evaluated without returning a value
!--->
------Relational Operators-----
-> in
--> the in operator returns true if the specified property is in the specified object
---> syntax : propNameOrNumber in objectName

-> instanceof
--> the instanceof returns true if the specified object is of the specified object type.
---> syntax: objectName instanceof objectType

------Basic expressions-------
-> this
--> use the this keyword to refer to the current object. It refers to the calling object in a method
---> syntax: this.propertyName
function validate(obj, lowval, hival)
{
  if (obj.value < lowval || obj.value > hival)
  {
    console.log("Invalid Value!");
  }
}

-> new
--> the new operator is used to create an instance of a user-defined object type or of
--> one of the built-in object types that has a constructor function
*/
function Car(make, model, year)
{
    this.make = make;
    this.model = model;
    this.year = year;
} 
const car1 = new Car('Eagle', 'Talon TSi', 1993);
console.log(car1.make);
// Expected output: "Eagle"
/*

##################


###  JAVASCRIPT DATA TYPES AND DATA STRUCTURES  ####
-> null
--> the null value represents the intentional absence of any object value.
--> Example in use
*/
function getVowels(str)
{
    const m = str.match([aeiou]/gi);
    if (m === null)
    {
        return 0;
    }
    return m.length
}
console.log(getVowels('sky'));
/*

-> undefined 
--> represents the primitive value undefined
--> Example
*/

function test(t)
{
    if (t === undefined)
    {
        return 'Undefined Value!';
    }
}
let x;
console.log(test(x)); //expected output is : "Undefined Value!"

/*
-> null is a key word but undefined is a normal identifier
-> Difference between a keyword and an identifier in js
--> Keywords are reserved words that have a predefined meaning in the JavaScript language.
--> Example of keyword in js:
--> if
--> else
--> for
--> while
--> function
--> var
--> let 
--> const

--> Example of identifiers in js
--> myVariable i.e the name of the variable


-> boolean
--> true or false values
--> are used in conditional statements or ternary operations
--> Example of a ternary operation in js
*/
function getFee(isMember)
{
    return isMember ? '$2.00' : '$10.00';
}
console.log(getFee(true));
// Expected output : "$2.00"

console.log(getFee(false));
// Expected output : " $10.00"

console.log(getFee(null));
// Expected output : "$10.00"
/*
-> Number
--> Number values represent floating-point numbers like 37 or -9.12
--> Values of other types can be converted to numbers using the Number() function

--> Number.MAX_SAFE_INTEGER
--> this is a static data property that represents the maximum safe integer in js( 2^53 - 1)
--> Example :
*/

const z = Number.MAX_SAFE_INTEGER + 1;
const y = Number.MAX_SAFE_INTEGER + 2;

console.log(Number.MAX_SAFE_INTEGER);
// Expected output: 9007199254740991

console.log(z);
// Expected output: 9007199254740992

console.log(z === y);
// Expected output: true

/*
-> BigInt
--> can represent integers with an arbitrary magnitude. Stores very large integers 
--> A BigInt is created by appeding n to the end of an integer or by calling the BigInt() function

-> String
--> The String object is used to represent and manipulate a sequence of characters.
--> operations done to the string object include:
!--> length
!--> + ; for concatination
!--> += ; also concatinates string exampl in use
----> let mystring = "alpha";
----> mystring += "bet"; // evaluates to "alphabet" and assigns this value to mystring

#################


JAVASCRIPT DISPLAY POSSIBILITIES

--> writing into an HTML element, using innerHTML
--> writing into the HTML output, using document.write()
--> writing into an alert box, using window.alert()
--> writing into the browser console, using console.log()

#################


JAVASCRIPT RULES

Use 2 spaces for indentation.
Use single quotes for strings except to avoid escaping.
No unused variables.
Add a space after keywords.
Add a space before a function declaration's parentheses.
Always use === instead of ==.
Infix operators must be spaced.
Commas should have a space after them.
Keep else statements on the same line as their curly braces.
For multi-line if statements, use curly braces.
Always handle the err function parameter
Declare browser globals with a // global // comment.
    Exceptions are: window, document, and navigator.
    Prevents accidental use of poorly-named browser globals like open, length, event, and name.
Multiple blank lines not allowed.
For the ternary operator in a multi-line setting, place ? and : on their own lines.
For var declarations, write each declaration in its own statement.
Wrap conditional assignments with additional parentheses.
    This makes it clear that the expression is intentionally an assignment (=) rather than a typo for equality (===)
Add spaces inside single line blocks.
Use camelcase when naming variables and functions.
Trailing commas not allowed.
Commas must be placed at the end of the current line.
Dot should be on the same line as property.
Files must end with a newline.
No space between function identifiers and their invocations.
Add space between colon and value in key value pairs.
Constructor names must begin with a capital letter.
Constructor with no arguments must be invoked with parentheses.
Objects must contain a getter when a setter is defined.
Constructors of derived classes must call super.
Use array literals instead of array constructors.
Avoid using arguments.callee and arguments.caller.
Avoid modifying variables of class declarations.
Avoid modifying variables declared using const.
Avoid using constant expressions in conditions (except loops).
No control characters in regular expressions.


##################


JAVASCRIPT OBJECTS BASICS

-> An object is a collection of related data and/or functionality. Usually consisting of several variables and functions
-> which are called properties and methods when they are inside objects.

-> this keyword refers to the current execution context in javascript

-> creating an object begins with defining and initializing a variable.
-> Example of an object

const person = {
  name: ['Alex', 'Mark'],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]}) is ${this.age} years old`);
  },
  instroduceSelf: function () {
    console.log(`hi! i'm ${this.name[0]});
  },
};
*/
/*
-> so typically an object in javascript is the same as  a class in python where the 
-> class Classname in js is a const variable with curly brackets.

-----Accsessing Objects values-------
-> Consider the following examples
*/
const person = { name: ['Alex', 'Smith'],};
const persona = {name: {first: 'Alex', last: 'Smith'},};

/*
-------Accesing values of person------
name[0];
name[1];

-------Accesing values of persona------
name.first;
name.last

-> Values can also be accessed through brackets in js
i.e 
--> consider
*/

const personA = {
  name: ['Alex', 'Smith'],
  age: 32,
};

function logProperty(propertyName) {
  console.log(personA[propertyName])
}
logProperty("name")
// Output: ["Bob", "Smith"]
logProperty("age");
// Output 32


const personB = {
  name: ['Bob', 'Smith'],
  age: 45, bio () {
    console.log(`${this.name[0]}  ${this.name[1]} is ${this.age} years old`);
  },
  introduceSelf() {
    console.log('Hi , im ${this.name[0]}')
  }
}

/*------Constructors---------
-> This is a method to one object that can be used and reused any time without us having to define 
-> any other object.

-> Example of definition of a constructor function:


*/
function createPerson (name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi i'm ${this.name}`)
  };
  return obj;
}
// This function creates and returns a new object each time we call it.
// the objects have two members: a property 'name'
// a method 'introduceSelf()' 

// Example of objects created from that function
const salva = createPerson("Salva")
salva.name;
salva.introduceSelf(); // Expected output: "Hi i.m Salva"

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf(); // Expected output: "Hi i'm Frankie"
/*
const length = argv.length - 2;
if (length === 0) {
  console.log('No argument');
} else if (length === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}


##################


CLASSES IN JAVASCRIPT

------Declaring classes----
-> use class keyword
example:
*/
class Person {
  name;

  constructor(name) {
    this.name = name;
  } // this initializes a new object with a name poperty

  introduceSelf() {
    console.log(`Hi i'm ${this.name}`);
  }
}
/*

-------Inheritance----------
-> Example :
*/
class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name}, and i will be your ${this.teaches} professor`
    );
  }
  grade (paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}


/*
-------Encapsulation----------
Encapsulation helps in hiding the internal implementation details of an object 
and exposing only the necessary functionalities to the outside world. 
This reduces code modularity , reduces complexity, and enhances maintainability

A good example of encapsulation:
*/
function Car(make, model) {
  // Private variables
  let speed = 0;

  // public properties
  this.make = make;
  this.model = model;

  // public method to get speed
  this.getSpeed = function () {
    return speed;
  }

  // public method to accelerate
  this.accelerate = function (increment) {
    speed += increment;
    console.log(`Accelerating to ${speed} km/h`);
  };

  // public method to brake
  this.brake = function (decrement) {
    speed = Math.max(0, speed - decrement);
    console.log(`Braking to ${speed}`);
  };
}

// Creating a new car object
const myCar = new Car('Toyota', 'Camry');

// Accessing public properties
console.log(myCar.make); 
console.log(myCar.model);

// Accessing public methods
myCar.accelerate(20);
console.log(myCar.getSpeed());

myCar.brake(10);
console.log(myCar.getSpeed())
/*

*/