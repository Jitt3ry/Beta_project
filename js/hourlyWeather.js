import { getHourlyWeather } from "./api.js";




async function renderHourly(city){
    const {list: arr} = await getHourlyWeather(city);
    for(let i = 1; i < 7; i++) {
        let hoursInfo = new Date((arr[(i-1)].dt) * 1000).getHours()
        const tableTime = document.querySelector(`.table__time-${i}`);
        if(hoursInfo > 12 || hoursInfo < 0){
            tableTime.innerHTML = `${hoursInfo} PM`
        }
        else {
            tableTime.innerHTML = `${hoursInfo} AM`
        }

        const tableForecastImg = document.querySelector(`.forecast__img-main-${i}`);
        tableForecastImg.src = `http://openweathermap.org/img/wn/${arr[i].weather[0].icon}.png`;

        const tableForecast = document.querySelector(`.table__forecast-${i}`);
        tableForecast.innerHTML = `${arr[(i-1)].weather[0].main}`;

        const tableTemp = document.querySelector(`.table__temp-${i}`);
        tableTemp.innerHTML = `${Math.round(arr[(i-1)].main.temp)}°`;
        
        const tableRealFeel = document.querySelector(`.table__realFeel-${i}`);
        tableRealFeel.innerHTML = `${Math.round(arr[(i-1)].main.feels_like)}°`

        const tableWind = document.querySelector(`.table__wind-${i}`);
        tableWind.innerHTML = `${Math.round(arr[(i-1)].wind.speed)} ESE`
    }
}


const formCity = document.querySelector('#search');
const searchInput = document.querySelector('#searchInput');

renderHourly()

formCity.addEventListener('submit', e => {
    e.preventDefault();
    let city = searchInput.value;
    console.log(city);
    renderHourly(city)
})