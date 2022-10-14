const { response } = require('../app');
const weatherConfig = require('../config/weather-config');

class WeatherController{
    constructor(){
        this.weatherConfig = require('../config/weather-config');
        this.request = require('request');
        this.es6BindAll = require('es6bindall');
        this.es6BindAll(this, ['getWeatherDetails']);
    }
    
    getWeatherDetails(req, resp){
        let url = `https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=${this.weatherConfig.weatherSecret}`;
        this.request({ url, json: true }, (error, { body }) => {
            if (error) {
                console.log(error);
            } else if (body.error) {
                console.log(body.error);
            } else {
                console.log(body);
                resp.status(200).send({
                    status: true,
                    message: 'We Have Got Response.',
                    data: body,
                })
            }
        });
    }
}

module.exports = new WeatherController();

//200-success response
//400-bad request
//401-unauthorized access
//404-not found
//500-internal server error