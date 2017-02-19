const React = require('react');

var ErrorModel = React.createClass({
    getDefaultProps: function() {
        return{
            title: "Error",
            message: "City not found"
        }
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string
    },
    componentDidMount: function() {
        var Model = new Foundation.Reveal($("#error-modal"));
        Model.open();
    },
    render: function() {
        var { title, message } = this.props;
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <button className="button" data-close="">Close</button>
            </div>
        );
    }
});

module.exports = ErrorModel;
