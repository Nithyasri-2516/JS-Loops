//The for loop is used when you know in advance how many times you want to execute a statement or a block of code.

function loop(value){
    console.log("for-loop")
    for(let i=0;i<value;i++){
        console.log(i)
    }

    console.log("while-loop")
   
    let count = 0;
    while (count < value) {
        console.log(count);
        count++;
    }
console.log("do-while")

let number = 0;
do {
  console.log(` ${number}`);
  number++;
} while (number < value);

console.log("break and continue")

for (let i = 0; i < value; i++) {
    if (i === 5) {
      break; // Exit loop when i is 5
    }
    console.log(i);
  }
  
  for (let i = 0; i < value; i++) {
    if (i % 2 === 0) {
      continue; // Skip even numbers
    }
    console.log(i); // Logs odd numbers
  }

console.log("------------------------------------------")

console.log("for-of:")
const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
  console.log(fruit);
}


console.log("for-in:")
const person = { name: 'Alice', age: 25, city: 'Wonderland' };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}


console.log("forEach: ")
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number);
});
}
loop(10)



