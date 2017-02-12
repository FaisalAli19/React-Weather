const React = require('react');

var WeatherMessage = ({ temp, location }) => {

    return (
        <div>
            <h2>It is {temp} &#8457; in {location}.</h2>
        </div>
    );
};

module.exports = WeatherMessage;
