// 1. Table 

// var userInput = +prompt("Enter Any Number To Print Its Table");
// for (var c = 1; c <= 10; c++) {
//    var res = userInput * c;
//     console.log(userInput + " * " + c + " = " +(res));
// }

// 2. ARRAY ELEMENTS KA SUM PRINT KARE


//  var sum = 0;
//  for (var c =0; c < 5; c++) {
//   var  userInput = +prompt("Enter 5 No's");
//     sum = sum + userInput[c];
//  }
//  console.log(sum);

// 3. ARRAY KA SUB SE BARA NUMBER PRINT KARE

// var userInput;
// for (var c = 0; c < 5; c++) {
//     userInput = +prompt("ENTER 5 NO'S");
// }
//   var lar = userInput[0];
//   for (c = 0; c < 5; c++) {
//   if (userInput[c] > lar ) {
//     lar = userInput[c];
//   }
//   console.log(lar);
//   }

// 4. USER SE STRING LE AND USKO ULTA PRINT KARE

// for (var c = 1; c <= 6; c++) {
// var string = prompt("Enter String ");
// }

// 5 . FACTORIAL DESCRIPTION:

var userInput = +prompt("Enter Any Number To Print Its Factorial");
var factorial = 1;
  for (var c = userInput; c >= 1; c++) {
     factorial = factorial * userInput;
  }
  console.log(factorial);