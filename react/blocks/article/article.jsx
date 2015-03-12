var React = require('react');

var Article = React.createClass({
  render: function() {
    return (
      <div className="article" dangerouslySetInnerHTML={this.props.text}></div>
    );
  }
});

module.exports = Article;
