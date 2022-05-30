const temp = parseFloat(document.querySelector("#temp").innerHTML);
const windspeed = parseFloat(document.querySelector("#windspeed").innerHTML);

const windchill = document.querySelector("#windchill");
if ((temp <= 50) && (windspeed > 3)) {
  const chill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, .16)) + (0.4275 * temp * Math.pow(windspeed, .16));
  windchill.innerHTML = chill.toFixed(1);
} else {
  windchill.innerHTML = "N/A";
}