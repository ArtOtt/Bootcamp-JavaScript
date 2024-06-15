// TODO: Implement the oddNumbers function
function oddNumbers(num1, num2) {
  const array = [];
  if (num1 < 0 || num2 < 0) {
    return "only positive numbers";
  }
  for (let i = num1; i < num2; i++) {
    if (i % 2 !== 0) {
      array.push(i);
    }
  }
  return array;
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

// TODO: Implement the charCount function

function charCount(string, letter) {
  let result = "";
  if (letter.length < 2) {
    for (let i = 0; i < string.length; i++) {
      if (string.toLowerCase()[i] == letter.toLowerCase()) {
        result += string[i];
      }
    }
  }
  return result.length;
}

console.log(charCount("heLlo", "L"));
// result should be: 2

console.log(charCount("MAma", "M"));
// result should be: 2

console.log(charCount("ResümEe", "E"));
// result should be: 3
