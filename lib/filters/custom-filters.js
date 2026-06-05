module.exports = function(data, customFilters, customQueries) {
  if (!customFilters.length) return data;

  var signature = JSON.stringify({
    customQueries,
    filters: customFilters.map(filter => filter.name),
    data
  });

  if (this && this._customFiltersCache && this._customFiltersCache.signature === signature) {
    return this._customFiltersCache.filtered;
  }

  var passing;

  var filtered = data.filter(function(row) {

  passing = true;

  customFilters.forEach(function(filter) {
    var value = customQueries[filter.name];
    if (value && !filter.callback(row, value))
      passing = false;
  });

  return passing;

});

  if (this) {
    this._customFiltersCache = {
      signature,
      filtered
    };
  }

  return filtered;
}
