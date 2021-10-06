// var userName = 'umar';

// function generate() {
// 	var userName = 'umarjon';
// }

// console.log(userName);

// var userName = 'Umar'; // Declaration
// userName = 'Umarjon'; // Re-assignment
// var userName = 'Umarbek'; // Re-declare

// let userName = 'Umar'; // Declaration
// userName = 'Umarjon'; // Re-assignment
// let userName = 'Umarbek'; // Re-declare Mumkin emas

// const userName = 'Umar'; // Declaration
// userName = 'Umarjon'; // Re-assignment Mumkin emas
// const userName = 'Umarjon'; // Re-declaration Mumkin emas

// username = null;
// console.log(username);

// var username = 'ff';

// console.log(username);

// const arr = ['Dog', 'Cat', 'Squirrel'];

// arr.push('horse');

// console.log(arr);

// const arr = [];

// arr.push('hourse', 'cat');

// console.log(arr);

// let userName = 'Islom';

// Block
// {
// 	var userName = 'IslomBek';
// }

// console.log(userName);

// let userName = 'Islombek';

// function sayHello() {
// 	let userName = 'Islom';
// 	console.log(userName);
// }

// sayHello();

// let greet = 'Hello 1';

// {
// 	let greet = 'Hello 2';

// 	console.log(greet);
// }

// let greet = 'Hello 3';

// console.log(greet);

// HIGHER ORDER FUNCTIONS
const animals = [
	{
		name: 'Charlie',
		species: 'dog',
		weight: 4,
	},
	{
		name: 'Puth',
		species: 'dog',
		weight: 4.3,
	},
	{
		name: 'Trump',
		species: 'cat',
		weight: 5.5,
	},
	{
		name: 'Alex',
		species: 'squirell',
		weight: 3,
	},
	{
		name: 'Morgan',
		species: 'cat',
		weight: 3.9,
	},
];

// ['Charlie', 'Puth', 'Trump', 'Alex', 'Morgan'];

// map
// const result = animals.map(function (animal) {
// 	return animal.name;
// });

// const result = animals.map((e) => e.name + ' is ' + e.species);

// const result = [];
// for (let i = 0; i < animals.length; i++) {
// 	result.push(animals[i].name);
// }

// console.log(result);

// filter

// const result = animals.filter((a) => a.species === 'cat');

// console.log(result);
 
// const result = animals.filter((a) => a.weight >= 4);

// console.log(result);

// const result = [];

// for (let i = 0; i < animal.length; i++) {
// 	if (animals[i].species === 'cat') {
// 		result.push(animals[i]);
// 	}
// }

// console.log(result);
