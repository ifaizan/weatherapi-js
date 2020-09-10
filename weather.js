class Weather {
    constructor(city) {
        this.city = city;
        this.api_key = 'yourweatherapikey'; //you can get one from weatherapi.com
    }

    async getWeather() {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.api_key}&q=${this.city}`);
        const responseData = await response.json();
        return responseData; 
    }

    changeLocation(city) {
        this.city = city;
    }
}