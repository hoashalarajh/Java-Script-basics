console.log("Hello this is Hoashalarajh from index.js file");
// defining first name
let first_name = "Hoashalarajh";
// defining last name
let last_name = "Rajendran";

// utilzing the variables

// printing first_name
console.log("My first name is ", first_name);
// printing last name
console.log("My last name is ", last_name);
// printing full name
console.log("My full name is ", first_name + " " + last_name);

// defining constants
const pi = 3.14;

// printing constants
console.log("The value of pi is defined as:", pi);

//primitive data types
let name = "Hoashalarajh"; // string literal
let age = 27;  // number literal
let superStateTransition = true;  // boolean literal
// name is sitll not entered by the user
let primary_name = undefined;
// user hasn't selected any color; so by default it is assigined as null
let selectedColor = null;

// objects - reference data types
// these are the details of the person
// let user_name = "Mosh";
// let user_age = 30;

// defining the person object
let person = {
    user_name: "Mosh",
    user_age: 30
};

// printing the person object detials
console.log("I am printing the person object: ", person);
// printing the name and ge of the person object
console.log("Age if the person is :", person.user_age);
console.log("Name of the person is :", person.user_name);

//accessing the elements inside the person obejct using 
// Bracket notation
let selection = "name";
person[selection] = "Mary";

// printing the person object after changes made
console.log("name after change made:", person.name);

// arrays
let selectedColors = ["red", "blue"];
console.log(selectedColors);
// acessing 1st element in array
console.log("the first element of the array is :", selectedColors[0]);
// accessing the second element 
console.log("the second element of the array is:", selectedColors[1]);
// adding a third element
selectedColors[2] = 200;
// adding fourth element to array
e=selectedColors[3] = "Hello";
// printing the newly added element
console.log("The newly added element is:", selectedColors[2]);
// printing the length f the array
console.log("Length of the array is :", selectedColors.length);
// printing the while array
console.log("The while array is:", selectedColors);

// functions
// defining the function
function greet() {
    console.log("This is function");
    console.log("This is me again from greeting function");
}

// calling the function
greet();

// defining greeting fuction that takes a name variables to say hello
function greeting (first_name, last_name){
    console.log("this is generated from a function");
    console.log("Hello" + " " + first_name + " " + last_name);
}

// calling the fucntion for two different use cases
greeting ("Hoashalarajh", "Rajendran");
greeting ("Harishraj", "Rajendran");


// functions
// calculating a value
function square(number){
    return (number * number);
}

// printing the square of any number
console.log("Sqaure of 4 is: ", square(4));


// Ending
console.log("thank you");
console.log("This is the end");