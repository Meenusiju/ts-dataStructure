//simple numbery array - holds same type of elements with number data type
let numbers: number[] = [1, 2, 3, 4, 5];

console.log("Number at index 3 -", numbers[3]); //4

//simple array - holds same type of elements with string data type
let fruits: string[] = ["apple", "banana", "mango", "orange"];

console.log("Fruit at index 2 -", fruits[2]); //mango

//generic array - holds same type of elements
let fruitsGeneric: Array<string> = ["apple", "banana", "mango", "orange"];

//mixed array - holds different type of elements
let mixedArray: (string | number)[] = [1, "apple", 2, "mango"];

console.log("Mixed array -", mixedArray); //[ 1, 'apple', 2, 'mango' ]

//push an elem into array
mixedArray.push("banana");
console.log("New mixed array after adding elem at last- ", mixedArray); //[1, "apple", 2, "mango", "banana"];

//insert element at first
mixedArray.unshift("kiwi");
console.log("New mixed array after adding elem at first - ", mixedArray); //['kiwi', 1, "apple", 2, "mango", "banana"];

//pop - removes last elem from mixed array
mixedArray.pop();
console.log("New mixed array after removing last elem - ", mixedArray); //['kiwi', 1, "apple", 2, "mango"];

//length
console.log("Length of mixed array -", mixedArray.length); //5

//map - iterate over each element and perform an operation and returns new array
let addNumbers = numbers.map((elem) => {
  return elem + 2;
});
console.log("mapping numbers array", addNumbers); //[ 3, 4, 5, 6, 7 ]

//for each -- iterates over each elem but cannot perform operation or doesnot return new array

let addForeachNumbers = numbers.forEach((elem) => {
  return elem + 2;
});
console.log("looping for each numbers array and return", addForeachNumbers); //undefined

let loopForeachNumbers = numbers.forEach((elem) => {
  return console.log("looping for each numbers array", elem); //1, 2, 3, 4, 5
});

//filter - delete unwanted elements and returns oly what is needed

let filterMixedArray = mixedArray.filter((elem) => {
  return typeof elem === "string"; //returns only string elements from mixed array
});

console.log("Filter mixed array -", filterMixedArray); //['kiwi, 'apple', 'mango']

//reduce - returns a single value after performing an operation on all elements of an array
let sum = numbers.reduce((accumulateValue, currentValue) => {
  console.log(
    "accumulated Value:",
    accumulateValue,
    "currentValue:",
    currentValue
  ); //0 1, 1 2, 3 3, 6 4, 10 5
  return accumulateValue + currentValue;
}, 0);

console.log("Reduced function is : ", sum); //15

//find - returns the first element that satisfies the condition

let findApple = mixedArray.find((elem) => {
  return elem === "apple";
});
console.log("Found apple in mixed array -", findApple); //apple

let cars: string[] = ["BMW", "Audi", "Mercedes", "Toyota", "Ford"];

//slice - returns a new array from the specified index
//slice(start, end) - start is inclusive and end is exclusive
let newCars = cars.slice(1, 3);

console.log("New cars array after slice-", newCars); // [ 'Audi' , 'Mercedes'] - does not modify original array

//splice - removes elements from an array and returns the removed elements along with new elem if specified
//array.splice(index, deleteCount, add elem1, add elem2, add elem3, ...)

console.log("Array before splice -", cars.splice(1, 3, "Honda", "Hyundai")); // [ 'Audi', 'Mercedes', 'Toyota' ]

console.log("Array after splice -", cars); //[ 'BMW', 'Honda', 'Hyundai', 'Ford' ] -modifies original array

console.log("New cars after splice : ", cars.slice(1, 2)); // [ 'Honda' ] - does not modify original array

//insert element at middle of an array
let InsertAudi = cars.splice(2, 0, "Audi");
console.log("Insert Audi at position 2 : ", cars);
//concat - merge two arrays
let bikes: string[] = ["Honda", "Yamaha", "Suzuki"];
let vehicles = cars.concat(bikes);
console.log("vehicles array after concat -", vehicles); // [ 'BMW', 'Honda', 'Hyundai', 'Ford', 'Honda', 'Yamaha', 'Suzuki' ]

//sort - sorts the array
let sortedVehicles = cars.sort();
console.log("Sorted cars array -", sortedVehicles); // [ 'BMW', 'Ford', 'Honda', 'Hyundai' ]

//reverse - reverse the array
let reversedVehicles = cars.reverse();
console.log("Reversed cars array -", reversedVehicles);

//includes - checks if the array has the specified element - returns boolean
let hasHonda = cars.includes("Honda");
console.log("cars array has Honda -", hasHonda); //true

//indexOf - returns the index of the specified element
let indexOfHonda = cars.indexOf("Honda");
console.log("Index of Honda in cars array -", indexOfHonda); //1

//join - converts array to string
let carsString = cars.join(" ");
console.log("Cars array as string -", carsString); //Hyundai Honda Ford BMW

//split - converts string to array
let carsArray = carsString.split(" ");
console.log("Cars string as array -", carsArray);

//Array.from - creates a new array from an array-like object
let arrayLike = {
  0: "apple",
  1: "banana",
  2: "mango",
  length: 3,
};

let fruitsArray = Array.from(arrayLike);
console.log("Fruits array from array-like object -", fruitsArray); // [ 'apple', 'banana', 'mango' ]

//Array.isArray - checks if the given value is an array
let isArray = Array.isArray(fruitsArray);
console.log("Is fruitsArray an array -", isArray); // true

//Array.of - creates a new array with the given elements
let newFruitsArray = Array.of("apple", "banana", "mango");
console.log("New fruits array -", newFruitsArray); // [ 'apple', 'banana', 'mango' ]

//Array.fill - fills the array with the specified value
let emptyArray: string[] = new Array(5); //array of 5 empty items
console.log("Filled array -", emptyArray); // [ <5 empty items> ]
let filledArray = emptyArray.fill("apple"); //fill with 5 apples
console.log("Filled array -", filledArray); // [ 'apple', 'apple', 'apple', 'apple', 'apple' ]

//Array.every - checks if all elements in the array satisfy the condition
let allNumbers = numbers.every((elem) => {
  return elem > 0;
});
console.log("All numbers are greater than 0 -", allNumbers); //true

//Array.some - checks if some of the element in the array satisfies the condition
let someNumbers = numbers.some((elem) => {
  return elem > 3;
});
console.log("Some numbers are greater than 3 -", someNumbers); //true

//Array.flat - flattens the nested arrays,
//flat(any number) specify how deep you want to flatten or use flat(Infinity) flattens all
let nestedArray = [1, 2, [3, 4, [5, 6]]];
let flatArray = nestedArray.flat(2);
console.log("Flattened array -", flatArray); // [ 1, 2, 3, 4, 5, 6 ]

//Array.keys - returns an iterator that contains the keys of the array
let keys = fruits.keys();
for (let key of keys) {
  console.log("Key -", key);
}

//Array.values - returns an iterator that contains the values of the array
let values = fruits.values();
for (let value of values) {
  console.log("Value -", value);
}

//Array.entries - returns key-value pairs of an array
let entries = fruits.entries();
for (let entry of entries) {
  console.log("Entry -", entry);
}

//Array.copyWithin - copies a sequence of elements within the array
let copiedArray = fruits.copyWithin(2, 0, 2); //copy elements from 0 to 2 to index 2
console.log("Copied array -", copiedArray); // [ 'apple', 'banana', 'apple', 'banana' ]

//Array.from with map function
let numbersArray = [1, 2, 3, 4, 5];
let mappedNumbers = Array.from(numbersArray, (elem) => {
  return elem * 2;
});
console.log("Mapped numbers array -", mappedNumbers);

//Array.from with filter function
let filteredNumbers = Array.from(numbersArray, (elem) => {
  return elem > 2;
});

//Set method - removes duplicates from an array
let duplicateArray = [1, 2, 3, 1, 2, 3];
let uniqueArray = new Set(duplicateArray);
console.log("Unique array -", Array.from(uniqueArray)); // [ 1, 2, 3 ]
