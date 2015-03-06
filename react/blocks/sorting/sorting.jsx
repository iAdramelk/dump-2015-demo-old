var React = require('react');

var Sorting = React.createClass({
  render: function() {
    return (
      <div className="sorting">
        <div className="sorting__title">Сортировать:</div>
        {this.props.children}
      </div>
    );
  }
});

Sorting.Item = React.createClass({
  render: function() {
    return (
      <div className="sorting__item">
        <a href="{this.props.href}" className="sorting__link {this.props.current ? 'is-current' : ''}">{this.props.text}</a>
      </div>
    );
  }
});

module.exports = Sorting;
