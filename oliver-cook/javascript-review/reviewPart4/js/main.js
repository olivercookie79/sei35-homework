// HTML BUTTON VERSION
// word the players dont see
// const secretWord = ["f","o","g"];
// const guessLetters= ["f","a","b"];
//
// //input field for guessing letter
// const guessedLetter  = document.querySelector("#guessedLetter");
// //click button to submit data
// const guessBtn = document.querySelector("#guessBtn");
//
// // shorthand function to use inside click event
// function checkLetter(letter) {
//   for(let i = 0; i < secretWord.length; i++) {
//     if(letter === secretWord[i]) {
//       //match!!
//       console.log("letters match!");
//       // replace blank dash in guessLetter's index to guessed letter
//       guessLetters[i] = letter;
//     } else {
//       console.log("letters do not match!");
//     }
//   }
// }
//
// // when button is clicked - click event
// guessBtn.addEventListener("click", () => {
//    // call function
//    checkLetter(guessedLetter);
//    console.log(guessLetters);
// });


//my non Button version


const secretWord = ["f","o","g"];
const guessLetters= ["f","o","g"];

//input field for guessing letter
// const guessedLetter  = document.querySelector("#guessedLetter");
//click button to submit data
// const guessBtn = document.querySelector("#guessBtn");

// shorthand function to use inside click event
function checkLetter(letter) {
  for(let i = 0; i < secretWord.length; i++) {
    if(letter == secretWord[i]) {
      //match!!
      console.log("letters match!");
      // replace blank dash in guessLetter's index to guessed letter
      guessLetters[i] = letter;
    } else {
      console.log("letters do not match!");
    }
  }
}

// when button is clicked - click event
// guessBtn.addEventListener("click", () => {
   // call function
//    checkLetter("f");
//    checkLetter("o");
//    checkLetter("g");
//
//    console.log(guessLetters);
//
// if ("letters match" === "true"){
// console.log("good work!");
//
// }
// } else {
//
// }
  ///

  // function checkMyAccount ( ){

let AccBal = 1000;

if (AccBal >= 10){
  console.log("You are in Credit");
} else { (AccBal < 0)
  console.log("you are broke!");
}



const mathyMaths = function(a, b){

const myMathsSucks =function(*2);
}
console.log(mathyMaths);

a = 5
b = 10

// const addNumbers = function ( num1, num2 ) {
//   result = num1 + num2;
//   return result;
// }
// const sum = addNumbers(5, 2);
// ​
// ​sum;
