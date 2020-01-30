
//REVIEW PART 2//

// const firstName = 'Ollie';
// const civilStatus = 'married';
//
// if (civilStatus === 'married') {
//   console.log(firstName + ' is married!');
//
// } else {
//   console.log(firstName + ' is divorced yay!');
// }


// const isMarried = false;
// if (isMarried) {
//     console.log(firstName + 'is married');
// }else {
//   console.log(firstName + ' is divorced yay!');
// }
//boolean logic//
//
// const firstName = 'John';
// const age = 4;
//
// if (age < 13) {
//
// console.log(firstName + ' is a boy');
// } else if (age >= 13 && age < 20){ //between 13 and 20 //
// console.log(firstName + ' is a teenager');
//
// }else if (age > 20 && age < 30){
// console.log(firstName + ' is a young man');
//
// } else {
//   console.log(firstName + ' is a man');
// }
///ternary statements..///
// if else all in one line

// const hisName = 'fred';
// const hisAge = 13;
//
// hisAge >= 18 ? console.log(hisName + ' drinks beer.')
// : console.log(hisName + ' drinks milk.');
//
// let drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

//Normal way//

// if (hisAge >= 18){
//   var drink = 'beer';
// }else{
//    var drink = 'juice';
//

// switch statement//
const firstName = 'Jimmy';
const job = 'circusclown';
switch(job) {
case 'teacher':
case 'circusclown':
  console.log(firstName + ' teaches kids how to code. ');
  break;
case 'driver':
  console.log(firstName + ' drives a broken down car. ');
  break;
case 'designer':
    console.log(firstName + ' designs websites.');
    break;
default:
console.log(firstName + ' sits at home wasting his life  ');
}


//truthy and falsy//

//falsy values: 0, NaN, undefined, null.
//truthy  values: not falsy values.

var weight = 80;

if (weight){
console.log('the variable has been defined');
} else {
  console.log('the variables has NOT been defined');
}

//basketball exercise

const scoreJohn = (89+ 120 + 103) / 3;
const scoreMike = (116 + 94 + 123)/3;
console.log(scoreJohn, scoreMike);

if (scoreJohn > scoreMike){
console.log('Johns team Wins with '+
scoreJohn +  ' points');
console.log(scoreMike);
} else if (scoreMike > scoreJohn){
  console.log('Mikes team Wins with ' +
  scoreMike + ' points');
  console.log(scoreJohn);
}else {
  console.log('There is a draw');
}
/////////

///////functions again!////


const calculateAge= function(birthYear) {
  return 2019 - birthYear;

}
const ageJohn = calculateAge(1970);
const agePeter = calculateAge(1998);
const ageMorris = calculateAge(2005);


console.log(ageJohn,agePeter,ageMorris);


const yearsUntilRetirement = function(year, firstName){


  var age = calculateAge(year);
  var retirement = 65 - age;
  console.log(firstName + ' retires in ' + retirement +  ' years.');

}
yearsUntilRetirement(1990, 'John')

/ ////remove vowels////
// const withoutVowels = function(string) {
//
// const strWithoutVowels = [];
//       string = string.split('');
//
// var vowels = ['a','e','i','o','u'];
//       for (const i =0; i < string.length; i++){
//       if (vowels.indexOf(string[i]) < 0
//           strWithoutVowels.push(string[i])
//           }
//         }
//         strWithoutVowels = strWithoutVowels.join('');
//         return strWithoutVowels;
//       }
//         console.log(withoutVowels'Hello World'))



        function withoutVowels(string) {

          var withoutVowels = "";
          for (var i = 0; i < string.length; i++) {
              if (!isVowel(string[i])) {
                withoutVowels += string[i];
              }
            }
            return withoutVowels;
        }

        function isVowel(char) {
          return 'aeiou'.includes(char);
        }

        console.log(withoutVowels('Hello World!'));


///Arrays

//initialisation
var names = ['Frank','Peter','Will','Aaron'];
var years = new Array(1909,1923,1989,2021);

console.log(names[2]);
console.log(names.length);

//modify arra data//
names[1] ="Freddy";
names[names.length] = "Mary";

console.log(names);

///diffferenrt data types//

var john =['John','Smittee', 1990, ' professional stuntman']

john.push('blue'); //adds new index to end of array

john.unshift('Mr');
john.pop();
john.shift();
console.log(john);
john.indexOf(1990)
console.log(john.indexOf(1990));

var isDesigner = john.indexOf('Designer') === -1 ?
'John is NOT a Designer' : 'John IS a Designer';
console.log(isDesigner);


//Arrays Fruits



const fruit  = ['Passion','Strawberries','Apples','Grapes','Oranages']

console.log('My Favorite fruit is '+ (fruit[0]));
console.log('My Second Favorite fruit is '+ (fruit[1]));
console.log('My Third Favorite fruit is  '+ (fruit[2]));
console.log('My Fourth Favorite fruit is  '+ (fruit[3]));
console.log('My Fith fruit is  '+ (fruit[4]));

//////////////////////


// tips exercise
//
// arrays
//
//
// bill 124
// tips []
// var bills =  [48,124,258];
//
// if bill >= 50
//   tip =  20/100
// else if
//   bill > 0/200
//   tip = 15/100
//   bill - 15
//
// bill 258
//
// arrayFinalAmount =[];
// arrayTipAmount=[]

// const  tipCalculator = function(bill) {
//     var percentage;
// if (bill < 50) {
//     percentage = .2;
//   } else if (bill >= 50 && bill < 200) {
//     percentage = .15;
//   } else {
//     percentage = .1;
//   }
//     return percentage * bill;
//
//   }
//
//   var bills = [124, 48, 268];
//   var tips = [tipCalculator(bills[0])
//               tipCalculator(bills[1])
//               tipCalculator(bills[2]];
//
//
// const finalValues = [bills[0] + tips[0],
//                     [bills[0] + tips[1],
//                     [bills[0] + tips[2]];
//
//
//   console.log(tips, finalValues);
//
//
//
//   }
//
// }

///OBJECTS//
//named values //



var john = {

  firstName: 'Johnny',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane','Mark','Bob','Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
    this.age = 2020 - this.birthYear;
  }

};
 john.calcAge();
 console.log(john);

// console.log(john.firstName);
// console.log(john.lastName);
// console.log(john.family);


/////loops///

//count 0 -9
for (var i = 0; i <= 20; i+= 3) {
  console.log(i);
}

//i = 0, 0 < 10 true,log i to console, i++
//i = 1, 1, 10 true

const OllieC =['Ollie','Cook', 1970, ' professional wrestler','blue','star wars'];

for ( var i = 0; i < OllieC.length; i++) {

  console.log(OllieC[i]);
}
//this is the while loop//
var i = 0;
while (i < OllieC.length){

  console.log(OllieC[i]);
  i++;
}


//continue and break//

// const OllieC =['Ollie','Cook', 1970, ' professional pornstar','blue','star wars'];
//
// for ( var i = 0; i < OllieC.length; i++) {
//   if (typeof john[i] !=='string') {
//       continue
//   }
//
//   console.log(OllieC[i]);
//
//
//   looping backwards
//   for (var i = john.length - 1; i >= 0; i--) {
//     console.log(john[i]);
//   }

//Magic Eight Ball//
//Create  a magic eightball program to help you with m aking a decision!


const magicEightBall = function(Answers){


  return Answers[Math.floor(Math.random()*Answers.length)];
}

var Answers =
 ['Yes!',
 'DO IT!!!',
 'Definatley!',
 'Oh HELL YEAH!',
 'You Deserve it!!',
 'Of Course!!',
 'No!!',
 'NO WAY!!',
 'Oh HELL NO!!',
 'Are you Crazy or just Stupid??',
 'What are you thinking:',
 'Dont even think about it!!',
 'No answer to give',
 'Try again later',
 'The answer is unclear',
 'Let me put it this way: NO!!',
 'Dont be Stupid!!!',
 'I got nothing...',
 'The answer is within you']

console.log(magicEightBall(Answers));
