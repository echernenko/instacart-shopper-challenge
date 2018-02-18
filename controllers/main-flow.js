const Shopper = require('../models/shopper');
const Constants = require('../models/constants');

const shopperChallengeRoutes = (app) => {

    const STATUSES = Constants.STATUSES;

    app.post('/shopper', (req, res) => {
        // due to dev app nature and in general assumption,
        // that email is unique indentifier - let's delete
        // before saving data all previous records with
        // the same email
        Shopper.destroy({
            where: {
                email: req.body.email
            }
        });
        Shopper.upsert(req.body).then(() => {
            // set email on session
            // so application loads next time
            req.session.email = req.body.email;
            res.render('info-updated');
        });
    });

    app.get('/shopper', (req, res) => {
        const { email } = req.query;
        Shopper.findOne({
            where: {
                email
            },
            order: [['createdAt', 'DESC']]
        }).then((shopper) => {
            res.render('main-form', { shopper, STATUSES });
        });
    });

};

module.exports = shopperChallengeRoutes;
