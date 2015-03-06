var React = require('react');

var Categories = React.createClass({
  render: function() {

    var items = this.props.items.map(function (item) {
      return (
        <Categories.Item href="{item.href}" text="{item.text}" level="{item.level}" current={item.current} />
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
  render: function() {
    return (
      <div className="categories__item categories__item_level_{this.prop.level}">
        <a href="{this.prop.href}" className="categories__link {this.prop.current ? 'is-current' : ''}">{this.prop.text}</a>
      </div>
    );
  }
});

module.exports = Categories;
