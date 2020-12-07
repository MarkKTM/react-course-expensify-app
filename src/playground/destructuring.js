//
// Object Restructuring
//

// const person = {
//   name: 'Mark',
//   age: 48,
//   location: {
//     city: 'Santa Maria',
//     temp: 92
//   }
// }

// const { name = 'Anonymous', age } = person;
// //const name = person.name;
// //const age = person.age;

// console.log(`${name} is ${age}.`);

// //Working with nested objects 'location'
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { title: bookTitle = 'Unknown'} = book;
// const { name: publisherName = 'Self-Published' } = book.publisher;


// console.log('The title of the book is "' + bookTitle + '" and the publisher is ' + publisherName);


//
// Array Restructuring
//

const address = ['1299 South Juniper Street', 'Philidelphia', 'Pennsylvania', '15432'];
//we're grabbing each item from the array in order. 
const [street, city, state, zip] = address;

//if we don't need all items, say just city and state we could use
//leave the comma to take the space for the first item
//add "= 'New York" as the default
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}`);

// Array Restructuring Challenge
const item = ['Coffee (hot)', '$2.00', '$2.50', '2.75'];
const [hotcoffee, , medium] = item;
console.log(`A medium ${hotcoffee} costs ${medium}`);