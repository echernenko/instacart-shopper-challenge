const Calendar = {
    getWeek(date) {
        // calculating Monday
        const dayNumber = date.getDay();
        const monday = date.getDate() - dayNumber + (dayNumber === 0 ? -6 : 1);
        // and Sunday
        const sunday = monday + 6;

        // calculating period days
        const firstDay = new Date(date.setDate(monday));
        const lastDay = new Date(date.setDate(sunday));
        const startDateString = `${firstDay.getFullYear()}-${firstDay.getMonth() + 1}-${firstDay.getDate()}`;
        // TODO: fix it better
        let endYear = lastDay.getFullYear();
        let endMonth = lastDay.getMonth() + 1;
        let endDate = lastDay.getDate();
        if (firstDay.getDate() > endDate){
            endMonth++;
            if (endMonth > 12) {
                endMonth = 1;
                endYear++;
            }
        }
        // end of fix
        const endDateString = `${endYear}-${endMonth}-${endDate}`;
        // forming output string
        return `${startDateString}-${endDateString}`;
    },
    convertDateForQuery(date) {
        const dateArr = date.split('-');
        const dateObj = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]);
        return dateObj;
    },
};

module.exports = Calendar;
