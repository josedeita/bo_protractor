var helper = require('../../support/helper');
var eventsPo = require('../events.po.js');

module.exports = function () {
    this.Before(function () {
        helper.login();
    });

    // Background
    this.Given(/^that the distributor is in the BO$/, function () {
        var currentUrl = browser.getCurrentUrl();
        var url = browser.baseUrl + '/home';

        return browser.driver.wait(function () {
            return expect(currentUrl).to.eventually.equal(url);
        }, 2000);
    });

    this.Given(/^the distributor clicks on Events$/, function () {
        eventsPo.openEvents();
        browser.sleep(10000);
    });

    // Scenario: Show message when there are no events
    this.Given(/^That there aren't any events$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.When(/^the distributor see the Events page$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.Then(/^he sees a message that says "([^"]*)"$/, function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
};
