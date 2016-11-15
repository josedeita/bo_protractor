var helper = require('../../support/helper');
var eventsPo = require('../../events/events.po.js');

module.exports = function () {
    this.Before(function () {
        helper.login();
    });

    this.Given(/^that the distributor is in the BO$/, function () {
        var currentUrl = browser.getCurrentUrl();
        var url = browser.baseUrl + '/home';

        return browser.driver.wait(function () {
            return expect(currentUrl).to.eventually.equal(url);
        }, 2000);
    });

    this.Given(/^the distributor clicks on Events$/, function () {
        eventsPo.openEvents();
        browser.sleep(5000);
    });
};
