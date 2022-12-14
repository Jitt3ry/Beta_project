import { getWeatherData } from "./api.js";

async function renderToday(city) {
    const {current: {dt, sunrise, sunset,weather:[{main,icon}]}} = await getWeatherData(city);
    const {current: {temp}} = await getWeatherData(city);
    const {current: {feels_like}} = await getWeatherData(city);


    const sunUp = (sun) =>{
        let h = new Date(sun * 1000).getHours();
        let m = new Date(sun * 1000).getMinutes();
        return `${h}:${m}`
    }
    const duration = (sunrise, sunset) => {
        let duration = sunset - sunrise;
        let h = Math.floor(duration / 3600);
        let m = Math.floor((duration - (3600 * h)) / 60)
        return `${h}:${m}`
    }

    let url = `http://openweathermap.org/img/wn/`

    const weatherCondition = (icon) => {
        return (url + icon + `@2x.png`)
    
    }

    const sunriseTime = document.querySelector('.current__sunrise-main');
    sunriseTime.textContent = sunUp(sunrise);

    const sunsetTime = document.querySelector('.current__sunset-main');
    sunsetTime.textContent = sunUp(sunset);

    const durationTime = document.querySelector('.current__duration-main');
    durationTime.textContent = duration(sunrise, sunset);

    const temperature = document.querySelector('.current__temp-main');
    temperature.textContent = `${Math.round(temp)}\u2103`;

    const realFeel = document.querySelector('.current__likefeel');
    realFeel.textContent = `${Math.round(feels_like)}\u2103`;

    const currentData = document.querySelector('.current__data');
    currentData.textContent = new Date(dt * 1000).toLocaleDateString()

    const mainWeather = document.querySelector('.current__weather-text');
    mainWeather.textContent = main;

    let img = document.getElementById('current__weather-img-main')
    img.src = weatherCondition(icon);
}

const formCity = document.querySelector('#search');
const searchInput = document.querySelector('#searchInput');

renderToday()

formCity.addEventListener('submit', e => {
    e.preventDefault();
    let city = searchInput.value;
    console.log(city);
    renderToday(city)
})
 
