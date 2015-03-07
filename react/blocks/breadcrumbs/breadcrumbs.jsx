var React = require("react");

var Breadcrumbs = React.createClass({
  render: function() {
    return (
      <div className="breadcrumbs">
        {this.props.children}
      </div>
    );
  }
});

Breadcrumbs.Item = React.createClass({
  mod: function () {
    return "breadcrumbs__link" + (this.props.current ? "is-current" : "");
  },

  render: function() {
    return (
      <div className="breadcrumbs__item">
        <a href={this.props.href} className={this.mod()}>{this.props.text}</a>
      </div>
    );
  }
});

module.exports = Breadcrumbs;
