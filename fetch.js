import { API_KEY } from "./api.js";
export async function fetchWeather(cityName) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY}`);
    return response.json();
}