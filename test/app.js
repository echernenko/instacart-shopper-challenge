const test = require('tape');
const request = require('supertest');
const app = require('../app');
// object to test app sceleton
// TODO: implement posting data to /shopper
// and then checking same endpoint for it
const appStructure = {
    '/': 'html'
};

for (let prop in appStructure) {

    test('Checking endpoint ' + prop, (t) => {
        request(app)
            .get(prop)
            .expect('Content-Type', new RegExp(appStructure[prop]))
            .expect(200)
            .end((err, res) => {
                t.error(err, 'endpoint is alive');
                t.end();
            });
    });
}

