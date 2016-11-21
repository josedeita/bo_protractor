/**
 * Created by ssierrao on 17/11/2016.
 */

module.exports = function () {

    this.Then(/^he sees the 'Assign Ticket' label$/, function () {
        var ticketMessage = browser.findElement(by.id("ticketMessage"));
        return expect(ticketMessage).to.eventually.exist;
    });

    this.Then(/^he sees the ticket number$/, function () {
        var ticketNumber = browser.findElement(by.id("ticketNumber"));
        return expect(ticketNumber).to.eventually.exist;
    });

    this.Then(/^he sees the 'Distributor ID' label$/, function () {
        var distributorId = browser.findElement(by.id("distributorId"));
        return expect(distributorId).to.eventually.exist;
    });

    this.Then(/^he sees the ID field$/, function () {
        var distributorInput = browser.findElement(by.id("distributorInput"));
        return expect(distributorInput).to.eventually.exist;
    });

    this.Then(/^he sees the next button with it's icon$/, function () {
        var nextButton = browser.findElement(by.id("nextButton"));
        return expect(nextButton).to.eventually.exist;
    });

    this.Then(/^he sees the 'My invitee is a guest' option$/, function () {
        var myInviteeIsAGuest = browser.findElement(by.id("myInviteeIsAGuest"));
        return expect(myInviteeIsAGuest).to.eventually.exist;
    });

    this.Then(/^he sees the X to close the modal$/, function () {
        var assignTicketToDistributorCloseButton = browser.findElement(by.id("assignTicketToDistributorCloseButton"));
        return expect(assignTicketToDistributorCloseButton).to.eventually.exist;
    });
};