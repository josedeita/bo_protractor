// Scenario: 03 - Navigate to Kyani Shop from Manage Tickets page
module.exports = function () {

    this.Then(/^he sees first ticket card$/, function () {
        return expect(browser.findElement(by.css('.my-ticket'))).to.eventually.exist;
    });

    this.Then(/^he sees the My Ticket label$/, function () {
        var ticketLabel = browser.findElement(by.css('.my-ticket-label'));
        return expect(ticketLabel.getText()).to.eventually.exist;
   });

   this.Then(/^he sees the Ticket Number label$/, function () {
       var ticketNumber = browser.findElement(by.css('.my-ticket-number'));
       return expect(ticketNumber.getText()).to.eventually.exist;
   });

    this.Then(/^he sees the ticket number$/, function () {
        var ticketNumber = browser.findElement(by.css('.my-ticket-number'));
        return expect(ticketNumber.getText()).to.eventually.exist;
    });

    this.Then(/^he sees the register icon$/, function () {
        var registerIcon = browser.findElement(by.css('.icon-register'));
        return expect(registerIcon.getText()).to.eventually.exist;
    });

    this.Then(/^he sees the register option$/, function () {
        var registerOption = browser.findElement(by.css('.register-option'));
        return expect(registerOption).to.eventually.be.exist;
    });

};
