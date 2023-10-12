import { fetchWeather } from "./fetch.js";
import { injectCard } from "./cardInject.js";
export function onclickCountry() {
    const cityInput = document.querySelector('.cityInput');
    if (cityInput) {
        cityInput.addEventListener('keyup', async function (event) {
            if (event.key === "Enter") {
                const cityName = cityInput.value;
            
                if (cityName) {
                    try {
                        const weatherData = await fetchWeather(cityName);
                        injectCard(weatherData);
                        } catch (error) {
                            console.error(error);
                            alert("Failed to fetch weather data.");
                        }
                } else {
                    alert("Please enter a city name.");
                }
            }
        });
    }
}

