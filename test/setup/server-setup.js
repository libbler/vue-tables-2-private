import { createApp } from 'vue'
import { createStore } from 'vuex'
import { mount } from '@vue/test-utils'
import ServerTableModule from '../../compiled/v-server-table.js'

global.suite = 'Server';
global.source = 'server';
global.axios = require('axios');
global.moxios = require('moxios');

import data from './example-data.js';

const ServerTable = ServerTableModule.default || ServerTableModule;

if (withVuex()) suite+=' - Vuex';

beforeEach(()=>{
	global.run = runLater;
	moxios.install(axios);

	moxios.stubRequest(/get\-data.*/, {
		status:200,
		response:{
			data:data.slice(0,10),
			count:data.length
		}
	});

	createWrapper();

});

afterEach(()=>{
	moxios.uninstall(axios);
	safeUnmount();
});

function runLater(cb, done, timeout = 0) {
	moxios.wait(()=>{
		cb();
		done();
	}, timeout);
}

global.run = runLater;

global.requestHas = function(key, value) {
	var request = moxios.requests.mostRecent();
	expect(request.config.params[key]).toEqual(value);
}


global.createWrapper = function(options = {}, columns = null, slots = {}) {

	var params = {
		props:{
			name:'server',
			columns:columns?columns:['code','name','uri'],
			url:'get-data',
			options
		},
		slots,
		global: {
			plugins: withVuex() ? [createStore({})] : []
		}
	};

	global.wrapper = mount(ServerTable(createApp({}), {}), params);
	global.wrapper.destroy = global.wrapper.unmount.bind(global.wrapper);
	global.wrapper.vm.$destroy = global.wrapper.unmount.bind(global.wrapper);

}
