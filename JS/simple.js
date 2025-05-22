// for loop
// for (let i = 0; i < 5; i++) {
//     console.log("Iteration:", i);
//   }
  
// while loop
// let i = 0;
// while (i < 5) {
//   console.log("While loop:", i);2  
//   i++;
// }

// do while loop
// let i = 0;
// do {
//   console.log("Do while:", i);
//   i++;kv 
// } while (i < 10);

// for (let num = 0; num <= 100; num++){
//   if(num%2 === 0){
//     console.log("num =",num);
   
//   }
// }

//  let gameNum = 25;

//  let userNum = prompt("Guess the game number :");
//  console.log(userNum);

// let obj = {
//      item: "pen",
//      price: 10,
// };

// console.log("the cost of", obj.item, "is",obj.price,"dollar");
 

// let mark = [97,58,48,49,78,85,65];
// console.log(mark);

// let cities = ["delhi","pune","mumbai","hyderabad","gurgoan"];

// for (let city of cities){
//   console.log(city);
// }

// 

// let  items = [250,485,569,485,159,753,258,452];

// let i = 0;
// for (let val of items){
//   console.log(`value at index#${i} = ${val}`);
//   let offer = val/10;
//   items[i] = items[i] -offer;
//   console.log(`value after offer = ${val})`);
//   i++;

// }

// // Declare an array
// let fruits = ["Apple", "Banana", "Mango"];

// // Add a new fruit using push()
// fruits.push("Orange");

// // Print the updated array
// console.log(fruits);  // Output: ["Apple", "Banana", "Mango", "Orange"]

// // You can push multiple items at once
// fruits.push("Grapes", "Pineapple");
// console.log(fruits);  // Output: ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple"]


//# Array
// let fooditems = ["potato", "apple","litchi","tomoto"];

// fooditems.push("chips","burger","panner");
// console.log(fooditems);
// let deleteditems = fooditems.pop();
// console.log(fooditems);
// // console.log("deleted",deleteditems);
// console.log(fooditems.tpString());
// let company = ["google","microsoft","apple","jio"];
// console.log(company);

let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('enter name of student');

function inputMsg(){
    let name = prompt('enter naame of student');
    namasteBtn.textcontent ='Roll no. 1:'+ name;
}