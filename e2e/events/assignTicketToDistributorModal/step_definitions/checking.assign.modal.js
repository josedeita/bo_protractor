/**
 * Created by ssierrao on 17/11/2016.
 */

module.exports = function () {

    this.Then(/^he sees the 'Assign Ticket' label$/, function (callback) {
        var ticketMessage = browser.findElement(by.id("ticketMessage"));
        console.log(ticketMessage.textContent);
        console.log(ticketMessage.innerText);
        return ticketMessage != 'undefined';
    });

    this.Then(/^he sees the ticket number$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.Then(/^he sees the 'Distributor ID' label$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.Then(/^he sees the ID field$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.Then(/^he sees the next button with it's icon$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.Then(/^he sees the 'My invitee is a guest' option$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.Then(/^he sees the X to close the modal$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
};