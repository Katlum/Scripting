const kelvin = 293; //Today's forecast
const celsius = kelvin - 273; //celsius equals to kelvin degrees minus 273
let fahrenheit = celsius * (9/5) + 32; //Celsious to fahrenheit
fahrenheit =  Math.floor(fahrenheit); //Rounds fahrenheit.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
let newton = celsius * (33 / 100); //Celsius to newton
newton = Math.floor(newton); //Rounds newton.
console.log(`${celsius} degrees celsius equals to ${newton} newtons`);
