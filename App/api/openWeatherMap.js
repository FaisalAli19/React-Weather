const Axios = require('axios');

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=969f7f8ccb58a6c8e02c6529e39f8247&q=";


module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location)
        var requestUrl = `${OPEN_WEATHER_MAP_URL}${encodedLocation}`;

        return Axios.get(requestUrl).then(function(res) {
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else {
                return res.data.main.temp;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
};
