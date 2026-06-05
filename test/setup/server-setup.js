import { createApp } from 'vue'
import { createStore } from 'vuex'
import { mount } from '@vue/test-utils'
import ServerTableModule from '../../compiled/v-server-table.js'
import sinon from 'sinon'

global.suite = 'Server';
global.source = 'server';
global.axios = require('axios');

import data from './example-data.js';

const ServerTable = ServerTableModule.default || ServerTableModule;
let axiosGetStub;
let latestRequest;

if (withVuex()) suite+=' - Vuex';

beforeEach(()=>{
	global.run = runLater;
	latestRequest = null;
	axiosGetStub = sinon.stub(axios, 'get').callsFake((url, config = {}) => {
		latestRequest = {
			config: {
				url,
				...config
			}
		};

		return Promise.resolve({
			status: 200,
			data: {
				data:data.slice(0,10),
				count:data.length
			}
		});
	});

	createWrapper();

});

afterEach(()=>{
	axiosGetStub.restore();
	safeUnmount();
});

function runLater(cb, done, timeout = 0) {
	setTimeout(()=>{
		cb();
		done();
	}, timeout);
}

global.run = runLater;
global.latestRequest = function() {
	return latestRequest;
};

global.requestHas = function(key, value) {
	var request = global.latestRequest();
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
