class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.details = document.getElementById('w-details');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.location.name;
        this.desc.textContent = weather.current.condition.text;
        this.string = weather.current.temp_c;
        this.icon.setAttribute('src', weather.current.condition.icon);
        this.humidity.textContent = `Humidity: ${weather.current.humidity}`;
        this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike_c}`;
        this.wind.textContent = `Wind: ${weather.current.wind_kph}`;
        this.pressure.textContent = `Pressure: ${weather.current.pressure_in}`;
    }
}