import resizableColumns from "../helpers/resizeable-columns";

module.exports = {
    columns() {
        if (this.opts.resizableColumns) {
            this.$nextTick(() => {
                resizableColumns(
                    this.refs.table,
                    this.hasChildRow,
                    this.opts.childRowTogglerFirst,
                    this.resizableColumns,
                    this.opts.stickyHeader
                )
            })
        }
    }
}
