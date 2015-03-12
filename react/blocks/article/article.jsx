var React = require('react');

var Article = React.createClass({
  formattedText: function() {
    return {__html: this.props.text.replace(/\n/g, "<br>") };
  },
  render: function() {
    return (
      <div className="article" dangerouslySetInnerHTML={this.formattedText()}></div>
    );
  }
});

module.exports = Article;
