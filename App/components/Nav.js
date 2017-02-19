const React = require('react');
const { Link, IndexLink } = require('react-router');

var Nav = React.createClass({
    onSearch: function(e) {
        e.preventDefault();
        var cityName = this.refs.location.value;
        var encodedCityName = encodeURIComponent(cityName);

        if(typeof encodedCityName === "string" && encodedCityName.length > 0){
            this.refs.location.value = "";
            window.location.hash = `#/?location=${encodedCityName}`;
        }
    },
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="about" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link>
                        </li>
                        <li>
                            <Link to="example" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Example</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li><input type="search" ref="location" placeholder="Search Weather by City"/></li>
                            <li><input type="submit" className="button" value="Get Weather"/></li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
})

module.exports = Nav;
