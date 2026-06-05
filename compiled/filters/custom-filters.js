"use strict";

module.exports = function (data, customFilters, customQueries) {
  if (!customFilters.length) return data;
  var signature = JSON.stringify({
    customQueries: customQueries,
    filters: customFilters.map(function (filter) {
      return filter.name;
    }),
    data: data
  });
  if (this && this._customFiltersCache && this._customFiltersCache.signature === signature) {
    return this._customFiltersCache.filtered;
  }
  var passing;
  var filtered = data.filter(function (row) {
    passing = true;
    customFilters.forEach(function (filter) {
      var value = customQueries[filter.name];
      if (value && !filter.callback(row, value)) passing = false;
    });
    return passing;
  });
  if (this) {
    this._customFiltersCache = {
      signature: signature,
      filtered: filtered
    };
  }
  return filtered;
};