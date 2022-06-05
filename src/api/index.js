import axios from "axios";

let instance = axios.create({
        baseURL: 'http://api.openweathermap.org/data/2.5/'
    }
)

export const api = {
    getWeather: (city, apik) => {
        return instance.get(`weather?q=${city}&lang=ru&units=metric&appid=${apik}`).then(res => res.data)
    }

}