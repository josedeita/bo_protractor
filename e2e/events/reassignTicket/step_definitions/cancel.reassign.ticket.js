/**
 * Created by ssierrao on 17/11/2016.
 */
var reassignStepsPo = require('../reassignSteps.po.js');

module.exports = function () {
    this.Given(/^the distributor has clicked on Reassign$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.Given(/^he sees the alert message$/, function () {
        var modal = browser.findElement(by.id("myReassignTicketModal"));
        return expect(modal).to.eventually.exist;
    });

    this.When(/^he clicks on Cancel$/, function () {
        var closeButton = browser.findElement(by.id("myReassignTicketCancelButton"));
        closeButton.click();
    });

    this.Then(
        /^the alert message is closed and the distributor is back on the Manage Tickets page$/,
        function () {
            var modal = browser.findElement(by.id("myReassignTicketModal"));
            return modal == 'undefined';
        });

    this.Then(/^the ticket is still shown as assigned$/, function () {
        console.log(
            'This method is not implemented yet ' + '\'The ticket is still shown as assigned\'');
        return true;
    });
};