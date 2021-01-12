export async function FetchWeatherData(city) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=b1b35bba8b434a28a0be2a3e1071ae5b`)
    if (response.ok) {
        let weather = await response.json();
        return weather;
    } else return false
}

