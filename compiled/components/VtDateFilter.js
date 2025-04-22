"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _vue = require("vue");
var _RLDateFilter = _interopRequireDefault(require("./renderless/RLDateFilter"));
var _omit = _interopRequireDefault(require("../helpers/omit"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default2 = exports["default"] = {
  name: 'VtDateFilter',
  inject: ['setFilterRef'],
  props: ['column'],
  components: {
    RLDateFilter: _RLDateFilter["default"]
  },
  setup: function setup() {
    var filter = (0, _vue.ref)(null);
    return {
      filter: filter
    };
  },
  mounted: function mounted() {
    this.setFilterRef(this.column, this.$refs.filter);
  },
  render: function render() {
    var _this = this;
    return (0, _vue.h)(_RLDateFilter["default"], {
      column: this.column
    }, {
      "default": function _default(props) {
        return props.overide ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.createVNode)("div", {
          "class": "VueTables__date-filter",
          "ref": "filter",
          "id": 'VueTables__' + _this.column + '-filter'
        }, [(0, _vue.createVNode)("span", {
          "class": "VueTables__filter-placeholder"
        }, [props.placeholder])]);
      }
    });
  }
};