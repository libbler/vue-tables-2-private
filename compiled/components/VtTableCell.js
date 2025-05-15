"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _vue = require("vue");
var _RLTableCell = _interopRequireDefault(require("./renderless/RLTableCell"));
var _omit = _interopRequireDefault(require("../helpers/omit"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default2 = exports["default"] = {
  name: 'VtTableCell',
  props: ['column'],
  components: {
    RLTableCell: _RLTableCell["default"]
  },
  render: function render() {
    return (0, _vue.h)(_RLTableCell["default"], {
      column: this.column
    }, {
      "default": function _default(props) {
        return props.override ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.createVNode)("td", {
          "tabindex": props.tabIndex,
          "class": props.classes
        }, [props.content]);
      }
    });
  }
};