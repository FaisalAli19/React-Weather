const React = require('react');
const ReactDOM = require('react-dom');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

//components
const About = require('./components/About');
const Example = require('./components/Example');
const Main = require('./components/Main');
const Weather = require('./components/Weather');

//Foundation
require("style-loader!css-loader!foundation-sites/dist/foundation.min.css")
$(document).foundation();

const app = document.getElementById("app");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="example" component={Example}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    app
);
