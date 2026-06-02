global.moment = require('moment');
// setup JSDOM
require('jsdom-global')(undefined, { url: 'http://localhost/' })
// window.localStorage = require('mock-local-storage');
// make expect available globally
var expectModule = require('expect');
global.expect = expectModule.expect || expectModule.default || expectModule;

if (!Object.getOwnPropertyDescriptor(Array.prototype, 'wrappers')) {
	Object.defineProperty(Array.prototype, 'wrappers', {
		get: function() {
			return this;
		}
	});
}

var originalWarn = console.warn;
console.warn = function() {
	if (typeof arguments[0] === 'string' && arguments[0].indexOf('[Vue warn]') === 0) return;
	return originalWarn.apply(console, arguments);
}

global.vm = function() {
	return wrapper.vm;
}

global.see = function(text, selector) {
	var el = selector?wrapper.find(selector):wrapper;

	if (!text) {
		expect(el.text()).toEqual(text);
	}

	expect(el.text()).toContain(text);

}

global.not_see = function(text, selector) {
	var el = selector?wrapper.find(selector):wrapper;

	expect(el.text()).not.toContain(text);
}

global.getHeading = function(cellIndex) {
	return wrapper.find('table thead tr:first-child th:nth-child(' + cellIndex + ')')
}

global.seeInHeadings = function(text, cellIndex) {
	see(text, 'table thead tr:first-child th:nth-child(' + cellIndex + ')');
}

global.exists = function(selector, scope = null) {
	var w = scope?wrapper.find(scope):wrapper;
	expect(w.find(selector).exists()).toBe(true);
}

global.not_exists = function(selector, scope = null) {
	var w = scope?wrapper.find(scope):wrapper;
	expect(w.find(selector).exists()).toBe(false);
}

global.count = function(selector, count) {
	var wrappers = wrapper.findAll(selector).length;
	expect(wrappers).toEqual(count);
}

global.setOptions = function(options) {
	if (typeof createWrapper === 'function') {
		safeUnmount();
		return createWrapper(options);
	}

	wrapper.setProps({options});
}

global.click = function(selector) {
	wrapper.find(selector).trigger('click');
}

global.type = function(selector, text) {
	var w = wrapper.find(selector);
	w.element.value = text;
	w.trigger('keyup');
}

global.select = function(selector, option) {
	var w = wrapper.find(selector);
	w.element.value = option;
	w.trigger('change');
}

global.withVuex = function() {
	return typeof useVuex!='undefined';
}

global.getEventData = function(event) {

	var emitted = wrapper.emitted()[event];
	return emitted && emitted[0] ? emitted[0][0] : undefined;

}

global.eventEmitted = function(event, payload) {

	var emitted = wrapper.emitted();

	expect(emitted[event]).toBeTruthy();

	if (payload) expect(emitted[event][0][0]).toEqual(payload);
}

global.enterQuery = function(key, selector, query, method, fieldType='input') {
	if (method==='UI') {
		fieldType==='input'?type(selector,query):select(selector, query);
	} else {
		var value = key?{[key]:query}:query;
		vm().setFilter(value);
	}
}

global.gotoPage = function(page) {
	click('.VuePagination ul li:nth-child('  + (page+2) + ') button');
}

global.safeUnmount = function() {
	if (!global.wrapper) return;

	try {
		global.wrapper.unmount();
	} catch (e) {
		// Some legacy render functions produce null vnodes during Vue 3 teardown.
	}

	global.wrapper = null;
}
