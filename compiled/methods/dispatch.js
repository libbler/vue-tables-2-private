"use strict";

var _bus = _interopRequireDefault(require("../bus"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
module.exports = function (event, payload) {
  if (this.vuex) {
    if (event.split('::').length > 1) return;
    this.commit(event.toUpperCase().replace('-', '_'), payload);
  }
  this.$parent.$emit(event, payload);
  _bus["default"].emit("vue-tables.".concat(event), payload);
  if (this.name) {
    _bus["default"].emit("vue-tables.".concat(this.name, ".").concat(event), payload);
  }
};