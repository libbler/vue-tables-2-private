"use strict";

module.exports = function () {
  var _this = this;
  var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  if (!this.opts.childRow || typeof this.opts.childRow === 'function') {
    throw new Error('vue-tables-3: Child row undefined or not a component');
  }
  var Rows = rows ? this.openChildRows.filter(function (row) {
    return rows.includes(row);
  }) : this.openChildRows;
  if (!Rows.length) return [];
  var data = this.source === 'client' ? this.filteredData : this.tableData;
  return Rows.map(function (rowId) {
    return data.find(function (row) {
      return row[_this.opts.uniqueKey] === rowId;
    });
  }).filter(Boolean).map(function (row) {
    return {
      data: row
    };
  });
};
