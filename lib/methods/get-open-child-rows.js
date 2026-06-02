module.exports = function(rows = null) {

    if (!this.opts.childRow || typeof this.opts.childRow==='function' ) {
        throw new Error('vue-tables-3: Child row undefined or not a component');
     }

    var Rows = rows?this.openChildRows.filter(row=>rows.includes(row)):this.openChildRows;

    if (!Rows.length) return [];

    var data = this.source === 'client' ? this.filteredData : this.tableData;

    return Rows
        .map(rowId => data.find(row => row[this.opts.uniqueKey] === rowId))
        .filter(Boolean)
        .map(row => ({data: row}));
}
