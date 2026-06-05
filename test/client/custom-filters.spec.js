describe(suite + ': Custom Filters', ()=>{

    it("applies custom filters", (done)=>{

        createWrapper({
            customFilters:[
                {
                    name:'alpha',
                    callback: function(row, value) {
                        return row.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
                    }
                }
            ]
        });

        if (withVuex()) {
            vm().$store.commit('client/SET_CUSTOM_FILTER', {filter:'alpha', value:'zambia'});
        } else {
            VueEvent.$emit('vue-tables.client.filter::alpha', 'zambia');
        }

       run(()=>{
            see('Zambia', '.VueTables__table');
            not_see('Zimbabwe', '.VueTables__table');
       }, done);
    });
});
