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
  // Aceeasi ca la every cu reduce nu are sens.
  for (let idx = 0; idx < this.length; idx++) {
    if (callback(this[idx], idx)) {
      return true;
    }
  }
  return false;
}
Array.prototype.find = function(callback) {
  //La fel nu are sens cu reduce 
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

const filterOriginal = input.filter((el, idx) => el > 3);
const filter = input.customFilter((el, idx) => el > 3);

const outputOriginal = input.map((el, idx) => el + 1);
const output = input.customMap((el, idx) => el + 1);

const everyOriginal = input.every((el) => el > 0);
const every = input.customEvery((el) => el > 0);

console.log("customMap", output);
console.log("map", outputOriginal);
console.log("customFilter", filter);
console.log("filter", filterOriginal);
console.log("customEvery", every);
console.log("every", everyOriginal);
