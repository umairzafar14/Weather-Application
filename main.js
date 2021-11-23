// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
    key: "7614a3bf600a4171ecbcb9bf0a86f204",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
};

const searchBox = document.getElementById("input-box");

// Event Listener Function on Keypress
searchBox.addEventListener("keypress", (event) => {
    if (event.keyCode == 13) {
        console.log(searchBox.value);
        getWeatherReport(searchBox.value);
        document.querySelector('.weather-details').style.display = "block";
    }
});

// Get Weather Report

function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then((weather) => {
            return weather.json();
        }).then(showWeatherReport);
}

// Show Weather Report

function showWeatherReport(weather) {
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temp = document.getElementById('temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C / ${Math.ceil(weather.main.temp_max)}&deg;C`;

    let weatherType = document.getElementById('weather');
    weatherType.innerHTML = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);
}

// Date Manage

function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} ${year} (${day})`;














}