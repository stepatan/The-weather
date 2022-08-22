let now = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wed", "Thu", "Friday", "Saturday"];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
let today = document.querySelector("#day");
today.innerHTML = `${day}`;
let time = document.querySelector("#time");
time.innerHTML = `${hour}:${minutes}`;
function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#inputcity");
  let city = document.querySelector("h1.city");
  city.innerHTML = `${cityInput.value}`;
  let apiKey = "002c0778cdd670b201eb98b91d1341a3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}`;
  axios.get(`${apiUrl}&appid=${apiKey}&units=metric`).then(showTemperature);
  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let weatherElement = document.querySelector("h2.temperature");
    weatherElement.innerHTML = `${temperature}C`;
  }
}
let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", searchCity);
