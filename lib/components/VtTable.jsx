import RLTable from "./renderless/RLTable";
import VtTableHead from "./VtTableHead";
import VtTableBody from "./VtTableBody";

export default {
    name: 'VtTable',
    inject: ['setRef'],
    components: {RLTable, VtTableHead, VtTableBody},
    mounted: function mounted() {
        this.setRef('table', this.$refs.table);
    },
    render() {
        return <r-l-table scopedSlots={
            {
                default: function (props) {

                    var caption = props.caption ? <caption>{props.caption}</caption> : '';

                    return props.override ? h(props.override, {attrs: {props}}) :
                        <table
                            class={props.tableAttrs.class}
                            summary={props.tableAttrs.summary}
                            style={'border-collapse: collapse; width:100%'}
                            ref="table"
                        >
                            {caption}
                            <vt-table-head/>
                            {props.slots.beforeBody}
                            <vt-table-body ref="vt_table_body"/>
                            {props.slots.afterBody}
                        </table>
                }
            }
        }
            >
            </r-l-table>
        }
}
