"use strict";

module.exports = function () {
  return this.$scopedSlots["default"]({
    source: this.source,
    theme: this.theme,
    opts: this.opts,
    perPageValues: this.perPageValues,
    totalPages: this.totalPages,
    slots: this.$parent.$slots,
    stickyHeader: this.opts.pagination.infinite,
    override: this.componentsOverride.dataTable
  });
};