"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default2;
var _vue = require("vue");
var _VtPerPageSelector = _interopRequireDefault(require("./VtPerPageSelector"));
var _VtTable = _interopRequireDefault(require("./VtTable"));
var _VtPagination = _interopRequireDefault(require("./VtPagination"));
var _VtDropdownPagination = _interopRequireDefault(require("./VtDropdownPagination"));
var _VtGenericFilter = _interopRequireDefault(require("./VtGenericFilter"));
var _VtColumnsDropdown = _interopRequireDefault(require("./VtColumnsDropdown"));
var _Observer = _interopRequireDefault(require("./Observer"));
var _VtPaginationCount = _interopRequireDefault(require("./VtPaginationCount"));
var _omit = _interopRequireDefault(require("../helpers/omit"));
var _emittedEvents = _interopRequireDefault(require("../helpers/emitted-events"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _default2(RLServerTable) {
  return {
    name: 'VtServerTable',
    emits: _emittedEvents["default"],
    components: {
      VtPerPageSelector: _VtPerPageSelector["default"],
      VtTable: _VtTable["default"],
      VtPagination: _VtPagination["default"],
      VtDropdownPagination: _VtDropdownPagination["default"],
      VtColumnsDropdown: _VtColumnsDropdown["default"],
      VtGenericFilter: _VtGenericFilter["default"],
      VtPaginationCount: _VtPaginationCount["default"],
      Observer: _Observer["default"]
    },
    props: {
      columns: {
        type: Array,
        required: true
      },
      url: {
        type: String,
        required: false
      },
      name: {
        type: String,
        required: false
      },
      options: {
        type: Object,
        required: false,
        "default": function _default() {
          return {};
        }
      }
    },
    computed: {
      customQueries: {
        get: function get() {
          var _this$$refs$table;
          return (_this$$refs$table = this.$refs.table) === null || _this$$refs$table === void 0 ? void 0 : _this$$refs$table.customQueries;
        },
        set: function set(val) {
          if (this.$refs.table) {
            this.$refs.table.customQueries = val;
          }
        }
      },
      data: function data() {
        var _this$$refs$table2;
        return (_this$$refs$table2 = this.$refs.table) === null || _this$$refs$table2 === void 0 ? void 0 : _this$$refs$table2.tableData;
      },
      selectedRows: function selectedRows() {
        var _this$$refs$table3;
        return (_this$$refs$table3 = this.$refs.table) === null || _this$$refs$table3 === void 0 ? void 0 : _this$$refs$table3.selectedRows;
      }
    },
    methods: {
      refresh: function refresh() {
        var _this$$refs$table4;
        (_this$$refs$table4 = this.$refs.table) === null || _this$$refs$table4 === void 0 || _this$$refs$table4.refresh();
      },
      getData: function getData() {
        var _this$$refs$table5;
        return (_this$$refs$table5 = this.$refs.table) === null || _this$$refs$table5 === void 0 ? void 0 : _this$$refs$table5.getData();
      },
      setFilter: function setFilter(val) {
        var _this$$refs$table6;
        (_this$$refs$table6 = this.$refs.table) === null || _this$$refs$table6 === void 0 || _this$$refs$table6.setFilter(val);
      },
      setPage: function setPage(val) {
        var _this$$refs$table7;
        (_this$$refs$table7 = this.$refs.table) === null || _this$$refs$table7 === void 0 || _this$$refs$table7.setPage(val);
      },
      setOrder: function setOrder(column, asc) {
        var _this$$refs$table8;
        (_this$$refs$table8 = this.$refs.table) === null || _this$$refs$table8 === void 0 || _this$$refs$table8.setOrder(column, asc);
      },
      setLimit: function setLimit(limit) {
        var _this$$refs$table9;
        (_this$$refs$table9 = this.$refs.table) === null || _this$$refs$table9 === void 0 || _this$$refs$table9.setLimit(limit);
      },
      toggleChildRow: function toggleChildRow(rowId) {
        var _this$$refs$table10;
        (_this$$refs$table10 = this.$refs.table) === null || _this$$refs$table10 === void 0 || _this$$refs$table10.toggleChildRow(rowId);
      },
      getOpenChildRows: function getOpenChildRows() {
        var _this$$refs$table11;
        var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        return (_this$$refs$table11 = this.$refs.table) === null || _this$$refs$table11 === void 0 ? void 0 : _this$$refs$table11.getOpenChildRows(rows);
      },
      getResponseData: function getResponseData(response) {
        var _this$$refs$table12;
        return (_this$$refs$table12 = this.$refs.table) === null || _this$$refs$table12 === void 0 ? void 0 : _this$$refs$table12.getResponseData(response);
      },
      resetQuery: function resetQuery() {
        var _this$$refs$table13;
        (_this$$refs$table13 = this.$refs.table) === null || _this$$refs$table13 === void 0 || _this$$refs$table13.resetQuery();
      },
      resetSelectedRows: function resetSelectedRows() {
        var _this$$refs$table14;
        (_this$$refs$table14 = this.$refs.table) === null || _this$$refs$table14 === void 0 || _this$$refs$table14.resetSelectedRows();
      },
      selectRow: function selectRow(id) {
        var _this$$refs$table15;
        return (_this$$refs$table15 = this.$refs.table) === null || _this$$refs$table15 === void 0 ? void 0 : _this$$refs$table15.selectRow(id);
      },
      unselectRow: function unselectRow(id) {
        var _this$$refs$table16;
        return (_this$$refs$table16 = this.$refs.table) === null || _this$$refs$table16 === void 0 ? void 0 : _this$$refs$table16.unselectRow(id);
      },
      selectRows: function selectRows(ids) {
        var _this$$refs$table17;
        return (_this$$refs$table17 = this.$refs.table) === null || _this$$refs$table17 === void 0 ? void 0 : _this$$refs$table17.selectRows(ids);
      },
      unselectRows: function unselectRows(ids) {
        var _this$$refs$table18;
        return (_this$$refs$table18 = this.$refs.table) === null || _this$$refs$table18 === void 0 ? void 0 : _this$$refs$table18.unselectRows(ids);
      },
      toggleRow: function toggleRow(id) {
        var _this$$refs$table19;
        return (_this$$refs$table19 = this.$refs.table) === null || _this$$refs$table19 === void 0 ? void 0 : _this$$refs$table19.toggleRow(id);
      },
      selectAllRows: function selectAllRows() {
        var _this$$refs$table20;
        return (_this$$refs$table20 = this.$refs.table) === null || _this$$refs$table20 === void 0 ? void 0 : _this$$refs$table20.selectAllRows();
      },
      getRequestParams: function getRequestParams() {
        var _this$$refs$table21;
        return (_this$$refs$table21 = this.$refs.table) === null || _this$$refs$table21 === void 0 ? void 0 : _this$$refs$table21.getRequestParams();
      },
      setRequestParams: function setRequestParams(params) {
        var _this$$refs$table22;
        var sendRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        return (_this$$refs$table22 = this.$refs.table) === null || _this$$refs$table22 === void 0 ? void 0 : _this$$refs$table22.setRequestParams(params, sendRequest);
      },
      setCustomFilters: function setCustomFilters(params) {
        var _this$$refs$table23;
        var sendRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        return (_this$$refs$table23 = this.$refs.table) === null || _this$$refs$table23 === void 0 ? void 0 : _this$$refs$table23.setCustomFilters(params, sendRequest);
      },
      resetCustomFilters: require('../methods/reset-custom-filters')
    },
    provide: function provide() {
      var _this = this;
      return {
        slots: function slots() {
          return _this.$slots;
        }
      };
    },
    model: {
      prop: "data"
    },
    setup: function setup() {
      var tablewrapper = (0, _vue.ref)(null);
      return {
        tablewrapper: tablewrapper
      };
    },
    render: function render() {
      return (0, _vue.h)(RLServerTable, {
        url: this.url,
        columns: this.columns,
        name: this.name,
        options: this.options,
        ref: 'table'
      }, {
        "default": function _default(props) {
          return props.override ? (0, _vue.h)(props.override, {
            props: (0, _omit["default"])(props)
          }) : (0, _vue.createVNode)("div", {
            "class": "VueTables VueTables--" + props.source
          }, [(0, _vue.createVNode)("div", {
            "class": props.theme.row
          }, [(0, _vue.createVNode)("div", {
            "class": props.theme.column
          }, [!props.opts.filterByColumn && props.opts.filterable ? (0, _vue.createVNode)("div", {
            "class": "".concat(props.theme.field, " ").concat(props.theme.inline, " ").concat(props.theme.left, " VueTables__search")
          }, [props.slots.beforeFilter ? props.slots.beforeFilter() : '', (0, _vue.h)(_VtGenericFilter["default"]), props.slots.afterFilter ? props.slots.afterFilter() : '']) : '', props.slots.afterFilterWrapper ? props.slots.afterFilterWrapper() : '', (props.perPageValues.length > 1 || props.opts.alwaysShowPerPageSelect) && !props.opts.pagination.virtual ? (0, _vue.createVNode)("div", {
            "class": "".concat(props.theme.field, " ").concat(props.theme.inline, " ").concat(props.theme.right, " VueTables__limit")
          }, [props.slots.beforeLimit ? props.slots.beforeLimit() : '', (0, _vue.h)(_VtPerPageSelector["default"]), props.slots.afterLimit ? props.slots.afterLimit() : '']) : '', props.opts.pagination.dropdown && props.totalPages > 1 ? (0, _vue.createVNode)("div", {
            "class": "VueTables__pagination-wrapper"
          }, [(0, _vue.createVNode)("div", {
            "class": "".concat(props.theme.field, " ").concat(props.theme.inline, " ").concat(props.theme.right, " VueTables__dropdown-pagination")
          }, [(0, _vue.h)(_VtDropdownPagination["default"])])]) : '', props.opts.columnsDropdown ? (0, _vue.createVNode)("div", {
            "class": "VueTables__columns-dropdown-wrapper ".concat(props.theme.right, " ").concat(props.theme.dropdown.container)
          }, [(0, _vue.h)(_VtColumnsDropdown["default"])]) : ''])]), props.slots.beforeTable ? props.slots.beforeTable() : '', (0, _vue.createVNode)("div", {
            "class": "table-responsive VueTables__wrapper",
            "ref": "tablewrapper",
            "style": props.styles()
          }, [(0, _vue.h)(_VtTable["default"]), props.opts.pagination.virtual && !props.loading ? (0, _vue.h)(_Observer["default"], {
            onIntersect: function onIntersect() {
              props.setPage(props.page + 1);
            }
          }) : '']), props.slots.afterTable ? props.slots.afterTable() : '', props.opts.pagination.virtual || !props.opts.pagination.show ? '' : (0, _vue.h)(_VtPagination["default"]), props.opts.pagination.virtual || props.opts.pagination.dropdown ? (0, _vue.h)(_VtPaginationCount["default"]) : '']);
        }
      });
    }
  };
}