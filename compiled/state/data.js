"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _merge = _interopRequireDefault(require("merge"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _default(useVuex, source) {
  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var data = {
    vuex: true,
    activeState: false,
    userColumnsDisplay: [],
    userControlsColumns: false,
    displayColumnsDropdown: false,
    selectedRows: [],
    collapsedGroups: []
  };
  if (useVuex) return data;
  data = (0, _merge["default"])(data, {
    vuex: false,
    count: 0,
    customQueries: {},
    query: null,
    page: page,
    limit: 10,
    windowWidth: typeof window !== 'undefined' ? window.innerWidth : null,
    orderBy: {
      column: false,
      ascending: true
    }
  });
  if (source == 'server') data.data = [];
  return data;
}