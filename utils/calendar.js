const Calendar = {
    getWeek(date) {
        // calculating Monday
        const dayNumber = date.getDay();
        const monday = date.getDate() - dayNumber + (dayNumber === 0 ? -6 : 1);

        // calculating period days
        const firstDay = new Date(date.setDate(monday));
        const startDateString = `${firstDay.getFullYear()}-${firstDay.getMonth() + 1}-${firstDay.getDate()}`;
        // forming output string
        return `${startDateString}`;
    },
    convertDateForQuery(date) {
        const dateArr = date.split('-');
        const dateObj = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]);
        return dateObj;
    },
};

module.exports = Calendar;
