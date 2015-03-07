var React = require('react');

var Search = React.createClass({
  render: function() {
    return (
      <form action=" {this.props.action}" className="search">
        <input type="search" placeholder="платье бальное" className="search__query" value=" {this.props.value}" />
        <input type="submit" value="Найти" className="search__submit" />
      </form>
    );
  }
});

module.exports = Search;
