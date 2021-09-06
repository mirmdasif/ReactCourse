function addCalendarEntry(event, date, len, timeout) {
  date = typeof date === 'undefined' ? new Date().getTime() : date;
  len = typeof len === 'undefined' ? 60 : len;
  timeout = typeof timeout === 'undefined' ? 1000 : timeout;
}

addCalendarEntry('meeting');

function addCalendarEntry2(event, date, len, timeout) {
  date = date || new Date().getTime();
  len = len || 60;
  timeout = timeout || 1000;
}

addCalendarEntry2('meeting')
