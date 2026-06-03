import { createApp } from 'vue'
import { createStore } from 'vuex'
import { mount } from '@vue/test-utils'
import ClientTableModule from '../../compiled/v-client-table.js'
import EventBusModule from '../../compiled/bus.js'
import data from './example-data.js'
import cloneDeep from 'lodash-es/cloneDeep'

const ClientTable = ClientTableModule.default || ClientTableModule;
const EventBus = EventBusModule.default || EventBusModule;
EventBus.$emit = EventBus.emit.bind(EventBus);
global.VueEvent = EventBus;
global.suite = 'Client';
global.source = 'client';

const app = createApp({})

function createTestStore() {
	return createStore({
		modules: {
			client: {
				namespaced: true,
				mutations: {
					SET_CUSTOM_FILTER(state, payload) {
						EventBus.emit(`vue-tables.client.filter::${payload.filter}`, payload.value);
					}
				}
			}
		}
	});
}

if (withVuex()) {
	suite+=" - Vuex";
}

function runLater(cb, done, timeout = 0) {
	setTimeout(()=>{
		cb();
		done();
	},timeout);
}

global.run = runLater;

beforeEach(function() {
	global.run = runLater;
	createWrapper();
});

afterEach(function() {
	safeUnmount();
})

global.createWrapper = function(options = {debounce:0, resizableColumns:false}, columns = null, slots = {}, dataOverride = null, scopedSlots = {}, events = {}) {

	if (EventBus.all && EventBus.all.clear) EventBus.all.clear();

	var d = cloneDeep(data);

	let params = {
		props:{
			name:'client',
			columns:columns?columns:['code','name','uri'],
			data: dataOverride?dataOverride:d,
			options
		},
		slots: Object.assign({}, slots, scopedSlots),
		global: {
			plugins: withVuex() ? [createTestStore()] : []
		},
		attrs: events
	};

	global.wrapper = mount(ClientTable(app,{}), params);
	global.wrapper.destroy = global.wrapper.unmount.bind(global.wrapper);
	global.wrapper.vm.$destroy = global.wrapper.unmount.bind(global.wrapper);

	return wrapper;
}
