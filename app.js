const ui = new UI();
const storage = new Storage();
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city);

document.addEventListener('DOMContentLoaded', getWeather);
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    weather.changeLocation(city);

    storage.setLocationData(city);

    getWeather();
    $('#locModal').modal('hide');
    // document.getElementById('city').value = '';
})

// weather.changeLocation('');


function getWeather() {
    weather.getWeather()
    .then( (weatherData) => {
        ui.paint(weatherData);
    })
    .catch(err => console.log(err));
}