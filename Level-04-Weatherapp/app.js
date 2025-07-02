const ApiKey = "61c7d61f0a8b3446c90085d538c3928e";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const InputEl = document.querySelector(".search input")
const buttonEl = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(`${ApiUrl} ${city} &appid=${ApiKey}`);
    const data = await response.json();
    console.log(data);
    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "images/clear.png"
    }
     else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
     else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "images/mist.png"
    }
     else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "images/rain.png"
    }

    document.querySelector(".weather").style.display = "block"
    

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h"
}

buttonEl.addEventListener("click" , () => {
    checkWeather(InputEl.value);
    InputEl.value = " "
})

