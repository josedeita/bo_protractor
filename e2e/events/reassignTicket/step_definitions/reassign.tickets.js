/**
 * Created by ssierrao on 17/11/2016.
 */

var reassignStepsPo = require('../reassignSteps.po.js');

var checkUrl = function (url) {
    return function () {
        return browser.getCurrentUrl().then(function (actualUrl) {
            return url === actualUrl;
        });
    };
};

module.exports = function () {

    this.Given(/^the distributor is on the Manage Tickets page$/, function () {
        var nextUrl = browser.baseUrl + '/events/ticketsList/45';
        browser.driver.get(nextUrl);
        return browser.wait(checkUrl(nextUrl), 5000);
    });

    this.Given(/^he has at least one assigned ticket$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.Given(/^he clicks on reassign button$/, function () {
        var modalButton = browser.findElement(by.id("testModal"));
        modalButton.click();

    });

    this.Then(/^he sees the a alert message$/, function () {
        var reassignModal = browser.findElement(by.id("myReassignTicketMessage"));
        return expect(reassignModal).to.eventually.exist;
    });

    this.Then(/^he sees the alert icon$/, function () {
        var reassignModal = browser.findElement(by.id("myReassignTicketMessageAlertIcon"));
        return expect(reassignModal).to.eventually.exist;

    });

    this.Then(
        /^he sees the alert text 'Are you sure you want to reassign this ticket to someone else\?'$/,
        function () {
            var reassignModal = browser.findElement(by.id("myReassignTicketModal"));
            return expect(reassignModal).to.eventually.exist;

        });

    this.Then(/^he sees the X$/, function () {
        var reassignModal = browser.findElement(by.id("myReassignTicketMessageCloseButton"));
        return expect(reassignModal).to.eventually.exist;
    });

    this.Then(/^he sees the 'Cancel' option$/, function () {
        var reassignModal = browser.findElement(by.id("myReassignTicketCancelButton"));
        return expect(reassignModal).to.eventually.exist;

    });

    this.Then(/^he sees the 'Confirm' option$/, function () {
        var reassignModal = browser.findElement(by.id("myReassignTicketMessageConfirmButton"));
        return expect(reassignModal).to.eventually.exist;
    });

};