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
var _VtPaginationCount = _interopRequireDefault(require("./VtPaginationCount"));
var _Observer = _interopRequireDefault(require("./Observer"));
var _emittedEvents = _interopRequireDefault(require("../helpers/emitted-events"));
var _omit = _interopRequireDefault(require("../helpers/omit"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _default2(RLClientTable) {
  return {
    name: 'VtClientTable',
    emits: _emittedEvents["default"].concat(['update', 'input']),
    components: {
      VtPerPageSelector: _VtPerPageSelector["default"],
      VtTable: _VtTable["default"],
      VtPagination: _VtPagination["default"],
      VtDropdownPagination: _VtDropdownPagination["default"],
      VtColumnsDropdown: _VtColumnsDropdown["default"],
      VtGenericFilter: _VtGenericFilter["default"],
      RLClientTable: RLClientTable,
      VtPaginationCount: _VtPaginationCount["default"]
    },
    props: {
      columns: {
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
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
    methods: {
      setLoadingState: function setLoadingState(isLoading) {
        if (this.$refs.table) {
          this.$refs.table.loading = isLoading;
        }
      },
      setFilter: function setFilter(val) {
        var _this$$refs$table;
        (_this$$refs$table = this.$refs.table) === null || _this$$refs$table === void 0 || _this$$refs$table.setFilter(val);
      },
      setPage: function setPage(val) {
        var _this$$refs$table2;
        (_this$$refs$table2 = this.$refs.table) === null || _this$$refs$table2 === void 0 || _this$$refs$table2.setPage(val);
      },
      setOrder: function setOrder(column, asc) {
        var _this$$refs$table3;
        (_this$$refs$table3 = this.$refs.table) === null || _this$$refs$table3 === void 0 || _this$$refs$table3.setOrder(column, asc);
      },
      setLimit: function setLimit(limit) {
        var _this$$refs$table4;
        (_this$$refs$table4 = this.$refs.table) === null || _this$$refs$table4 === void 0 || _this$$refs$table4.setLimit(limit);
      },
      toggleChildRow: function toggleChildRow(rowId) {
        var _this$$refs$table5;
        (_this$$refs$table5 = this.$refs.table) === null || _this$$refs$table5 === void 0 || _this$$refs$table5.toggleChildRow(rowId);
      },
      getOpenChildRows: function getOpenChildRows() {
        var _this$$refs$table6;
        var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        return (_this$$refs$table6 = this.$refs.table) === null || _this$$refs$table6 === void 0 ? void 0 : _this$$refs$table6.getOpenChildRows(rows);
      },
      resetQuery: function resetQuery() {
        var _this$$refs$table7;
        (_this$$refs$table7 = this.$refs.table) === null || _this$$refs$table7 === void 0 || _this$$refs$table7.resetQuery();
      },
      setCustomFilters: function setCustomFilters(params) {
        var _this$$refs$table8;
        var sendRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return (_this$$refs$table8 = this.$refs.table) === null || _this$$refs$table8 === void 0 ? void 0 : _this$$refs$table8.setCustomFilters(params, sendRequest);
      },
      downloadCsv: function downloadCsv() {
        var _this$$refs$table9;
        var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'table.csv';
        return (_this$$refs$table9 = this.$refs.table) === null || _this$$refs$table9 === void 0 ? void 0 : _this$$refs$table9.downloadCsv(filename);
      }
    },
    computed: {
      filteredData: function filteredData() {
        var _this$$refs$table0;
        return (_this$$refs$table0 = this.$refs.table) === null || _this$$refs$table0 === void 0 ? void 0 : _this$$refs$table0.filteredData;
      },
      allFilteredData: function allFilteredData() {
        var _this$$refs$table1;
        return (_this$$refs$table1 = this.$refs.table) === null || _this$$refs$table1 === void 0 ? void 0 : _this$$refs$table1.allFilteredData;
      },
      filtersCount: function filtersCount() {
        var _this$$refs$table10;
        return (_this$$refs$table10 = this.$refs.table) === null || _this$$refs$table10 === void 0 ? void 0 : _this$$refs$table10.filtersCount;
      }
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
      return (0, _vue.h)(RLClientTable, {
        data: this.data,
        columns: this.columns,
        name: this.name,
        options: this.options,
        ref: 'table'
      }, {
        "default": function _default(props) {
          return props.override ? (0, _vue.h)(props.override, {
            props: (0, _omit["default"])(props, 'override')
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
            "ref": "tablewrapper"
          }, [(0, _vue.h)(_VtTable["default"]), props.opts.pagination.virtual ? (0, _vue.h)(_Observer["default"], {
            onIntersect: function onIntersect() {
              props.setPage(props.page + 1);
            }
          }) : '']), props.slots.afterTable ? props.slots.afterTable() : '', props.opts.pagination.virtual || !props.opts.pagination.show ? '' : (0, _vue.h)(_VtPagination["default"]), props.opts.pagination.virtual || props.opts.pagination.dropdown ? (0, _vue.h)(_VtPaginationCount["default"]) : '']);
        }
      });
    }
  };
}
