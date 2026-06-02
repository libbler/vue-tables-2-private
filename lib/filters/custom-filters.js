module.exports = function(data, customFilters, customQueries) {
  var signature = JSON.stringify(customQueries) + '|' + data.map(row => row && row.id ? row.id : JSON.stringify(row)).join(',');

  if (customFilters._vtCache && customFilters._vtCache.signature === signature) {
    return data.filter((row, index) => customFilters._vtCache.passing[index]);
  }

  var passing;
  var passingRows = [];

  var filtered = data.filter(function(row) {

  passing = true;

  customFilters.forEach(function(filter) {
    var value = customQueries[filter.name];
    if (value && !filter.callback(row, value))
      passing = false;
  });

  passingRows.push(passing);

  return passing;

});

  customFilters._vtCache = {signature, passing: passingRows};

  return filtered;
}
