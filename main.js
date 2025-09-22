/////// Variables Section ///////
const myName = "Katie Feng"
const fruits = ['apples', 'bananas', 'blueberries', 'strawberries', 'pineapples'];
const car = [{make:"Toyota", model:"Prius", color:"Silver"},
             {make:"Chevy", model:"Bolt", color:"Blue"},
             {make:"Honda", model:"Civic", color:"White"}];
const today = new Date();
const loggedIn = true;



/////// PART 1 - Variables and Data Types demo///////
var a = 'Test1';
let b = 'Test2';

function testVar(){
  var a = 30;

  if(true){
    var a = 50;
    console.log(a);
  }
  console.log(a);
}

function testLet(){
  let a = 30;

  if(true){
    let a = 50;
    console.log(a);
  }
  console.log(a);
}

// console.log(a);
// console.log(b);
// console.log("Example using var");
testVar();
// console.log("Example using LET");
testLet();
// When you are done with this section you can comment out the console.logs above


//////// PART 2 - template literals////////
const result2Element = document.getElementById('result2');

// Fixed template literal syntax - using backticks instead of quotes
result2Element.innerHTML = `Hello my name is ${myName} and I drive a ${car[0].color} ${car[0].make} ${car[0].model}`;

// Footer Section
const footerElement = document.getElementById("footer");
// Fixed template literal syntax and variable reference
footerElement.innerHTML = `&copy; ${myName} ${today.getFullYear()}`;





//////// PART 3 - Ternary Operator////////
////section 1 - basic if else statement
//if (loggedIn) {
//    const result3Element = document.getElementById('result3');
//    result3Element.innerHTML = "Welcome back!";
//} else {
//  const result3Element = document.getElementById('result3');
//    result3Element.innerHTML = "Please log in";
//}

////Sample code.  You can uncomment this to see how simple a ternaly operator can be
//loggedIn ? alert("welcome back") : alert("please log in");

////section 2 -ternary operator to update the result3Element
const result3Element = document.getElementById('result3');
result3Element.innerHTML = loggedIn ? "Welcome back!" : "Please log in";




//////// PART 4 - Arrow Functions////////
function Greetings(name) {
    return `Hello ${name}!`;
};

console.log(Greetings("Katie"));

//Make a copy of the above function and rename it GreetingsArrow() and then convert function to an arrow function here
const GreetingsArrow = (name) => `Hello ${name}!`;
console.log(GreetingsArrow("Katie"));


//////// PART 5 - Array methods////////
function printFruit() {
  let resultElement = document.getElementById("result5");
  resultElement.textContent = "";

  // Chain filter() and map() together
  fruits
      fruits.filter(fruit => fruit[0] === 'b')
      .map(fruit => {
          let p = document.createElement("p");
          p.textContent = fruit;
          resultElement.appendChild(p);
      })
}


 function clearText() {
    let resultElement = document.getElementById("result5");
    resultElement.textContent = "";
 }


 //////// PART6 - Destructuring////////
 myCar(car[0]);

 function myCar(car) {
     var make = car.make;
     var model = car.model;
     var color = car.color;

     var message = `I drive a ${color} ${make} ${model}`;

     document.getElementById("result6").textContent = message;
 }

//convert the myCar function to use destructuring

myCar(car[0]);

function myCar(car) {
    const { make, model, color } = car;
    const message = `I drive a ${color} ${make} ${model}`;
    document.getElementById("result6").textContent = message;
}



//////// PART 7 - Spread Operator////////

const baseProduct = {
  id: 'PROD-001',
  name: 'Wireless Headphones',
  price: 199.99,
  warranty: '1 year'
};

const holidayPromo = {
  price: 149.99,
  promoText: 'Holiday Special!',
  bundle: 'Free carrying case'
};

// Merge using spread operator and add LastUpdated property (note: capitalized as per instructions)
const currentProduct = {
  ...baseProduct,
  ...holidayPromo,
  LastUpdated: '2023-12-31' // Using the specific date mentioned in instructions
};

// Check the result object in the console:
console.log(currentProduct);

// Use template literal to write the exact message format requested
document.getElementById("result7").textContent = `The ${currentProduct.name} are on sale for ${currentProduct.price} as of ${currentProduct.LastUpdated}`;





 //////// PART 8 - Try Catch////////
 function InputValidation() {
  const message = document.getElementById("part8-p");
  message.innerHTML = "";

  let x = document.getElementById("part8-input").value;

  try {
      if (x === "") {
          throw "Input is EMPTY";
      }

      if (isNaN(x)) {
          throw "Input is NOT A NUMBER";
      }

      const num = Number(x);


      if (num > 15) {
          throw "Input is TOO HIGH";
      }

      if (num < 10) {
          throw "Input is TOO LOW";
      }

      message.innerHTML = "Success";

  } catch(err) {
      message.innerHTML = err;

  } finally {
      console.log("Input validation completed");
  }
}


