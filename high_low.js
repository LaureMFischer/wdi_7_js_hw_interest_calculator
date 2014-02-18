var input, solution;

input = prompt('Guess a number between one and ten.');
solution = '4';

for(;input !== solution;) {
  if (input > solution) {
    console.log("Too high!");
  }
  else if (input < solution) {
    console.log("Too low!");
  }
  input = prompt("Try again!");
}
console.log("Correct!")

