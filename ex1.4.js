// Sort array with even numbers ascending and odd numbers descending

const arr = new Array(10).fill(0).map((el) => Math.ceil(Math.random() * 10));

const sortArray = (arr, even = [], odd = []) => {
  arr.forEach((el) => (el % 2 == 0 ? even.push(el) : odd.push(el)));
  return [...even.sort((a, b) => a - b), ...odd.sort((a, b) => b - a)];
};

console.log(sortArray(arr));
