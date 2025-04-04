/*
Write a function for the below requirement 

Question: 
Input        dataObject={"cat":"Meow","dog": "Bark","cow": "Maa"}
Input is Key : Val,  Pair 
---------------
Expected Output : { "CAT":"Meow","DOG": "Bark","COW": "Maa"  }
Key - Turned as Uppercase  / Capital Letters 
Val - retain the Same 

*/

const dataObject = { cat: "Meow", dog: "Bark", cow: "Maa" };

function upperCase() {
  let final = {};
  for (let [key, value] of Object.entries(dataObject))
    final[key.toUpperCase()] = value;
  return final;
}

console.log(upperCase());
