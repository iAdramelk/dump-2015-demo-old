Polymer('x-menu', {
  ready: function() {
    this.items = JSON.parse(this.items);
  }
});
