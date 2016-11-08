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

    describe('When he selects the ADP option', function () {
        beforeEach(function () {
            src.waitElementPresent(homePage.reports);
            homePage.reports.click();
            src.waitElementPresent(add.genealogyOption);
            add.genealogyOption.click();
            browser.sleep(5000);
        });

        it('Then the user sees the fields: Report Title, Build Date, Company names, ' +
           'Company IDs, Personally Sponsored, Leg 1 Information, Leg 2 Information, ' +
           'Leg 3 Information and Other Legs Information, Leg 1 Volume, Leg 2 Volume, ' +
           'Leg 3 Volume and Other Legs Volume, next option and previous option', function () {
            expect(add.title_adp.isPresent()).toBe(true);
            expect(add.genealogyOption.isPresent()).toBe(true);
            expect(add.title_adp.isPresent()).toBe(true);
            expect(add.buildDate_adp.isPresent()).toBe(true);
            expect(add.companiesName_adp.isPresent()).toBe(true);
            expect(add.id_adp.isPresent()).toBe(true);
            expect(add.Sponsored_adp.isPresent()).toBe(true);
            expect(add.labelLeg1_adp.isPresent()).toBe(true);
            expect(add.volumeLeg1_adp.isPresent()).toBe(true);
            expect(add.labelLeg2_adp.isPresent()).toBe(true);
            expect(add.volumeLeg2_adp.isPresent()).toBe(true);
            expect(add.labelLeg3_adp.isPresent()).toBe(true);
            expect(add.volumeLeg3_adp.isPresent()).toBe(true);
            expect(add.labelOtherLegs_adp.isPresent()).toBe(true);
            expect(add.volumeOtherLegs_adp.isPresent()).toBe(true);
        });
        //if I need to go back to any step:
        //describe('go back to ')
    });
});
