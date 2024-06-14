//1

function welcomeMsg(name) {
  return "Welcome " + name;
}

// TODO: implement welcomeMsg function

console.log(welcomeMsg("Jane"));
// Welcome Jane!

console.log(welcomeMsg("Marc"));
// Welcome Marc!

// 2

function calcGrossPrice(integerN, floatN) {
  return integerN * (1 + floatN);
}

// TODO: implement calcGrossPrice function

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4

// 3

// TODO: Implement the addPositive function

function addPositive(num1, num2) {
  let posNum1;
  let posNum2;

  if (num1 <= 0) {
    posNum1 = num1 * -1;
  } else {
    posNum1 = num1;
  }

  if (num2 <= 0) {
    posNum2 = num2 * -1;
  } else {
    posNum2 = num2;
  }

  return posNum1 + posNum2;
}

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9
