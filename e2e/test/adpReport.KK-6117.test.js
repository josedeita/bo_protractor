var homePage = require('../pages/home.po.js');
var loginPage = require('../pages/login.po.js');
var adp = require('../pages/adpReport.po.js');
var add = new adp();
var src = require('../functions/source.js');

describe('Given a valid chinese distributor is logged into the backoffice and ' +
         'the distributor has access to the ADP report from the Rep/Allowed', function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    beforeAll(function() {
        loginPage.login('568','kyani@2016!');
    });

    afterAll(function(){
      browser.executeScript('window.sessionStorage.clear();');
      browser.executeScript('window.localStorage.clear();');
    });

    describe('When the distributor goes to the Report´s Menu', function () {
        beforeEach(function () {
            src.waitElementPresent(homePage.reports);
            homePage.reports.click();
        });

        it('Then validate the distributor sees the ADP submenu active', function () {
            src.waitElementPresent(add.genealogyOption);
            expect(add.genealogyOption.isPresent()).toBe(true);
        });
    });
});
