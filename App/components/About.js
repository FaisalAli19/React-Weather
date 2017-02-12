const React = require('react');
const { Link } = require('react-router');

var About = (props) => {
    return (
        <div>
            <h2 className="text-center">About</h2>
            <p>This a weather application build on React. I have built for practice purpose only.</p>
            <p>Here are some tools I used.</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react/" target="_blank">React</a>
                </li>
                <li>
                    <a href="http://foundation.zurb.com/" target="_blank">Foundation</a>
                </li>
                <li>
                    <a href="http://faisal-ali.com" target="_blank">Faisal Ali</a>
                </li>
            </ul>
        </div>
    );
};

module.exports = About;
