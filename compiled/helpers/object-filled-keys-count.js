"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
module.exports = function (obj) {
  var count = 0;
  for (var prop in obj) {
    var isDateRange = _typeof(obj[prop]) == 'object';
    if (isDateRange || obj[prop] && (!isNaN(obj[prop]) || obj[prop].trim())) count++;
  }
  return count;
};