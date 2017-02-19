const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');

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
        var { title, message } = this.props;

        var ModelMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <button className="button" data-close="">Close</button>
            </div>
        );

        var $model = $(ReactDOMServer.renderToString(ModelMarkup));
        $(ReactDOM.findDOMNode(this)).html($model);

        var Model = new Foundation.Reveal($("#error-modal"));
        Model.open();
    },
    render: function() {


        return(
            <div>

            </div>
        );
    }
});

module.exports = ErrorModel;
