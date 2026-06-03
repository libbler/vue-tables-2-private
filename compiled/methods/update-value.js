"use strict";

var _cloneDeep = _interopRequireDefault(require("lodash-es/cloneDeep"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var setDeep = require('../helpers/set-deep');
module.exports = function _updateValue(row, column) {
  return function (e) {
    var _this = this;
    var oldVal = null;
    setDeep(row, column.split('.'), getValue(e));
    var data = (0, _cloneDeep["default"])(this.data).map(function (r) {
      if (r[_this.opts.uniqueKey] === row[_this.opts.uniqueKey]) {
        oldVal = _this._getValue(r, column);
        return row;
      }
      return r;
    });
    this.dispatch('input', data);
    this.dispatch('update', {
      row: row,
      column: column,
      oldVal: oldVal,
      newVal: this._getValue(row, column)
    });
  }.bind(this);
};
function getValue(val) {
  if (val.target) {
    return val.target.type === 'checkbox' ? val.target.checked : val.target.value;
  }
  return val;
}