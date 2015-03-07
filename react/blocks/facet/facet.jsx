var React = require('react');

var Facet = React.createClass({
  formattedPrice: function() {
    return this.props.price.toLocaleString("ru-RU", {style: "currency", currency: "RUR", minimumFractionDigits: 0});
  },

  mod: function () {
    return "facet" + (this.props.closed ? ' is-closed' : '');
  },


  render: function() {
    return (
      <div className={this.mod()}>
        <div className="facet__title">{this.props.title}</div>
        <div className="facet__content">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Facet;
