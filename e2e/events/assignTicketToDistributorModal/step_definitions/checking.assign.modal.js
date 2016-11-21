/**
 * Created by ssierrao on 17/11/2016.
 */

module.exports = function () {

    this.Then(/^he sees the 'Assign Ticket' label$/, function (callback) {
        var ticketMessage = browser.findElement(by.id("ticketMessage"));
        return ticketMessage != 'undefined';
    });

    this.Then(/^he sees the ticket number$/, function (callback) {
        var ticketNumber = browser.findElement(by.id("ticketNumber"));
        return ticketNumber != 'undefined';
    });

    this.Then(/^he sees the 'Distributor ID' label$/, function (callback) {
        var distributorId = browser.findElement(by.id("distributorId"));
        return distributorId != 'undefined';
    });

    this.Then(/^he sees the ID field$/, function (callback) {
        var distributorInput = browser.findElement(by.id("distributorInput"));
        return distributorInput != 'undefined';
    });

    this.Then(/^he sees the next button with it's icon$/, function (callback) {
        var nextButton = browser.findElement(by.id("nextButton"));
        return nextButton != 'undefined';
    });

    this.Then(/^he sees the 'My invitee is a guest' option$/, function (callback) {
        var myInviteeIsAGuest = browser.findElement(by.id("myInviteeIsAGuest"));
        return myInviteeIsAGuest != 'undefined';
    });

    this.Then(/^he sees the X to close the modal$/, function (callback) {
        var assignTicketToDistributorCloseButton = browser.findElement(by.id("assignTicketToDistributorCloseButton"));
        return assignTicketToDistributorCloseButton != 'undefined';
    });
};