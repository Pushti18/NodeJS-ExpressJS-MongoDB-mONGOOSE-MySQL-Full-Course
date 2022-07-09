#openweather

Simple Weather Retrieval Module for http://openweathermap.org/

### Version
1.0.4

### Installation
```sh
$ npm i --save openweather
```

### Usage
Obtain api "key" from http://openweathermap.org/ after registration. It is called "APPID". You may load it as an environment variable or include it as an optional parameter. 
```js
var openWeather = require('openweather');

// Returns data from open weather using desired 
// coordinates, city name, or zip code from a object or city name:

openWeather.getWeather(coords, function(result){
  console.log(result);
}, [key]);

// Example coordinate object:
{"latitude": 37, "longitude": -122 }

// Example city object. Country is optional  
{
    "city": "San Francisco",
    "country": "ca"
}

// Example zip code object

{
    "zip": "94115"
}


// Example data from result includes temperature 
// in Kelvins, Fahrenheit, and Celsius:
{
  "lon": -123.12,
  "lat": 49.25,
  "city": "Vancouver",
  "country": "CA",
  "sunset": 1467433243,
  "sunrise": 1467375137,
  "humidity": 68,
  "pressure": 1019,
  "icon": "http://openweathermap.org/img/w/04d.png",
  "weather": "Clouds",
  "weatherDes": "broken clouds",
  "windSpeed": 3.6,
  "avgTempK": 293.07,
  "minTempK": 289.15,
  "maxTempK": 296.48,
  "avgTempC": 19.92,
  "minTempC": 16,
  "maxTempC": 23.33,
  "avgTempF": 67.86,
  "minTempF": 60.8,
  "maxTempF": 73.99
}

};

```    

License
----
MIT