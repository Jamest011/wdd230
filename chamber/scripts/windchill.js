const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windspeed = document.querySelector("#windspeed");

const url="https://api.openweathermap.org/data/2.5/weather?q=Geary&units=imperial&appid=def4cfa7ffd7c8f92e8d7a126fe116ed";


apiFetch(url);

async function apiFetch(apiURL) {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); // this is for testing the call
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  }



function  displayResults(weatherData) {
  currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
  windspeed.innerHTML = `${weatherData.wind.speed}`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}

const windchill = document.querySelector("#windchill");
if ((currentTemp <= 50) && (windspeed > 3)) {
const chill = 35.74 + (0.6215 * currentTemp) - (35.75 * Math.pow(windspeed, .16)) + (0.4275 * currentTemp * Math.pow(windspeed, .16));
windchill.innerHTML = chill.toFixed(1);
} else {
chill = "N/A";  
windchill.textContent = chill;
}

