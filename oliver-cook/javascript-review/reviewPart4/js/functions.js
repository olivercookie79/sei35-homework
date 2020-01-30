const myFunction = function(num1, num2) {
  return num1 + num2;
}

function myFunction2(num1, num2) {
  return num1 - num2;
}

const myFunction3 = (num1, num2) => {
  return num1 * num2;
}

const addNumbers = function(num1, num2) {
  return num1 + num2;
}


var result = myFunction(2,3);

console.log(result);

result = myFunction2(3,2);

console.log(result);

result = myFunction3(10, 10);

console.log(result);

console.log(addNumbers(2,3));
