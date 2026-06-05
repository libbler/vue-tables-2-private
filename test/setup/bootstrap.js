require('@babel/register');

require('./setup');

global.SVGElement = window.SVGElement;
global.Element = window.Element;

global.atob = function(str) {
	return Buffer.from(String(str), 'base64').toString('binary');
};

global.btoa = function(str) {
	return Buffer.from(String(str), 'binary').toString('base64');
};
