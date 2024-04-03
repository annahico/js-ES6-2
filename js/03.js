// operador spread caso 3 duplicar array pero modificando 

const originalArray = [1, 2, 3, 4, 5, 6,];

const newArray = [...originalArray];

originalArray.push(7);

console.log(originalArray);
console.log(newArray);