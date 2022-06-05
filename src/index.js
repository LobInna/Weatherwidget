import './styles/main.css'
import {api} from "./api";

const city = document.getElementById('city')
const apiKey = document.getElementById('apiKey')
const button = document.getElementById('send')
const weather = document.getElementById('weather')

const addWeather = (data) => {
    weather.innerHTML = ''
    const div = document.createElement('div');
    div.className = 'row';
    div.innerHTML = `<div class="weatherObs"><p>Температура: ${data.main.temp}°C</p>
                    <p>Ощущается как: ${data.main.feels_like}°C</p>
                    <p>В общем: ${data.weather[0].description}</p></div>`
    weather.appendChild(div);
}

const kek = () => {
    const cityName = city.value
    const key = apiKey.value
    api.getWeather(cityName, key).then(data => addWeather(data))
    console.log(city.value)
}

button.addEventListener('click', kek)
console.log(city.value)



