var moment = require('moment');

var dates = {

  new: function (s) {
    return moment(s).startOf('day');
  },

  format: function (d, f) {
    if (!d) {
      return '';
    }
    return moment(d).format(f || 'YYYY-MM-DD');
  },

  isSame: function (first, second) {
    return dates.new(first).isSame(dates.new(second));
  },

  weekday: function (d, i) {
    return moment(d).isoWeekday(i);
  },

  weekRange: function (d) {
    return dates.range(dates.weekday(d, 1), dates.weekday(d, 7));
  },

  range: function (start, end) {

    var current = moment(start);
    var r = [];

    while (current <= end) {
      r.push(moment(current));
      current.add('days', 1);
    }

    return r;

  },

};

module.exports = dates;
