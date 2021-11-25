/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

let ages = [30, 34, 17];
let [jones, mary, joe] = ages;

console.log(jones);
console.log(mary);
console.log(joe);

// Destructuring objects

let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountant'
};

let { mike, hill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets

let languages = ['english', 'french', 'spanish', 'german', 'japanese'];

let [jognNative, johnSecondary] = languages;

console.log(jognNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;

console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: 'english',
    secondaryLanguage: 'french',
    thirdLanguage: 'genrman',
    fourthLanguage: 'japanese'
};

let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax

let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];

let [favorite, secondFavorite, ...others] = fruits;

console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
};

let { brian, anna, ...rest } = favoriteFoods;

console.log(brian);
console.log(anna);
console.log(rest);