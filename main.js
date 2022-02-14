// This is my age
var myAge = 13.5;

//First two dog years are sped up
var earlyYears = 2;
earlyYears *= 10.5;

//Removes the first two years from overall age
var laterYears = (myAge - 2) * 4;

//Calculates later dog years at slower speed
//laterYears *= 4;

//My age in dog years
myAgeInDogYears = earlyYears + laterYears;

// console.log(myAgeInDogYears);

//My name in lowercase
var myName = 'Reggie';
myName = myName.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
