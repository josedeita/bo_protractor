/**
 * Created by ssierrao on 17/11/2016.
 */
var reassignStepsPo = require('../reassignSteps.po.js');

module.exports = function () {

    this.When(/^he clicks on Confirm$/, function () {
        var confirmButton = browser.findElement(by.id("myReassignTicketMessageConfirmButton"));
        confirmButton.click();

    });

    this.Then(/^he sees the assignation modal$/, function () {
        var confirmButton = browser.findElement(by.id("assignTicketModal"));
        return confirmButton != 'undefined';
    });
};