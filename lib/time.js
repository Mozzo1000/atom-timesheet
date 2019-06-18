'use babel';

var moment = require('moment-timezone');
var today = new Date();

export default {
  get_year() {
    var year = String(today.getFullYear());
    return year;
  },

  get_month() {
    var month = String(today.getMonth() + 1).padStart(2, '0');
    return month;
  },

  get_day() {
    var day = String(today.getDate()).padStart(2, '0');
    return day;
  },

  get_time() {
    var time = String((today.getHours()<10?'0':'') + today.getHours() + (today.getMinutes()<10?'0':'') + today.getMinutes());
    return time;
  },

  get_timezone() {
    if( atom.config.get('atom-timesheet.override_timezone') === "") {
      timezone = moment.tz.guess();
    }else {
      timezone = atom.config.get('atom-timesheet.override_timezone');
    }
    return timezone;
  }
}
