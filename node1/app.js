var request = require("request");
var weather = require("openweather-apis");
// weather.setLang("it");
// weather.setCity("Fairplay");
// let ownKey = `http://openweathermap.org/58469e843e27429d1b6037e1ec344f0f`
// weather.setAPPID(ownKey);
let weatherForLatLong = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=4a6f7f58ef136ce95312f691b04fd1f3`;
let url = `https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=4a6f7f58ef136ce95312f691b04fd1f3`;
request({ weatherForLatLong, json: true }, (error, { body }) => {
  if (error) {
    console.log(error);
  } else if (body.error) {
    console.log(body.error);
  } else {
    console.log(body);
  }
});
