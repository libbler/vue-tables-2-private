"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _vue = require("vue");
var _RLTableHeading = _interopRequireDefault(require("./renderless/RLTableHeading"));
var _VtSortControl = _interopRequireDefault(require("./VtSortControl"));
var _omit = _interopRequireDefault(require("../helpers/omit"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default2 = exports["default"] = {
  name: 'VtTableHeading',
  props: ['column'],
  components: {
    RLTableHeading: _RLTableHeading["default"],
    VtSortControl: _VtSortControl["default"]
  },
  render: function render() {
    return (0, _vue.h)(_RLTableHeading["default"], {
      column: this.column
    }, {
      "default": function _default(props) {
        return props.override ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.createVNode)("th", {
          "onKeypress": props.thEvents.keypress,
          "onClick": props.thEvents.click,
          "class": props.thAttrs["class"],
          "title": props.thAttrs.title,
          "tabindex": props.thAttrs.tabIndex,
          "style": props.thAttrs.style
        }, [(0, _vue.createVNode)("span", {
          "class": "VueTables__heading",
          "title": props.title
        }, [props.heading]), (0, _vue.h)(_VtSortControl["default"])]);
      }
    });
  }
};