// console.log('Hello again');

// var book ="Dracula";
// var movie;
// console.log(book);
// console.log(movie);
// movie = "Interview with a Vampire";
// console.log(movie);

// var count = "3";
// var num = "2";
// console.log(count + num);
// console.log(5 + 8);
// console.log("5" + "8");
// console.log("5" + 8);
// console.log(5 + "8");

// var firstName = "Dan";
// var lastName = "Taylor";

// console.log(firstName + " " + lastName);

// var cars = ["Subaru", "Audi", "Volkswagon"];
// console.log("The third car in the list is " + cars[2]);
// cars.push("Chevy");
// cars.push("Ford");
// cars.push("Honda");
// cars.push("Toyota");
// cars.push("Fiat");
// cars.push("Buick");
// cars.push("Jeep");
// console.log(cars.length);
// //["Subaru", "Audi", "Volkswagon", "Chevy", "Ford", "Honda", "Toyota", "Fiat", "Buick", "Jeep"]
// console.log(cars);
// console.log(cars[cars.length - 1]);
// cars.pop();
// console.log(cars.length);
// console.log(cars[cars.length - 1]);
// console.log(cars);
// cars.splice(2, 3);
// console.log(cars);
// console.log(cars.length);
// var student = {
//     firstName: "Henry",
//     lastName: "Jackson",
//     id: 12345,
//     courses: [
//         {
//             class: "Full-Stack Jave",
//             instructor: {
//                 firstName: "Steve",
//                 lastName: "Wozniak"
//             },
//             gradePercentage: 97
//         },
//         {
//             class: "Calculus",
//             instructor: {
//                 firstName: "Bill",
//                 lastName: "Gates"
//             },
//             gradePercentage: 86
//         }
//     ]
// }

// console.log("My name is " + student.firstName + ' ' + student.lastName + ', and I am taking ' + student.courses.length + ' courses.');
// console.log("My first course is " + student.courses[0].class + ', taught by ' + student.courses[0].instructor.firstName + ' ' + student.courses[0].instructor.lastName + '.'); 
// console.log("I am getting a " + student.courses[0].gradePercentage + ' in ' + student.courses[0].class + '.');

// var zombies = 8;
// if (zombies > 10) {
//     console.log('AAAAAAAAAAAAAAARRRRGGG! ZOMBIES!!');
// } else if (zombies > 5) {
//     console.log("Gotta stay away from those zombies.");
// } else {
//     console.log('Not a lot of zombies today');
// }

// var apples = 15;
// if (apples > 3) {
//     console.log("Let's make tarts!")
// } else if (apples > 10) {
//     console.log('Let us make a pie! We can use the "Betty Crocker" cookbook!')
// }

// /////////////////////////////////////////////
// Javascript assignment
// 1.
var userName;
userName = 'Mark';
var admin;
admin = 'Bob';
var firstNumber;
firstNumber = 14;
// 2.
var driver = 'Jerry'
var pitBoss = 'Hank'
var carNumber = 23;
//3.
var company = {
    name: 'ABC Company',
    address: {
        streetAddress: '123 South St.',
        city: 'Omaha',
        state: 'NE',
        zip: '68137'
    },
    phoneNumber: '555-123-4567',
    employeeCount: 25
}
// 4.
console.log("The name of the company is " + company.name + ". It is located at " + 
company.address.streetAddress + " " + company.address.city + ", " + company.address.state + 
" " + company.address.zip + " and its phone number is " + company.phoneNumber + ". The company has " +
company.employeeCount + " employess.");

// 5.
var food = ["Bread", "Ham", "Cheese", "Pickles", "Mustard"];
food.pop();
food.push("Onions", "Chicken", "Turkey");
food.splice(1, 4);
console.log(food);
// 6.
var score = 70;
if (score === 100) {
    console.log("You aced it!");
}
else if (score > 69) {
    console.log("You passed!");
} else console.log("I'm sorry, you didn't pass.");