var homePage = require('../pages/home.po.js');
var loginPage = require('../pages/login.po.js');
var src = require('../functions/source.js');

describe('Home page', function () {

    it('should Report button exist', function () {
        loginPage.login('502','kyani@2016!');
        console.log("homePage.reports");
        src.waitElementPresent(homePage.reports);
        expect(homePage.reports.isPresent()).toBe(true);
    });
});
