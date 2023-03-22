'use strict';

// // strict mode
// let hasDriversLicense = false;
// const passTest = true;
//
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive')

// // Functions
// function logger() {
//     console.log('My name is Jonas');
// }
//
// logger();

// // Arrow function
//
// // Simple function
// const calcAge3 = birthDay => 2037 - birthDay;
// const age3 = calcAge3(1991);
// console.log(age3);
//
// //function with extra calculation
// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear
//     const retirement = 65 - age;
//     return retirement;
// };
// console.log(yearsUntilRetirement(1991));
//
// // with double parameters
// const yearsUntilRetirement2 = (birthYear, firstName) => {
//     const age = 2037 - birthYear
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement2(1991, 'Jonas'));

// // Coding Challenge 1
//
// const calcAverage = (first, second, third) => (first + second + third) / 3;
// const averageDolphins = calcAverage(85, 54, 41);
// const averageKoalas = calcAverage(23, 34, 27);
//
// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}).`);
//     } else if (avgDolphins * 2 <= avgKoalas) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         console.log('No theam wins.')
//     }
// }
//
// checkWinner(averageDolphins, averageKoalas);

// // Arrays
// const friends = ['Michael', 'Steve', 'Peter'];
// const friends1 = new Array('a', 'b', 'c');
//
// console.log(friends);
// console.log(friends[1]);

// // Basic array operations
// const friends = ['Michael', 'Steve', 'Peter'];
// const newLength = friends.push('Jay');
// console.log(friends, newLength);
//
// friends.unshift('John');
// console.log(friends);
//
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);
//
// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);
//
// console.log(friends.indexOf('Steve'));
// console.log(friends.indexOf('Not in array we weill get -1'))
//
// console.log(friends);
// console.log(friends.includes('Peter'), friends.includes('not in array'))

// // Coding Challenge 2
// function calcTip(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
//
// const bills = [125, 555, 44];
//
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
//
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// // Objects
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Johansen',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steve',],
// }
//
// console.log(jonas)
//
// // dot notation
// console.log(jonas.firstName);
//
// // bracket notation
// console.log(jonas['firstName'])
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
//
// jonas.location = 'Portugal';
// jonas['height'] = '185'
// console.log(jonas);

// // Object Methods
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Johansen',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steve',],
//     hasDrivingLicense: true,
//
//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old teacher, and he has ${this.hasDrivingLicense ? 'a' : 'no'} driver's license`
//     },
// };
//
//
// // console.log(jonas.calcAge());
// // console.log(jonas.age);
//
// console.log(jonas.getSummary());

// // Coding Challenge 3
// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     },
// };
//
// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     },
// };
//
// mark.calcBMI();
// john.calcBMI();
//
// if (mark.BMI > john.BMI) {
//     console.log(`${mark.firstName}'s BMI (${mark.BMI}) is higher than John (${john.BMI})`);
// } else if (mark.BMI < john.BMI) {
//     console.log(`${john.firstName}'s BMI (${john.BMI}) is higher than Mark (${mark.BMI})`)
// }

// // Loops
// for (let rep = 1; rep <= 3; rep++) {
//     console.log(`Repetition number ${rep}`);
// }
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];
//
// for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i]);
// }

// // while loops
// let rep = 1;
// while (rep <= 10) {
//     console.log(rep);
//     rep++;
// }
//
// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice)
//
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
// }

// // Coding challenge 4
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
//
// function calcTip(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
//
// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(bills[i] + tips[i]);
// }
// console.log(tips);
// console.log(totals);
