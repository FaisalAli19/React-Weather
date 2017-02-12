const React = require('react');
const ReactDOM = require('react-dom');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

//components
const About = require('./components/About');
const Example = require('./components/Example');
const Main = require('./components/Main');
const Weather = require('./components/Weather');

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
