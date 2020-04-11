"use strict";

var clone = require('clone');

module.exports = function () {
  var data = clone(this.tableData);
  var column = this.orderBy.column;
  data = this.search(data);

  if (column) {
    // dummy var to force compilation
    if (this.time) this.time = this.time;
    data = this.opts.sortingAlgorithm.call(this, data, column ? column : this.opts.groupBy);
  } else if (this.opts.groupBy) {
    data = this.opts.sortingAlgorithm.call(this, data, this.opts.groupBy);
  }

  if (this.vuex) {
    if (this.count != data.length) this.commit('SET_COUNT', data.length);
  } else {
    this.count = data.length;
  }

  this.allFilteredData = JSON.parse(JSON.stringify(data));
  var offset = (this.page - 1) * this.limit;

  if (this.opts.pagination.infinite && data.length - offset < this.limit) {
    offset = offset - (data.length - offset);
  }

  return data.splice(offset, this.limit);
};