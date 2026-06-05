module.exports = function() {
    if (this.opts.filterable===true) {
        return this.opts.dateColumns;
    }

    if (this.opts.filterable===false) {
        return [];
    }

    return this.opts.filterable.filter(function(column) {
        return this.opts.dateColumns.includes(column);
    }.bind(this));
}
