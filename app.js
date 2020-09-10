const weather = new Weather('karachi');
const ui = new UI;

// weather.changeLocation('');

weather.getWeather()
    .then( (weatherData) => {
        ui.paint(weatherData);
    })
    .catch(err => console.log(err));