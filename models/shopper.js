const sequelize = require('../db/db-config');
const DataTypes = require('sequelize/lib/data-types');

const Shopper = sequelize.define('shopper', {
    firstname: {
        type: DataTypes.STRING,
        required: true
    },
    lastname: {
        type: DataTypes.STRING,
        required: true
    },
    region: {
        type: DataTypes.STRING,
        required: true
    },
    phone: {
        type: DataTypes.STRING,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        required: true
    },
    phone_type: {
        type: DataTypes.STRING,
        required: true
    },
    source: {
        type: DataTypes.STRING,
        required: false
    },
    over_21: {
        type: DataTypes.BOOLEAN,
        required: false
    },
    reason: {
        type: DataTypes.TEXT,
        required: false
    },
    workflow_state: {
        type: DataTypes.STRING,
        required: true,
        defaultValue: 'applied'
    },
}, {
    freezeTableName: true
});

Shopper.sync();

module.exports = Shopper;
