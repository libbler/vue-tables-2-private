"use strict";

module.exports = function (data, customFilters, customQueries) {
  var signature = JSON.stringify(customQueries) + '|' + data.map(function (row) {
    return row && row.id ? row.id : JSON.stringify(row);
  }).join(',');
  if (customFilters._vtCache && customFilters._vtCache.signature === signature) {
    return data.filter(function (row, index) {
      return customFilters._vtCache.passing[index];
    });
  }
  var passing;
  var passingRows = [];
  var filtered = data.filter(function (row) {
    passing = true;
    customFilters.forEach(function (filter) {
      var value = customQueries[filter.name];
      if (value && !filter.callback(row, value)) passing = false;
    });
    passingRows.push(passing);
    return passing;
  });
  customFilters._vtCache = {
    signature: signature,
    passing: passingRows
  };
  return filtered;
};