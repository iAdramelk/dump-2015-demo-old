var React = require('react');

var Banner = React.createClass({
  render: function() {
    return (
      <div className="banner">
        <a href="{this.props.href}" className="banner__link">{this.props.text}</a>
      </div>
    );
  }
});

module.exports = Banner;
