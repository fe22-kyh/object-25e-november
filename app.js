//let fruits = ["Apple", "Orange", "Pear"];

let fruits = [
  {
    name: 'Apple',
    age: 2,
    color: 'red',
    origin: 'spain',
    taste: 'awesome',
  },
  {
    name: 'Orange',
    age: 3,
    color: 'orange',
    origin: 'madagascar',
    taste: 'sour',
  },
  { name: 'Pear' },
];

// let fullname = "Jakob Rolandsson";

// console.log(fullname.split(" "));

// console.log(typeof fullname);
// console.log(typeof fruits);
// console.log(fruits);
// console.log(typeof fruits[0]);
// console.log(fruits[0]);

// console.log("0 - " + fruits[0]["name"])
// console.log("1 - " + fruits[1]["name"])
// console.log("2 - " + fruits[2]["name"])
// console.log();


// for (let index = 0; index < fruits.length; index++) {
//   const fruit = fruits[index];

//   //console.log(index + " - " + fruit.name);
//   console.log(index + " - " + fruit["name"]);
//   console.log(index + " - " + fruit["age"]);
//   console.log();
// }

// const fruitNames = fruits.map(fruit => fruit.name);

// console.log(fruitNames);

// for (const fruit of fruits) { // hämtar värdet för varje element i en lista
//   console.log(fruit);

//   for (const fruitIndex in fruit) { // Hämtar index på objekt
//     console.log(fruitIndex)
//   }

//   console.log();
// }


const facebookProfile = {
  image: {
    path: "c:/awesomeImages/awesome.png",
    timeTaken: "2222-12-22"
  },
  username: "I am awesome",
  email: "awesome@awesome.awesome",
  loggedIn: true,
  score: 1337,
  followers: 1337 + 1337,
  status: "chuck norris",
  friends: [
    { name: "Greta" },
    { name: "Bertil" },
    { name: "Yves" }
  ]
}

console.log(facebookProfile.followers);

// Skapa en forloop som skriver ut alla vänner i profilen
console.log(facebookProfile.friends); // en lista såsom frukterna ovan

// let friends = facebookProfile.friends;

// for (const friend of friends) {
//   console.log(friend.name);
// }

// for (const friend of facebookProfile.friends) {
//   console.log(friend.name);
// }

let friends = facebookProfile.friends;

let query = "Bertil";
// let searchedFriends = friends.filter(friend => {
//   return friend.name == query;
// });

let searchedFriends = friends.filter(friend => friend.name == query);

console.log(searchedFriends[0].name);


