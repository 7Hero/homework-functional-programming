Array.prototype.customMap = function (callback) {
  return this.reduce((prev, curr, idx) => [...prev, callback(curr, idx)], []);
};

Array.prototype.customFilter = function (callback) {
  return this.reduce((prev, curr, idx) => callback(curr, idx) ? [...prev, curr] : prev, []);
};

Array.prototype.customEvery = function (callback) {
  /* Aici cu reduce nu ii foarte optimizat deoarece eu vreau sa ies din reduce la primul false
  let result = true;
  this.reduce( (prev, curr, idx) => {
    if(!callback(curr,idx)){
      result = false
    }
  });
  return result;
  */

  // Optimizat
  for (let idx = 0; idx < this.length; idx++) {
    if (!callback(this[idx], idx)) {
      return false;
    }
  }
  return true;
};

Array.prototype.customSome = function(callback) {
  // Aceeasi ca la every cu Array.reduce nu are sens.
  for (let idx = 0; idx < this.length; idx++) {
    if (callback(this[idx], idx)) {
      return true;
    }
  }
  return false;
}
Array.prototype.customFind = function(callback) {
  //La fel nu are sens cu Array.reduce 
  for (let idx = 0; idx < this.length; idx++) {
    if (callback(this[idx], idx)) {
      return this[idx]
    }
  }
  return false;
}

Array.prototype.customIndexOf = function(searchElement, fromIndex) {
  //N-are sens cu reduce
  for (let idx = fromIndex; idx < this.length; idx++) {
    if (searchElement == this[idx]) {
      return idx
    }
  }
  return -1
}


let input = [1, 2, 3, 4, 5];

const filterOriginal = input.filter((el, idx) => el > 3); // returns a new array with the elements that satisfies the condition.
const filter = input.customFilter((el, idx) => el > 3);

const outputOriginal = input.map((el, idx) => el + 1); // return new array with the modified elements.
const output = input.customMap((el, idx) => el + 1);

const everyOriginal = input.every((el) => el > 0); // returns true if every element satisfies the condition, false otherwise
const every = input.customEvery((el) => el > 0);

const someOriginal = input.some((el) => el == 5); // returns true if some element satisfies the condition, false otherwise
const some = input.customSome((el) => el == 5); // expected 5

const findOriginal = input.find((el) => el == 4); // returns the first element that satisify the condition
const find = input.customFind((el) => el == 4); // expected 4

const indexOfOriginal = input.indexOf(4,2); // returns the index of the specified element, -1 if no such element exists
const indexOf = input.customIndexOf(4,2);  // expected 3

console.log("customMap", output);
console.log("map", outputOriginal);
console.log('')
console.log("customFilter", filter);
console.log("filter", filterOriginal);
console.log('')
console.log("customEvery", every);
console.log("every", everyOriginal);
console.log('')
console.log("customSome", some);
console.log("some", someOriginal);
console.log('')
console.log("customFind", find);
console.log("find", findOriginal);
console.log('')
console.log("customIndexOf", indexOf);
console.log("indexOf", indexOfOriginal);
// For .every(), .some(), .find(), .indexOf() doesn't make sens because I want to exit early from the function.
// .every() if one element doesn't satisfy the condition I want to return before the end of array.
// .some() if one element satisfy the condition I want to return before the end of array.
// .find() If one element satisfies the condition I want to return the element before the end of array.
