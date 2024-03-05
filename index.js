const key = "0d0a0aa6aa824bb1a0784628240403";
const base_url = `https://api.weatherapi.com/v1/current.json`;

const btn = document.querySelector(".btn");
const cityName = document.querySelector(".city-name");
const inputCity = document.getElementById("city");
const temp = document.querySelector(".temp");
const img = document.querySelector(".img");

async function getWeather(city) {
  const base_url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=yes`;
  let response = await fetch(base_url);
  let data = await response.json();
  temp.innerHTML = `${Math.round(data.current.temp_c)}°C`;
  img.src = data.current.condition.icon;
}

btn.addEventListener("click", () => {
  cityName.innerHTML = inputCity.value;
  getWeather(inputCity.value);
  inputCity.value = "";
});
