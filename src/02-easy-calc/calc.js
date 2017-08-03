// Create a calculator application
// This will take two dates and return the number of business days between them.

var start = new Date(Date.parse('2017-07-01'));
var end = new Date(Date.parse('2017-07-31'));

var getBusinessDays = function (start, end) {
    var days = Math.round(Math.abs((start.getTime() - end.getTime()) / (24 * 60 * 60 * 1000)));
    var businessDays = 0;
    var date = new Date(start.getDate());
    for (var i = 0; i < days; i++) {
        var d = date.getDay();

        if (d !== 0 && d !== 6) {
            businessDays++;
        }

        date.setDate(date.getDate() + 1);
    }

    return businessDays;
};

var businessDays = getBusinessDays(start, end);

console.log('There are', businessDays, 'business days between', start, 'and', end);
