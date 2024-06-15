// TODO: Implement the removeItem function

const animals = ["Dog", "Cat", "Lion"];

function removeItem(array, number) {
  const copyAnimals = structuredClone(array);
  copyAnimals.splice(-1 + number, 1);
  return copyAnimals;
}

console.log(removeItem(animals, 1));
// result should be: ["Cat", "Lion"]

console.log(animals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

// TODO: Implement the sumOfCharacters function

function sumOfCharacters(array) {
  let store = "";
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "string") {
      store += array[i];
    }
  }
  return store.length;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
