const React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var cityName = this.refs.location.value;

        if(typeof cityName === "string" && cityName.length > 0){
            this.refs.location.value = "";
            this.props.onSearch(cityName);
        }
    },
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="search" ref="location" placeholder="Search Weather by City"/>
                <button className="button expanded">Get Weather</button>
            </form>
        );
    }
});

module.exports = WeatherForm;
