const API_KEY = "f838cf4c30b4a6732cb6765c7fef2bc0";
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const locat = document.getElementById("location");
const deg = document.getElementById("degree");
const inp = document.getElementById("search_inp");
const sky = document.getElementById("sky");

function fetch_weather(city_name) {
  const current_weather_URL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city_name +
    "&appid=" +
    API_KEY +
    "";

  fetch(current_weather_URL)
    .then((response) => response.json())
    .catch((error) => {
      document.getElementById("hide").classList.remove("add");
    })
    .then((data) => {
      humidity.innerHTML = data.main.humidity;
      locat.innerHTML = "Weather in " + data.name;
      deg.innerHTML = (data.main.temp - 273).toFixed(2) + "°C";
      wind.innerHTML = data.wind.speed + "km/h";
      sky.innerHTML = data.weather[0]["main"];

      document.getElementById("icon").src =
        "https://openweathermap.org/img/wn/" +
        data.weather[0]["icon"] +
        "@2x.png";
      document.getElementById("hide").classList.remove("none");
      document.body.style.backgroundImage =
        'url("https://source.unsplash.com/1600x900/?' + data.name + '")';
    });
}
function convertTimestamptoTime(Timestamp) {
  // convert to milliseconds and
  // then create a new Date object
  dateObj1 = new Date(Timestamp * 1000);
  timeString = dateObj1.toTimeString();

  return timeString;
}
