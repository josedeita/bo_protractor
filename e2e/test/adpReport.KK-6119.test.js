var homePage = require('../pages/home.po.js');
var loginPage = require('../pages/login.po.js');
var adp = require('../pages/adpReport.po.js');
var add = new adp();
var src = require('../functions/source.js');

describe('Given a distributor is outside of China and he is logged into the Backoffice' +
         'and the distributor does not have access to the ADP report from the Rep/Allowed', function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    beforeAll(function() {
        loginPage.login('512','kyani@2016!');
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

        it('Then he does not see the ADP submenu active.', function () {
            browser.driver.sleep(5000);
            expect(add.genealogyListSubmenu.isPresent()).toBe(true);
            /*it's the same option menu but with different link, so to validate
              the changes it's neccesary to check if it's a list or not*/
        });
    });
});
