// input -> [{name:'Vasea',age:18},{name:'Alina',age:23},{name:'Petrea',age:17}]

let input = [
  { name: "Vasea", age: 18 },
  { name: "Alina", age: 23 },
  { name: "Petrea", age: 17 },
];

//1.1.1 Sort by name 
const sortByName = (arr, type = 'asc') => {
  let result = [...arr], nr = 1;

  if(type == 'asc') nr = 1
  else if(type =='dsc') nr = -1
  else throw 'Type should be asc (Ascending) or dsc (Descending).'

  return result.sort((a,b) => a.name > b.name ? nr : -nr )
}


//1.1.2 Sort by age
const sortByAge = (arr,type) => {
  let result = [...arr], nr = 1;

  if(type == 'asc') nr = 1
  else if(type =='dsc') nr = -1
  else throw 'Type should be asc (Ascending) or dsc (Descending).'

  return result.sort((a,b) => a.age > b.age ? nr : -nr )
}

//1.1.3 Sort by key name
const sortByKeyName = (arr, keyName, type) => {
  let result = [...arr], nr = 1;
  
  if(!Object.keys(arr[0]).includes(keyName)){
    throw 'No such key in our object.'
  }
  if(type == 'asc') nr = 1
  else if(type =='dsc') nr = -1
  else throw 'Type should be asc (Ascending) or dsc (Descending).'

  return result.sort((a,b) => a[keyName] > b[keyName] ? nr : -nr )
}

const sortedArray1 = sortByName(input,'asc')
const sortedArray2 = sortByAge(input,'dsc')
const sortedArray3 = sortByKeyName(input,'age','asc')

console.log('Sorted by Name');
console.table(sortedArray1)

console.log('Sorted by Age');
console.table(sortedArray2)

console.log('Sorted array');
console.table(sortedArray3);