let date = new Date(2012, 0, 3);  // 3 Jan 2012
console.log( getWeekDay(date) );

function getWeekDay(date){
    let weekdays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return weekdays[date.getDay()];
}