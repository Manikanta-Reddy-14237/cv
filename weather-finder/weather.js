/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */
let citynamediv=document.getElementById('city-name');
let weathertypediv=document.getElementById('weather-type');
let tempdiv=document.getElementById('temp');
let maxtempdiv=document.getElementById('max-temp');
let mintempdiv=document.getElementById('min-temp');
/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api
let API_KEY = "15a6384979b80dd1acddec3f5dd6f6b9";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
    return  fetch(`${URL}?q=${city}&appid=${API_KEY}&units=imperial`)
  .then(response=>response.json())
  //CODE GOES HERE
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async() => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
const weatherdata = await getWeatherData(city);
  showWeatherData(weatherdata);
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */

const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  let citynamediv=document.getElementById('city-name');
let weathertypediv=document.getElementById('weather-type');
let tempdiv=document.getElementById('temp');
let maxtempdiv=document.getElementById('max-temp');
let mintempdiv=document.getElementById('min-temp');
   weathertypediv.innerText=weatherData.weather[0].main;
 maxtempdiv.innerText=weatherData.main.temp_max;
   mintempdiv.innerText=weatherData.main.temp_min;
  tempdiv.innerText=weatherData.main.temp;
  citynamediv.innerText=weatherData.name;
}

