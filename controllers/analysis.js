const Shopper = require('../models/shopper');
const CalendarUtil = require('../utils/calendar');
const Constants = require('../models/constants');

const funnelRoutes = (app) => {
    // default analysis data
    const defaultData = {};
    const { STATUSES } = Constants;
    STATUSES.forEach((status) => {
        defaultData[status] = 0;
    });

    app.get('/analysis.json', (req, res) => {
        const startDate = req.query.start_date;
        const endDate = req.query.end_date;
        if (!startDate || !endDate) {
            return res.json({
                error: 'Please enter start_date and/or end_date',
            });
        }
        Shopper.findAll({
            where: {
                createdAt: {
                    gt: CalendarUtil.convertDateForQuery(startDate),
                    lt: CalendarUtil.convertDateForQuery(endDate),
                },
            },
            order: [['created_at', 'ASC']],
        }).then((shoppers) => {
            const weeks = {};
            shoppers.forEach((shopper) => {
                const calendarWeek = CalendarUtil.getWeek(shopper.createdAt);
                weeks[calendarWeek] = weeks[calendarWeek] || Object.assign({}, defaultData);
                weeks[calendarWeek][shopper.workflow_state]++;
            });
            res.json(weeks);
        });
    });
};

module.exports = funnelRoutes;

