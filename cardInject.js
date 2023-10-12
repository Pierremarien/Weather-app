export function injectCard(data) {
    let section = document.querySelector('.card-container');
    let card = document.createElement('div');
    card.classList.add('card');
    let cityName = data.city.name;
    let country = data.city.country;


    let today = new Date().toLocaleDateString('en-BE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    
    function formatDate(timestamp) {
        const date = new Date(timestamp * 1000); 
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-BE', options);
    }

   
    let currentWeather = data.list[0].main.temp;
    let minTemp = data.list[0].main.temp_min;
    let maxTemp = data.list[0].main.temp_max;
    let humidity = data.list[0].weather[0].icon;
    let humidityLabel = data.list[0].weather[0].description;
    let sunrise = new Date(data.city.sunrise * 1000).toLocaleTimeString();
    let sunset = new Date(data.city.sunset * 1000).toLocaleTimeString();


    let day2 = formatDate(data.list[7].dt);
    let minTemp2 = data.list[7].main.temp_min;
    let maxTemp2 = data.list[7].main.temp_max;
    let humidity2 = data.list[7].weather[0].icon;
    let humidityLabel2 = data.list[7].weather[0].description;

    let day3 = formatDate(data.list[15].dt);
    let minTemp3 = data.list[15].main.temp_min;
    let maxTemp3 = data.list[15].main.temp_max;
    let humidity3 = data.list[15].weather[0].icon;
    let humidityLabel3 = data.list[15].weather[0].description;

    let day4 = formatDate(data.list[23].dt);
    let minTemp4 = data.list[23].main.temp_min;
    let maxTemp4 = data.list[23].main.temp_max;
    let humidity4 = data.list[23].weather[0].icon;
    let humidityLabel4 = data.list[23].weather[0].description;

    let day5 = formatDate(data.list[31].dt);
    let minTemp5 = data.list[31].main.temp_min;
    let maxTemp5 = data.list[31].main.temp_max;
    let humidity5 = data.list[31].weather[0].icon;
    let humidityLabel5 = data.list[31].weather[0].description;

    let day6 = formatDate(data.list[39].dt);
    let minTemp6 = data.list[39].main.temp_min;
    let maxTemp6 = data.list[39].main.temp_max;
    let humidity6 = data.list[39].weather[0].icon;
    let humidityLabel6 = data.list[39].weather[0].description;

    card.innerHTML = `
        <div class="card_header">
            <div class="card_header_info">
                <h2 class="city">${cityName}</h2>
                <h3 class="country">${country}</h3>
            </div>
           <button class="favorite">
                    <svg
                        fill="#000000"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="20px"
                        height="20px"
                        viewBox="0 0 314.335 314.336"
                        xml:space="preserve"
                    >
                        <g>
                            <path d="M302.593,117.321h-80.698c-13.583,0-27.994-10.472-32.191-23.398l-24.944-76.744c-4.197-12.925-10.997-12.925-15.198,0
                            l-24.941,76.744c-4.2,12.926-18.612,23.398-32.195,23.398H11.74c-13.583,0-15.688,6.473-4.699,14.462l65.284,47.426
                            c10.989,7.986,16.498,24.932,12.298,37.854l-24.941,76.741c-4.2,12.922,1.309,16.922,12.298,8.93l65.291-47.427
                            c10.988-7.986,28.805-7.986,39.794,0l65.29,47.427c10.988,7.992,16.501,3.98,12.298-8.93l-24.938-76.741
                            c-4.197-12.923,1.31-29.868,12.298-37.854l65.284-47.426C318.285,123.794,316.176,117.321,302.593,117.321z"/>
                        </g>
                    </svg>
                </button>
        </div>
        <div class="card_body">
            <div class="card_body_today">
                <h3>${today}</h3>
                <ul>
                    <li>Temp: ${currentWeather}&deg;C</li>
                    <li>Min Temp: ${minTemp}&deg;C</li>
                    <li>Max Temp: ${maxTemp}&deg;C</li>
                    <li><img src="https://openweathermap.org/img/wn/${humidity}.png" alt="${humidityLabel}"></li>
                    <li>Sunrise: ${sunrise}</li>
                    <li>Sunset: ${sunset}</li>
                </ul>
            </div>
            <div class="card_body_next">
                <div class="card_body_next_day">
                    <h3>${day2}</h3>
                    <ul>
                        <li>Min Temp: ${minTemp2}&deg;C</li>
                        <li>Max Temp: ${maxTemp2}&deg;C</li>
                        <li><img src="https://openweathermap.org/img/wn/${humidity2}.png" alt="${humidityLabel2}"></li>
                    </ul>
                </div>
                <div class="card_body_next_day">
                    <h3>${day3}</h3>
                    <ul>
                        <li>Min Temp: ${minTemp3}&deg;C</li>
                        <li>Max Temp: ${maxTemp3}&deg;C</li>
                        <li><img src="https://openweathermap.org/img/wn/${humidity3}.png" alt="${humidityLabel3}"></li>
                    </ul>
                </div>
                <div class="card_body_next_day">
                    <h3>${day4}</h3>
                    <ul>
                        <li>Min Temp: ${minTemp4}&deg;C</li>
                        <li>Max Temp: ${maxTemp4}&deg;C</li>
                        <li><img src="https://openweathermap.org/img/wn/${humidity4}.png" alt="${humidityLabel4}"></li>
                    </ul>
                </div>
                <div class="card_body_next_day">
                    <h3>${day5}</h3>
                    <ul>
                        <li>Min Temp: ${minTemp5}&deg;C</li>
                        <li>Max Temp: ${maxTemp5}&deg;C</li>
                        <li><img src="https://openweathermap.org/img/wn/${humidity5}.png" alt="${humidityLabel5}"></li>
                    </ul>
                </div>
                <div class="card_body_next_day">
                    <h3>${day6}</h3>
                    <ul>
                        <li>Min Temp: ${minTemp6}&deg;C</li>
                        <li>Max Temp: ${maxTemp6}&deg;C</li>
                        <li><img src="https://openweathermap.org/img/wn/${humidity6}.png" alt="${humidityLabel6}"></li>
                    </ul>
                </div>
            </div>
        </div>
    `;

    section.appendChild(card);
}
