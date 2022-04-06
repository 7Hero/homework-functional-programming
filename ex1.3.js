const input = { a: { b: 1, c: { d: { f: 1, g: 2, h: { l: function(){console.log('Vasea')}} } } } };

const deepClone = (obj) => {
  let clonedObj = {}
  for(let [key,value] of Object.entries(obj)){
    typeof value == 'object' ? clonedObj[key] = deepClone(value) : clonedObj[key] = value;
  }
  return clonedObj;
}

const clonedObject = deepClone(input);

clonedObject.a.b = 3;
console.log(input, clonedObject) // input -> { a: { b: 1, c: { d: [Object] } } } clonedObject -> { a: { b: 3, c: { d: [Object] } } } 
clonedObject.a = 4;
console.log(input, clonedObject) 

// --------------------------------------------------------------------------------------------------------------------------------------------------
// linia 6  
// if(typeof value == 'object'){ 
//   let thisObject = deepClone(value) -> imi intoarce obiectul clonat. primul return o sa fie {l: function(){} } la clonedObj.h = {l: function(){} }
//   clonedObj[key] = thisObject;                                                                                    clonedObj.f = value, face in else
// }else{                                                                                                            clonedObj.g = value, face tot in else.
//   clonedObj[key] = value               apoi cand termin for-ul o sa dau return la { f:value, g:value, h: {l:function(){}}} si tot asa. pana dau return
// }                                      la un obiect clonat exact ca si obiectul original.

