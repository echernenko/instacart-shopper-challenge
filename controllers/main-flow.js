const Shopper = require('../models/shopper');
const Constants = require('../models/constants');

const shopperChallengeRoutes = (app) => {
    const { STATUSES } = Constants;
    const { REGIONS } = Constants;

    app.get('/', (req, res) => {
        // showing filled in application if available
        if (req.session.email) {
            return res.redirect(`/shopper?email=${req.session.email}`);
        }
        res.render('main-form', { REGIONS });
    });

    app.post('/shopper', (req, res) => {
        // due to dev app nature and in general assumption,
        // that email is unique indentifier - let's delete
        // before saving data all previous records with
        // the same email
        Shopper.destroy({
            where: {
                email: req.body.email,
            },
        });
        Shopper.upsert(req.body).then(() => {
            // set email to session
            // so application loads next time
            // with pre-filled date
            req.session.email = req.body.email;
            res.render('info-updated');
        });
    });

    app.get('/shopper', (req, res) => {
        const { email } = req.query;
        Shopper.findOne({
            where: {
                email,
            },
        }).then((shopper) => {
            res.render('main-form', { shopper, STATUSES, REGIONS });
        });
    });
};

module.exports = shopperChallengeRoutes;
