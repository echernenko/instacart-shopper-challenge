const Sequelize = require('sequelize');

const { Op } = Sequelize;
const sequelize = new Sequelize('mydb', null, null, {
    host: 'localhost',
    dialect: 'sqlite',
    // disable logging
    logging: false,
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
    storage: './db/applicants.sqlite3',
    operatorsAliases: Op,
});

module.exports = sequelize;

