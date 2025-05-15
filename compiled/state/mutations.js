"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _merge = _interopRequireDefault(require("merge"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _default(self) {
  var _merge$recursive;
  var extra = self.source == 'server' ? _defineProperty(_defineProperty(_defineProperty({}, "".concat(self.name, "/SET_DATA"), function _SET_DATA(state, response) {
    var data = self.opts.responseAdapter.call(self, response);
    state.data = self.opts.pagination.virtual && state.page !== 1 ? state.data.concat(data.data) : data.data;
    state.count = parseInt(data.count);
  }), "".concat(self.name, "/ERROR"), function _ERROR(state, payload) {}), "".concat(self.name, "/SET_COUNT"), function _SET_COUNT(state, count) {
    state.count = count;
  }) : _defineProperty({}, "".concat(self.name, "/SET_COUNT"), function _SET_COUNT(state, count) {
    state.count = count;
  });
  return _merge["default"].recursive(true, (_merge$recursive = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_merge$recursive, "".concat(self.name, "/PAGINATE"), function _PAGINATE(state, page) {
    state.page = page;
    self.updateState('page', page);
    if (self.source == 'server') self.getData();
    self.commit('PAGINATION', page);
  }), "".concat(self.name, "/SET_FILTER"), function _SET_FILTER(state, filter) {
    state.page = 1;
    self.updateState('page', 1);
    state.query = filter;
    if (self.source == 'server') {
      self.getData();
    }
  }), "".concat(self.name, "/PAGINATION"), function _PAGINATION(state, page) {}), "".concat(self.name, "/SET_CUSTOM_FILTER"), function _SET_CUSTOM_FILTER(state, _ref3) {
    var filter = _ref3.filter,
      value = _ref3.value;
    state.customQueries[filter] = value;
    state.page = 1;
    self.updateState('page', 1);
    self.updateState('customQueries', state.customQueries);
    if (self.source == 'server') {
      self.getData();
    }
  }), "".concat(self.name, "/SET_STATE"), function _SET_STATE(state, _ref4) {
    var page = _ref4.page,
      query = _ref4.query,
      customQueries = _ref4.customQueries,
      limit = _ref4.limit,
      orderBy = _ref4.orderBy;
    state.customQueries = customQueries;
    state.query = query;
    state.page = page;
    state.limit = limit;
    state.ascending = orderBy.ascending;
    state.sortBy = orderBy.column;
  }), "".concat(self.name, "/SET_LIMIT"), function _SET_LIMIT(state, limit) {
    state.page = 1;
    self.updateState('page', 1);
    state.limit = limit;
    if (self.source == 'server') self.getData();
  }), "".concat(self.name, "/SORT"), function _SORT(state, _ref5) {
    var column = _ref5.column,
      ascending = _ref5.ascending;
    state.ascending = ascending;
    state.sortBy = column;
    if (self.source == 'server') self.getData();
  }), "".concat(self.name, "/SORTED"), function _SORTED(state, data) {}), "".concat(self.name, "/ROW_CLICK"), function _ROW_CLICK(state, row) {}), "".concat(self.name, "/FILTER"), function _FILTER(state, row) {}), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_merge$recursive, "".concat(self.name, "/LIMIT"), function _LIMIT(state, limit) {}), "".concat(self.name, "/INPUT"), function _INPUT(state, payload) {}), "".concat(self.name, "/UPDATE"), function _UPDATE(state, payload) {}), "".concat(self.name, "/LOADING"), function _LOADING(state, payload) {}), "".concat(self.name, "/LOADED"), function _LOADED(state, payload) {}), "".concat(self.name, "/SELECT"), function _SELECT(state, payload) {})), extra);
}