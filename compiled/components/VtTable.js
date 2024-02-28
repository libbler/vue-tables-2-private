"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLTable = _interopRequireDefault(require("./renderless/RLTable"));

var _VtTableHead = _interopRequireDefault(require("./VtTableHead"));

var _VtTableBody = _interopRequireDefault(require("./VtTableBody"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtTable',
  inject: ['setRef'],
  components: {
    RLTable: _RLTable["default"],
    VtTableHead: _VtTableHead["default"],
    VtTableBody: _VtTableBody["default"]
  },
  mounted: function mounted() {
    this.setRef('table', this.$refs.table);
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-table", {
      scopedSlots: {
        "default": function _default(props) {
          var caption = props.caption ? h("caption", [props.caption]) : '';
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : h("table", {
            "class": props.tableAttrs["class"],
            attrs: {
              summary: props.tableAttrs.summary
            },
            style: 'border-collapse: collapse; width:100%',
            ref: "table"
          }, [caption, h("vt-table-head"), props.slots.beforeBody, h("vt-table-body", {
            ref: "vt_table_body"
          }), props.slots.afterBody]);
        }
      }
    });
  }
};
exports["default"] = _default2;