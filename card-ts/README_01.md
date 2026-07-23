TS--- online

//  add two number 
function addFun(a:number,b:number){
    return a+b
}



let result = addFun(10,20)


let age = 20 
age = "twenty Five"




interface UserPros {
    username:string,
    age:number,
    isAdmin:boolean
}

let user: UserPros = {
  username: "mohan lal",
  age: 45,
  isAdmin: false
};




function greetUsers(name, age){
    return `Hello ${name} and you are ${age} old`
}


let result1 = greetUsers("Mohal Lal", 40)
console.log(result1)


let name2 =  "mohan Lal"
name2 = 434



// 1. Add type annotations to the parameters and the return type
function calculateDiscount(
  price:number,
  discountPercentage: number,
): number{
  const discountAmount = (price * discountPercentage) / 100;
  return price - discountAmount;
}

// 2. Testing your work (uncomment these to test once typed):
// This should work perfectly:
const total = calculateDiscount(100, 20); // Should equal 80

// This should show a TypeScript error in your editor:
const brokenTotal = calculateDiscount("100", "20"); // error




function greet(name:string,age?:number){
    if(age) `Hello ${name} and you are ${age} old`
    else  `Hello ${name}`
}

let result3 = greet("mohan")
let result4 = greet("pooja",24)



// Fill in the type annotations, optional marker (?), and default value (=)
function buildUserSummary(
  name:string,
  city?:string,
  role: string = "Guest"
): string {
  if (city) {
    return `${name} is a ${role} living in ${city}.`;
  }
  return `${name} is a ${role}.`;
}

// --- Testing Cases ---

// 1. Testing with only the required name
console.log(buildUserSummary("Mohan")); 
// Should output: "Mohan is a Guest."

// 2. Testing with name and city
console.log(buildUserSummary("Amit", "Bengaluru")); 
// Should output: "Amit is a Guest living in Bengaluru."

// 3. Testing with all three values provided
console.log(buildUserSummary("Sara", "Mumbai", "Admin")); 
// Should output: "Sara is an Admin living in Mumbai."


import React from 'react';

interface ButtonProps {
  label: string;
  // 1. Turn 'variant' into a Union Type that only allows: "primary" OR "secondary" OR "danger"
  variant:  "primary" | "secondary"  |  "danger"
}

function CustomButton({ label, variant }: ButtonProps) {
  // We use the variant string to apply a CSS class name dynamically
  return (
    <button className={`btn btn-${variant}`}>
      {label}
    </button>
  );
}




// object 

// interface CarProps{
//     price:number,
//     model:string,
//     name:string
// }

// const cardata : CarProps{
// price:4534,

// }


// function carModel({model,price,name}:{model:string,price:number,name:string}){
//     return  `${model} - ${price} - ${name}`
// }


 interface CarProps{
    model:string,
    price:number,
    name:string
 }
// function carModel(car:CarProps){
//     return  `${car.model} - ${car.price} - ${car.name}`
// }


function carModel(car:{model:string,price:number,name:string}){
    return  `${car.model} - ${car.price} - ${car.name}`
}

let result5 = carModel({model:"xy",price:544,name:"Tesla"})
console.log(result5)