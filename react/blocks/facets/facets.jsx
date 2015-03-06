var React = require('react');

var Facets = React.createClass({

  render: function() {
    return (
      <div className="facets">
        {this.props.childern}
      </div>
    );
  }
});

module.exports = Facets;
