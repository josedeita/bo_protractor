// Steps Commons for ticketsList
module.exports = function () {

    this.Given(/^that the distributor has bought tickets for one specific event$/, function () {
        var manageTickets = browser.findElement(by.id('manage-tickets'));
        return expect(manageTickets.getText()).to.eventually.to.equal('Manage Tickets');
    });

    this.When(/^he clicks on Manage Tickets for that specific event$/, function (next) {
        var manageTickets = browser.findElement(by.id('manage-tickets'));
        manageTickets.click();
        next();
    });

};
