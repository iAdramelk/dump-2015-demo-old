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
  render: function() {
    return (
      <div className="view-mode__item">
        <a href="{this.props.href}" className="view-mode__link {this.props.current ? 'is-current' : ''}">{this.props.text}</a>
      </div>
    );
  }
});

module.exports = ViewMode;
