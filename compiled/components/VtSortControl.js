"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _vue = require("vue");
var _RLSortControl = _interopRequireDefault(require("./renderless/RLSortControl"));
var _omit = _interopRequireDefault(require("../helpers/omit"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default2 = exports["default"] = {
  name: 'VtSortControl',
  components: {
    RLSortControl: _RLSortControl["default"]
  },
  render: function render() {
    return (0, _vue.h)(_RLSortControl["default"], {}, {
      "default": function _default(props) {
        return props.sortable ? props.override ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.createVNode)("span", {
          "class": props["class"]
        }, null) : '';
      }
    });
  }
};