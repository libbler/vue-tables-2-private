module.exports = function() {

  var opts = this.opts;

  return opts.dateColumns.length &&
  opts.filterByColumn &&
  ((typeof opts.filterable=='boolean' && opts.filterable) ||
    (typeof opts.filterable=='object' && opts.filterable.some(function(column) {
      return opts.dateColumns.includes(column);
    })))

}
