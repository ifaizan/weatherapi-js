class Weather {
    constructor(city) {
        this.city = city;
        this.api_key = 'd8188d68b0474f578b9223246200909';
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