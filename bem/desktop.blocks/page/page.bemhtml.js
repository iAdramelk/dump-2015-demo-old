block('page').def()(function() {
    return applyNext({ data: this.ctx.data });
});
