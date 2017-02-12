const React = require('react');
const { Link } = require('react-router');

var Example = (props) => {
    return (
        <div>
            <h2 className="text-center">Example</h2>
            <p>Here are few examples locations to try out</p>
            <ol>
                <li>
                    <Link to="/?location=Philadelphia">Philadelphia, PA</Link>
                </li>
                <li>
                    <Link to="/?location=Rio">Rio, Brazil</Link>
                </li>
                <li>
                    <Link to="/?location=Mumbai">Mumbai, IN</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Example;
