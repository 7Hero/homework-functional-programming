const input = { a: { b: 1, c: { d: { f: 1, g: 2, h: { l: function(){console.log('Hello World')}} } } } };

const deepClone = (obj) => {
  let clonedObj = {}
  for(let [key,value] of Object.entries(obj)){
    if(typeof value == 'object'){
      let thisObject = deepClone(value)
      clonedObj[key] = thisObject;
    }else{
      clonedObj[key] = value
    }
  }
  return clonedObj;
}

const clonedObject = deepClone(input);
clonedObject.a.b = 3;
console.log(input, clonedObject)
clonedObject.a = 4;
console.log(input, clonedObject)

