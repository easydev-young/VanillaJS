const API_KEY = "389bff6c329e8b3ea52e5182bf7d0e95";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`;

    fetch(url).then(response => response.json().then(data => {
        const weather = document.querySelector(".todoHeader__weather span:first-child");
        const city = document.querySelector(".todoHeader__weather span:last-child");

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃ `;
    }));
}

function onGeoErro() {
    alert("can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErro)