var React = require('react');

var ViewMode = React.createClass({
  render: function() {
    return (
      <div className="view-mode">
        {this.props.children}
      </div>
    );
  }
});

ViewMode.Item = React.createClass({
  mod: function () {
    return "view-mode__link" + (this.props.current ? ' is-current' : '');
  },
  render: function() {
    return (
      <div className="view-mode__item">
        <a href={this.props.href} className={this.mod()}>{this.props.text}</a>
      </div>
    );
  }
});

module.exports = ViewMode;
