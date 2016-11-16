var eventsListPo = require('../eventsList.po.js');

module.exports = function () {

    this.Then(/^he gets to the new Events page from BO$/, function (callback) {
        expect(eventsListPo.eventsTitle.isPresent())
            .to.eventually.equal(true)
            .and.notify(callback);
    });

    this.Given(/^there is only ONE event$/, function (callback) {
        callback();
    });

    this.Then(/^he sees the image for that event on the highlighted position$/, function (callback) {
        expect(eventsListPo.eventPrimary.isPresent())
            .to.eventually.equal(true)
            .and.notify(callback);
    });

    this.Then(/^he sees the date of that event on the highlighted position$/, function (callback) {
        expect(eventsListPo.eventPrimaryDate.isPresent())
            .to.eventually.equal(true)
            .and.notify(callback);
    });

    this.Then(/^he sees the location of that event on the highlighted position$/, function (callback) {
        expect(eventsListPo.eventPrimaryCity.isPresent())
            .to.eventually.equal(true)
            .and.notify(callback);
    });

    this.Then(/^he sees the name of the event on the highlighted position$/, function (callback) {
        expect(eventsListPo.eventPrimaryName.isPresent())
            .to.eventually.equal(true)
            .and.notify(callback);
    });

    // Scenario: Show more that one event
    this.Given(/^that there is MORE THAN ONE event$/, function (callback) {
        callback();
    });

    this.Then(/^he see the highlighted event on the highlighted position$/, function (callback) {
        expect(eventsListPo.eventPrimary.isPresent())
            .to.eventually.equal(true)
            .and.notify(callback);
    });

    this.Then(/^he see the secondary events with all their information \(Image, date, location, title\)$/, function (callback) {
        expect(eventsListPo.eventsSecondary)
            .to.eventually.have.length.above(0)
            .and.notify(callback);
    });
};
