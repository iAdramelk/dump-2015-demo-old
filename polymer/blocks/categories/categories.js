Polymer('x-categories', {
  ready: function() {
    this.items = JSON.parse(this.items);
  }
});
