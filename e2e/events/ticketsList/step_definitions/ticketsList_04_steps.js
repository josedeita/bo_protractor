// Scenario: 04 - Navigate to Manage Tickets from the Events page and see the events information

module.exports = function () {

    this.Then(/^he sees one ticket card as My Ticket$/, function () {
        return expect(browser.findElement(by.css('.events-primary'))).to.eventually.exist;
    });

    this.Then(/^he sees unassigned ticket cards for all the other tickets bought$/, function () {
        return expect(browser.findElement(by.css('.ticket-empty'))).to.eventually.exist;
    });

    this.Then(/^he sees the unassigned icon on each of the unassigned ticket cards$/, function () {
        return expect(browser.findElement(by.css('.icon-ticket'))).to.eventually.exist;
    });

    this.Then(/^he sees the Ticket Number label on each of the unassigned ticket cards$/, function () {
        return expect(browser.findElement(by.css('.title-ticket-content'))).to.eventually.exist;
    });

    this.Then(/^he sees the ticket number on each of the unassigned ticket cards$/, function () {
        return expect(browser.findElement(by.css('.title-ticket-content'))).to.eventually.exist;
    });

    this.Then(/^he sees the assign ticket icon on each of the unassigned ticket cards$/, function () {
        return expect(browser.findElement(by.css('.icon-asign'))).to.eventually.exist;
    });

    this.Then(/^he sees the Assign Ticket option on each of the unassigned ticket cards$/, function () {
        return expect(browser.findElement(by.css('.unassigned-option'))).to.eventually.exist;
    });

};
