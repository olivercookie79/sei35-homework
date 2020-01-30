//Exercises
/* ## What number's bigger?
Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.
- Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

// Greater Number :
const greaterNum = function(a, b) {

if (a > b) {
  return a;
} else {
return b;

 }

};

console.log (greaterNum(2,3) );


/* ## The Grade Assigner
Write a function named assignGrade that:
- takes 1 argument, a number score.
- returns a grade for the score, either "A", "B", "C", "D", or "F".
- Call that function for a few different scores and log the result to make sure it works.
*/


const assignGrade = function(score){

if (score >= 100) {
   return "A+";
 } else if (score >= 90){
   return "A";
 } else if (score >= 80){
   return "B";
 } else if (score >= 70){
   return "C";
 } else if (score >= 60){
   return "D";
 } else {
   return "F";
}
};

// console.log(`Congratulations! you are a Genius ${ assignGrade(100)}`);
console.log(`WELL DONE SIR! ${ assignGrade(70)}`);
console.log(`You are a living Failure! ${ assignGrade(14)}`);



//Pluralizer//
const pluralize = function(noun, number){
    const message =`${  number } ${ noun }`;
    if (1=== number) {
    return message;
  }else {
    return message + 's';
  }
};
console.log( pluralize ('cat', 5) );
console.log( pluralize ('dog', 1) );
console.log( pluralize ('turtle', 0) );


//string interpolation//

var name ="Ollie";
console.log (`Hello, ${name}!
        How are you doing
        today?
        are you going
        shopping later?`);

//Age Calculator//

const currentYear = 2019;
const dob = 1938;

 getAge = currentYear - dob;
 console.log(`they are ${getAge} years old`);


//////////

 const ageOlder = 34
 const ageYounger = 31

console.log (ageOlder > ageYounger);
////////////////////////
//The Lifetime Supply Calculator
//Ever wonder how much a //"lifetime supply" of your favorite snack is? Wonder no more!

//Store your current age into a variable.
//Store a maximum age into a variable.
//Store an estimated amount per day (as a number).
//Calculate how many you would eat total for the rest of your life.
//Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

const currentAge = 49;
const maxAge = 89;
const saltnVinegarCrisps = 3 * 365;

lifetimeSupply = 89 - 49;

console.log(`you will need ${lifetimeSupply * saltnVinegarCrisps} packets of salt n vinegar crisps`);

///////
//Calculate properties of a circle, using the definitions here.

//Store a radius into a variable.
//Calculate the circumference based on the radius, and output "The circumference is NN".
//Calculate the area based on the radius, and output "The area is NN".//

const rad = 4 * 2;

const pi = 3.14

const circumference = pi * rad;

console.log(circumference);


//temp converter//

const celsius = 32;

const  fahrenheit = celsius * 9 / 5 + celsius;

console.log(fahrenheit);


///////////


//FUNCTIONS//

 const swearWordInsult = function() {

   console.log("fuck you, you stupid  asshole!!");
}
////////////////////////////////////////////////////////////

////////////////
//add numbers functions///

const mathNumbers =  function (num1, num2, num3,){

  result =  num1 * num2 * num3;

  return result;

}
  const sum = mathNumbers ( 2, 5, 5);

console.log(sum);
///////////


const calculateDoggyAge = function (puppyAge){

// const puppyAge = 3
const humanAge = puppyAge *7;
console.log(humanAge);

return `Your doggy is  ${humanAge} years old in Human years!! `;
};


const doggy1 = calculateDoggyAge(2);
const doggy2 = calculateDoggyAge(5);
const doggy3 = calculateDoggyAge(10);


console.log(doggy1);
console.log(doggy2);
console.log(doggy3);

////////////////////////////////////////////////////////////////
const calculateSupply = function( age, amountPerDay ){
   const expectedLifespan = 90;
   const yearsRemaining = expectedLifespan - age;
   const amountPerYear = amountPerDay * 365.25;
   const totalSnacksRequired = yearsRemaining * amountPerYear;

   return `You will need ${totalSnacksRequired} to last you until the ripe old age of ${expectedLifespan}.`;
};

// const snacks1 = calculateSupply( 80, 5 );
// console.log('When you are 80 and need 5 snacks per day: ', snacks1);


//snacks functions version//

//fortune teller//


const tellFortune = function(job,location, partnersName, numberofChildren){

const output = `You will be a ${job} living in ${location} married to ${partnersName} and have ${numberofChildren} children.`;


  return output;
};

const fortune1 = tellFortune  ('Lawyer','London','Mary Lou Shelley', 31);
const fortune2 = tellFortune ('Teacher', 'Bangladesh',' Mobooboo',24);
const fortune3 = tellFortune  ('Cobbly streer peddler','Old Town','Deadrie',4);

console.log(fortune1);
console.log(fortune2);
console.log(fortune3);


////


const selectClass = function(Faction,Power,Weapon,Gift){


const output = `You have chosen to be a ${Faction} able to use  ${Power}, wielding the  infamous  ${Weapon} and be gifted with  the ${Gift}.`

 return output;

}
//
 const class1 = selectClass ('Wizard','Necromancy','Death Staff','Eye of   Dark Wisdom');

const class2 = selectClass ('Warrior','Energy Surge','Sword of Power','Bracelet of Protection');

const class3 = selectClass ('Thief','Stealth','Hidden Blade ',' Skeleton Key of Ramus');


console.log(class1);
console.log(class2);
console.log(class3);


////////


const calcCircumference = function(Circumference){

return calcCircumference;

}

// const pie = 3.14;
// const radii =2;
const Circumference = 3.14 * 2;
console.log(calcCircumference);
// const area = 8

// const calcArea = function(pi




// The Temperature Converter
// It's hot out! Let's make a converter.
//
// Create a function called celsiusToFahrenheit which:
//
// Takes a celsius temperature as its argument.
//
// Converts it to fahrenheit and returns this value from the function
//
// Call the funtion this way:
//
// Create a variable called celsius and store a temperature value in it
// Call the celsiusToFahrenheit function and pass the celsius variable as the argument.
// Capture the return value of the function into a new variable, and use both this variable and your original celsius input variable to print out a result like "XX°C is YY°F".
// Now do the reverse calculation by creating a function called fahrenheitToCelsius. Pass a variable called fahrenheit into this function when you call it.
//
// BONUS: prompt the user for the temperatures to convert, instead of hardcoding them into variables.


const celsiusToFahrenheit = function( celsius ){
  return (celsius * 1.8) + 32;
};

const fahrenheitToCelsius = function( fahrenheit ){
  return (fahrenheit - 32) / 1.8;
};

const celsiusTemp = 47;
const fahrenheitTemp = celsiusToFahrenheit( celsiusTemp );
console.log(`${celsiusTemp}°C is equal to ${fahrenheitTemp.toFixed(1)}°F.`);

const newCelsiusTemp = fahrenheitToCelsius( fahrenheitTemp );
console.log(`${ fahrenheitTemp.toFixed(1) }°F is equal to ${ newCelsiusTemp.toFixed(1) }°C.`);
///more condtionals if else

const age = 25;

  if (age > 18){
  console.log('Yay you can get drunk!');

  } else {

console.log('no way buddy, you are way too young to drink, you have '+ (18 - age)+ ' years until you can drive  you whippersnapper you!!');}


// let x = 10;
//
// while (x < 5) {
// console.log(x);
//  x + =1;
// }


//for loops//

// for (let i =0; i < 250; i = i +1) {
//   console.log(i);

const sergeSays = function( input ){
  // let response = "";

  if( input.endsWith('?')){
    return "sure";
  }else if (input.length === 0){
    return "fine be that way";
  }else if ( input === input.toUpperCase() ){
    return "Whoa, chill out";
  }else{
    return "whatever";
  }

// return response;
};

console.log("How are you?:", sergeSays("How are you?"));
// console.log("Hello:", sergeSays("Hello"));
// console.log("I LOVE JS:", sergeSays("I LOVE JS"));
// console.log("Empty string:", sergeSays(""));
