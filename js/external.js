"use strict"


console.log("Hello from external JavaScript");

// alert("Welcome to my Website!");
//
// let userName = prompt("Hello, what is your name?")
// let userColor = prompt("Hello " + userName + ", what is your favorite color?");
// alert("Wow no way, " + userColor + " is my favorite color too!");

// let sample = "Hello Codeup";
// //Using .length to measure a variables length
// console.log(sample + " has " + sample.length + " characters and white space included throughout the statement.");
// //Using .toLowerCase to convert a string to all lower case
// console.log(sample + " converted to all lower case is " + sample.toLowerCase());
// //Using concatenation to add to a variable
// sample = sample + " Students";
// console.log("Via concatenation we changed 'Hello Codeup' to " + sample);
// //Using .replace to replace a specified word inside a variable
// console.log("Using the .replace method we are able to convert " + sample + " to " + sample.replace("Students", "Class"));
// //Using .indexOf to find the index value of a specified letter
// console.log(sample.indexOf("c"));
// console.log(sample.indexOf("C"));
// //Using .substring to take a specific string out of the variable
// console.log(sample.substring(6, 12));

// let movie4Rent = prompt("Hello, what movie would you like to rent?");
// let days4Rent = prompt("How many days would you like to rent " + movie4Rent + " for?");
// let moviePrice = days4Rent * 3;
// let totalPrice = alert("You chose to rent " + movie4Rent + " for a total of " + days4Rent + " days. The total price for rental will be $" + moviePrice);
// function pleaseConfirm() {
//     let confirmation = confirm("Please confirm that the movie you chose to rent is " + movie4Rent + ".");
//     if (confirmation === true) {
//         alert("Thank you for renting with Matt's Movies. Enjoy your movie!");
//     } else
//         return alert("Please refresh the page and try again. Thank you!");
// }
// pleaseConfirm()

// let googleHours = prompt("Hello " + userName + ", how many hours did you work for google this week?")
// let amazonHours = prompt("How many hours did you work for amazon this week?")
// let facebookHours = prompt("How many hours did you work for facebook this week?")
// let totalHours = (Number(googleHours)) + (Number(amazonHours)) + (Number(facebookHours))
// let combinedPay = (googleHours * 400) + (amazonHours * 380) + (facebookHours * 350)
// function totalPay() {
//     if (typeof (totalHours) === "number") {
//         return alert("Your total pay after working " + totalHours + " hours this week is $" + combinedPay)
//     }else
//         return alert("The value you entered was not a number. Please refresh the page and enter the number of hours worked for each company.")
// }
// totalPay()

// alert("Hello " + userName + ", I see you are trying to enroll in a class. I am going to ask you a series of questions to determine whether you are eligible to enroll or not. Please select 'ok' for yes and 'cancel' for no.")
// let classRoom = confirm("Is the class already at maximum capacity?")
// let classSchedule = confirm("Does the schedule of the class interfere with your own schedule?")
// function enrollment() {
//     if (!classSchedule === false) {
//         return alert("I am sorry one of your answers didn't meet the requirements, you will not be able to enroll in the class")
//     }else if (!classRoom === false) {
//         return alert("I am sorry one of your answers didn't meet the requirements, you will not be able to enroll in the class")
//     }else
//         return alert("You are eligible to enroll in the class. Congratulations!")
// }
// enrollment()

let totalItems = confirm("Hello, welcome to Matt's Market! Will you be purchasing more than 2 today?")
let productOffer = confirm("Is the coupon offer still valid?")
let premiumMember = confirm("Are you a premium member here at Matt's Market?")
alert("Based on your responses it is " + (totalItems && productOffer || premiumMember) + " that you qualify for the product offer here at Matt's Market.")