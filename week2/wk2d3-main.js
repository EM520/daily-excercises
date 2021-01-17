// Q1
// assign "lastItem" to be the last indexed item in the array (arr)
let arr = [2, 4, 6, 8, 10];
let lastItem;
lastItem = arr[arr.length-1]

console.assert(lastItem === 10)
// Q2
// Write a function called `isLongerThanThree` that takes one
// parameter (an array) checks if there are more than three items
// in said array then returns true if it does, false if it
// does not
function isLongerThanThree(arr1){
    if (arr1.length > 3 ){
        return true 
    }else{
        return false
    }
}
console.assert(isLongerThanThree([2, 4, 1]) === false);
console.assert(isLongerThanThree([2, 4]) === false);
console.assert(isLongerThanThree([2, 4, 1, 5, 8]) === true);

// Q3
// Write a function called `colorIsRed` that takes one
// parameter (an object), checks if the key of "color" in that
// object is "red" then returns true if it is, false if it does not

function colorIsRed(object){
    if (object.color=="red"){
        return true
    }else{
        return false
    }
}
console.assert(
  colorIsRed({ make: "Toyota", color: "red", year: 2019, model: "Corolla" }) ===
    true
);
console.assert(
  colorIsRed({ make: "Ford", color: "silver", year: 2020, model: "Fiesta" }) ===
    false
);
console.assert(
  colorIsRed({ make: "Jeep", color: "red", year: 2008, model: "Cherokee" }) ===
    true
);
// Q4
// Write a function called `olderThan2010` that takes one
// parameter (an object), checks if the key of "year" in that
// object is less than 2010 then returns true if it is, false if it does not
function olderThan2010(object){
    if (object.year<2010){
        return true
    }else{
        return false
    }
}

console.assert(
  olderThan2010({
    make: "Toyota",
    color: "red",
    year: 2019,
    model: "Corolla",
  }) === false
);
console.assert(
  olderThan2010({
    make: "Ford",
    color: "silver",
    year: 2020,
    model: "Fiesta",
  }) === false
);
console.assert(
  olderThan2010({
    make: "Jeep",
    color: "red",
    year: 2008,
    model: "Cherokee",
  }) === true
);
// Q5
// Write a function called `isVowel` that takes one
// parameter (a string), checks if it is a vowel then returns
// true if it is, false if it does not

function isVowel(str){
    let vowel='aeiou'
    if (vowel.includes(str)){
        return true
    }else{
        return false
    }
}
console.assert(isVowel("a") === true);
console.assert(isVowel("t") === false);
console.assert(isVowel("b") === false);
// Q6
// Write a function called `hideString` that takes one
// parameter (a string), where it replaces each character
// in that string with an "x" then returns it
function hideString(str){
   let newStr = ''
    for (let i = 0 ; i< str.length; i++){
         newStr += "x"
    }
    return newStr
}
console.assert(hideString("password1") === "xxxxxxxxx");
console.assert(hideString("1234") === "xxxx");
