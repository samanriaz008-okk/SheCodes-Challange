function displayTemperature(show) {
  let currentTemp = document.querySelector("#current-temperature-value");
  let cityElement = document.querySelector("#current-city");
  console.log(show);
  let temperature = Math.round(show.data.temperature.current);
  currentTemp.innerHTML = temperature;
  cityElement.innerHTML = show.data.city;
}
function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;
  let key = "9aa8ab264078edftd860c3e0foabbd02";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;

  axios.get(apiUrl).then(displayTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
