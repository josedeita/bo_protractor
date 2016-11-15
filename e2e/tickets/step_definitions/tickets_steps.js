var eventsPo = require('../../events/events.po.js');
var ticketsPo = require('../tickets.po.js');

module.exports = function () {

    // Background
    this.Given(/^that the distributor is in the BOs$/, function () {
        var currentUrl = browser.getCurrentUrl();
        var url = browser.baseUrl + '/home';

        return browser.driver.wait(function () {
            return expect(currentUrl).to.eventually.equal(url);
        }, 2000);
    });

    this.Given(/^the distributor clicks on Eventss$/, function () {
        eventsPo.openEvents();
    });

    // Scenario: Navigate to Manage Tickets from the Events page and see the events information
    this.Given(/^that the distributor has bought tickets for one specific event$/, function () {
        // TODO:  ¿QUÉ PASA SI EL USUARIO AÚN NO COMPRA TICKETS?
        var manageTickets = browser.findElement(by.id('manage-tickets'));
        return expect(manageTickets.getText()).to.eventually.to.equal('Manage Tickets');
    });

    this.When(/^he clicks on Manage Tickets for that specific event$/, function (next) {
        var manageTickets = browser.findElement(by.id('manage-tickets'));
        manageTickets.click();
        next();
    });

    this.Then(/^he sees the Manage Tickets page$/, function () {
        var currentUrl = browser.getCurrentUrl();
        // TODO: ¿CÓMO SABEMOS QUÉ ID ESTÁ ENVIANDO (expresion regular)?
        var urlTickets = browser.baseUrl + '/events/list/45';
        return expect(currentUrl).to.eventually.equal(urlTickets);
    });

    this.Then(/^he sees the image for that event$/, function () {
        browser.sleep(5000);
        var eventListBanner = browser.findElement(by.css('.event-list-banner'));
        return expect(eventListBanner).to.eventually.exist;
    });

    this.Then(/^he sees the date of that event$/, function (callback) {
        callback(null, 'pending');
    });

};
