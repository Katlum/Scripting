//This code transforms your age into dog years.
//The first  two years (for humans) count as 10.5 each (for dogs)
//The other years count as 4 dog years
//Project idea from codecademy.com

const myAge = 15; //Im fifteen :D
let earlyYears = 2; //Will store the first two human years into dog years
earlyYears = earlyYears * 10.5; 
let laterYears = myAge - 2; //Years after the first two years.
laterYears = laterYears * 4; // laterYears to dog years.
let myAgeInDogYears = earlyYears + laterYears; //First years plus the other years.
console.log(`I am ${myAgeInDogYears} in dog years.`)
