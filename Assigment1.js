
// I would switch it to let because the value of fullName is changing. Otherwise if i used const it would cause an error.
let fullName = "John Doe";
fullName = "Jane Doe";
console.log(fullName);

// I would switch it to let since there can be changes to the age variable and its more flexible than const. If I used const the age variable would not be able to change.
let age = 30;
if (age > 18) {
    // I would use let here because this variable only exists inside the block. If i used const it could work if we never reassign adult, but let is fine for block scoped temporary values.
    // Using var would leak the variable outside the block, which is unsafe.
let adult = true;
console.log(adult);
}

// here any of the two would work but its commom practice to use const for arrays that will not be reassigned.
const loopArray = [];
// I would switch it to let because the loop variable i is changing with each iteration of the loop. Using var would make i function scoped instead of block scoped, which could lead to unexpected behavior.
// Using const would not work here since i is reassigned in each iteration.
for (let i = 0; i < 5; i++) {
loopArray.push(i);
}
console.log(loopArray);


// I would switch it to conts because I know that if its all capitals it means its a constant value that should not be changed.
const MAXIMUM = 100;
// MAXIMUM = 200; // This line would cause an error if uncommented
// Nothing would happen if i used let but it is better to use const for values that should not change.


// I would switch it to let because the colors array is being reassigned to a new array. Using const here would cause an error.
let colors = ["Red", "Green", "Blue"];
colors = ["Yellow", "Pink", "Purple"];
console.log(colors);