var React = require('react');

var Categories = React.createClass({
  render: function() {

    var items = this.props.items.map(function (item) {
      return (
        <Categories.Item href={item.href} text={item.text} level={item.level} current={item.current} key={item.text} />
      );
    });

    return (
      <div className="categories">
        <div className="categories__title">Категории</div>
        {items}
      </div>
    );

  }
});

Categories.Item = React.createClass({
  mod: function () {
    return "categories__link" + (this.props.current ? ' is-current' : '');
  },
  render: function() {
    return (
      <div className={"categories__item categories__item_level_" + this.props.level}>
        <a href={this.props.href} className={this.mod()}>{this.props.text}</a>
      </div>
    );
  }
});

module.exports = Categories;
