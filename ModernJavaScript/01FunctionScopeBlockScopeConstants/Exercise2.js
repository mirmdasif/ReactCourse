'use strict';

var guessMe1 = 1;
let guessMe2 = 2;

{
  try {
    let guessMe2 = 3;
    console.log(guessMe1, guessMe2);
  } catch (e) {
      console.log("Error");
  }
  let guessMe2 = 3;
  console.log(guessMe1, guessMe2);
}

console.log(guessMe1, guessMe2);


const print_func = () => {
  var guessMe1 = 5;
  console.log(guessMe1);
  let guessMe2 = 6;
  console.log(guessMe1, guessMe2);
}
print_func();
console.log(guessMe1, guessMe2);
