var React = require('react');

var CheckboxList = React.createClass({
  render: function() {

    var items = this.props.items.map(function (item) {
      return (
        <CheckboxList.Item href="{item.href}" text="{item.text}" selected={item.selected} />
      );
    });

    return (
      <div className="checkbox-list {this.props.compact ? 'is-compact' : ''}">
        <div className="checkbox-list__list">
          {items}
        </div>
        {this.props.more < items.length ? <CheckboxList.More counter="{items.length - this.props.more}" /> : ''}
      </div>
    );
  }
});

CheckboxList.Item = React.createClass({
  render: function() {
    return (
      <div className="checkbox-list__item">
        <a href="{this.props.href}" className="checkbox-list__link {this.props.selected ? 'is-selected' : ''}">{this.props.text}</a>
      </div>
    );
  }
});

CheckboxList.More = React.createClass({
  render: function() {
    return (
      <div className="checkbox-list__more">Еще {this.props.counter}…</div>
    );
  }
});

module.exports = CheckboxList;
