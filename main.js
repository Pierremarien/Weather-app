import { injectCard } from "./cardInject.js";
import { onclickCountry } from "./onclick.js";
import { setFavorite } from "./storage.js";
import { fetchWeather } from "./fetch.js";
document.addEventListener("DOMContentLoaded", function () {
    onclickCountry(); 
    setFavorite();
    window.addEventListener('load', async () => {
        const favoriteCity = localStorage.getItem('favoriteCity');
        if (favoriteCity) {
            try {
                const weatherData = await fetchWeather(favoriteCity);
                injectCard(weatherData);
            } catch (error) {
                console.error('Error fetching or rendering weather data:', error);
            }
        }
    });
  });
