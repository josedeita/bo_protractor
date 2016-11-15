var eventsPo = require('../events.po.js');

module.exports = function () {

    // Scenario: Show message when there are no events
    this.Given(/^That there aren't any events$/, function () {
        return expect(
            element.all(by.repeater('ticket in eventListCtrl.eventData.attributes.tickets'))
        ).to.eventually.to.equal(true);
    });

    this.When(/^the distributor see the Events page$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.Then(/^he sees a message that says "([^"]*)"$/, function (arg1, callback) {
        return expect(true).to.equal(true);
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
};
