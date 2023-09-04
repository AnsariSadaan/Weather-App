const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a34e146bd5msh9c00e93ff879104p18c890jsn8eff43b7bb39',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

const getWeather = async (city) => {
    try {
        const response = await fetch(url+city, options);
        const result = await response.json();

        if(response.status == 400){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }else{

        

        document.querySelector('.city').innerHTML = result.location.name;
        document.querySelector('.temp').innerHTML = Math.round(result.current.temp_c) + "°C";
        document.querySelector('.humidity').innerHTML = result.current.humidity + "%";
        document.querySelector('.wind').innerHTML = result.current.wind_kph + " kp/h";

        if(result.current.condition.text == "Mist"){
            weatherIcon.src = "images/mist.png"
        }
        else if (result.current.condition.text == "Clear"){
            weatherIcon.src = "images/clear.png"
        }
        else if (result.current.condition.text == "Cloud") {
            weatherIcon.src = "images/clouds.png"
        }
        else if (result.current.condition.text == "Humidity") {
            weatherIcon.src = "images/humidity.png"
        }
        else if (result.current.condition.text == "Rain") {
            weatherIcon.src = "images/rain.png"
        }
        else if (result.current.condition.text == "Patchy rain possible") {
            weatherIcon.src = "images/drizzle.png"
        }
        else if (result.current.condition.text == "Snow") {
            weatherIcon.src = "images/snow.png"
        }
        else if (result.current.condition.text == "Wind") {
            weatherIcon.src = "images/wind.png"
        }
        else if (result.current.condition.text == "Partly cloudy") {
            weatherIcon.src = "images/clouds.png"
        }
        else if (result.current.condition.text == "Sunny") {
            weatherIcon.src = "images/clear.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    } catch (error) {
        console.error(error);
    }
}

searchBtn.addEventListener('click', () => {
    const city = searchBox.value;
    if (city) {
        getWeather(city);
    }
});