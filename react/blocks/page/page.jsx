var React = require('react');

var Page = React.createClass({
  render: function() {
    return (
      <div class="page">
        {this.props.childern}
      </div>
    );
  }
});

module.exports = Page;
