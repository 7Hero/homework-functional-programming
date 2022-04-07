const input = { a: { b: [1,2,3,4], c: { d: { f: 1, g: 2, h: { l: function(){console.log('Vasea')}} } } } };

const deepClone = (obj) => {
  let clonedObj = {}
  //array tot ii object, fara check-ul asta b din input -> { 0:1, 1:2, 2:3, 3:4} noi avem nevoie de b: [1,2,3,4];
  if (Array.isArray(obj)) {
    return obj.map((value) =>
      typeof value === "object" ? deepClone(value) : value
    );
  }
  for(let [key,value] of Object.entries(obj)){
    //null tot ii object
    typeof value == 'object' && value != null ? clonedObj[key] = deepClone(value) : clonedObj[key] = value;
  }
  return clonedObj;
}

const clonedObject = deepClone(input);

clonedObject.a.b[1] = 3;
console.log(input, clonedObject)

// --------------------------------------------------------------------------------------------------------------------------------------------------
// linia 6  
// if(typeof value == 'object'){ 
//   let thisObject = deepClone(value) -> imi intoarce obiectul clonat. primul return o sa fie {l: function(){} } la clonedObj.h = {l: function(){} }
//   clonedObj[key] = thisObject;                                                                                    clonedObj.f = value, face in else
// }else{                                                                                                            clonedObj.g = value, face tot in else.
//   clonedObj[key] = value               apoi cand termin for-ul o sa dau return la { f:value, g:value, h: {l:function(){}}} si tot asa. pana dau return
// }                                      la un obiect clonat exact ca si obiectul original.

const input1 = {
  a: {
    b: [1, 2, 3, 4],
    c: {
      d: {
        f: 1,
        g: 2,
        h: {
          l: function () {
            console.log("Vasea");
          }
        }
      }
    }
  }
};
// deepClone ver.2
const deepClone = (obj) => {
  let clonedObj = {};
  // Cumva array tot ii object.
  if (Array.isArray(obj)) {
    return obj.map((value) =>
      typeof value === "object" ? deepClone(value) : value
    );
  }
  for (let [key, value] of Object.entries(obj)) {
    // null tot cumva ii object.
    typeof value === "object" && value != null
      ? (clonedObj[key] = deepClone(value))
      : (clonedObj[key] = value);
  }
  return clonedObj;
};

const clonedObject1 = deepClone(input);

console.log(input1, clonedObject1);
clonedObject.a = 4;
console.log(input, clonedObject);
