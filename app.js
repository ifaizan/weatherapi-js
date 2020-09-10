const weather = new Weather('karachi');

weather.changeLocation('lahore');

weather.getWeather()
    .then( (weatherData) => {
        console.log(weatherData);
    })