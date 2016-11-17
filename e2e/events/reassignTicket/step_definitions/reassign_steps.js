/**
 * Created by ssierrao on 15/11/2016.
 */
var reassignStepsPo = require('../reassignSteps.po.js');

module.exports = function () {
    this.Given(/^the distributor is on the Manage Tickets page$/, function () {
        var url = browser.baseUrl + '/events/ticketList/45';
        browser.driver.get(url);
     /*   return browser.driver.wait(function () {
            return expect(currentUrl).to.eventually.equal(url);
        }, 2000);*/
        return browser.driver.wait(function () {
            return browser.driver.getCurrentUrl().then(function (url) {
                return browser.baseUrl + '/events/ticketList/45'.test(url);
            });
        }, 30000);
    });

    this.Given(/^he has at least one assigned ticket$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.Given(/^he clicks on reassign button$/, function () {
        var modalButton = browser.findElement(by.id("testModal"));
        modalButton.click();
        next();
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

    /*--------------------------------------------------------cancelReassignTicket------------------------------------*/

    this.Given(/^the distributor has clicked on Reassign$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.Given(/^he sees the alert message$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.When(/^he clicks on Cancel$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.Then(
        /^The the alert message is closed and the distributor is back on the Manage Tickets page$/,
        function (callback) {
            // Write code here that turns the phrase above into concrete actions
            callback(null, 'pending');
        });

    this.Then(/^the ticket is still shown as assigned$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
};