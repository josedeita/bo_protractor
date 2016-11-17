// Scenario: Navigate to Manage Tickets from the Events page and see the events information

module.exports = function () {

    this.Then(/^he sees the Manage Tickets page$/, function () {
        var currentUrl = browser.getCurrentUrl();
        return expect(currentUrl).to.eventually.contain('/events/ticketsList/');
    });

    this.Then(/^he sees the image for that event$/, function () {
        var eventListBanner = browser.findElement(by.css('.events-primary'));
        return expect(eventListBanner).to.eventually.exist;
    });

    this.Then(/^he sees the date of that event$/, function () {
        var eventDate = browser.findElement(by.css('.event-date'));
        return expect(eventDate.getText()).to.eventually.be.ok;
    });

    this.Then(/^he sees the location of that event$/, function () {
        var eventCity = browser.findElement(by.css('.event-city'));
        return expect(eventCity.getText()).to.eventually.be.ok;
    });

    this.Then(/^he sees the option to buy more tickets$/, function () {
        var buyTickets = browser.findElement(by.id('buy-tickets'));
        return expect(buyTickets.getText()).to.eventually.to.equal('Buy Tickets');
        // browser.sleep(2000);
    });
    
};
