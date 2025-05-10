//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;
//we create an Array to hold the values of the already-Farenheit temperatures,
//as well as the converted Celsius-to-Farenheit temperatures.

const tempsF = [
    day1TempF,
    (day2TempC * 9 / 5) + 32,
    day3TempF,
    (day4TempC * 9 / 5) + 32,
    day5TempF,
    (day6TempC * 9 / 5) + 32,
    day7TempF,
    (day8TempC * 9 / 5) + 32,
    day9TempF,
    (day10TempC * 9 / 5) + 32,
    day11TempF,
    (day12TempC * 9 / 5) + 32,
    day13TempF,
    (day14TempC * 9 / 5) + 32,
    day15TempF,
    (day16TempC * 9 / 5) + 32,
    day17TempF,
    (day18TempC * 9 / 5) + 32,
    day19TempF,
    (day20TempC * 9 / 5) + 32,
    day21TempF,
    (day22TempC * 9 / 5) + 32,
    day23TempF,
    (day24TempC * 9 / 5) + 32,
    day25TempF,
    (day26TempC * 9 / 5) + 32,
    day27TempF,
    (day28TempC * 9 / 5) + 32,
    day29TempF,
    (day30TempC * 9 / 5) + 32
  ];
  
// Sum of all Fahrenheit temperatures in the TempsF Array for all 30 days
let tot_temperature_in_fahrenheit = 0;
for (let i = 0; i < 30; i++) {
  tot_temperature_in_fahrenheit += tempsF[i];
}

// Calculate average Fahrenheit temperature
let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;

//Convert the total Farenheit temperature in Celsius to find the total Celsius temperature
let tot_temperature_in_celsius = (tot_temperature_in_fahrenheit- 32) * 5 / 9
//Calculate average Celsius temperature
let avg_temperature_in_celsius = tot_temperature_in_celsius / 30

console.log("\nThe average temperature in Celcius for this month is:", avg_temperature_in_celsius.toFixed(2), "°C.")
console.log("\nThe average temperature in Fahrenheit for this month is:", avg_temperature_in_fahrenheit.toFixed(2), "°F.");

//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};