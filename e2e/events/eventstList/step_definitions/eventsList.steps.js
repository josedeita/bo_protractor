var eventsListPo = require('../eventsList.po.js');

module.exports = function () {

    this.Then(/^he gets to the new Events page from BO$/, function (next) {
        expect(eventsListPo.eventsTitle.isPresent())
            .to.eventually.equal(true)
            .and.notify(next);
    });

    this.Given(/^there is only ONE event$/, function (next) {
        next();
    });

    this.Then(/^he sees the image for that event on the highlighted position$/, function (next) {
        expect(eventsListPo.eventPrimary.isPresent())
            .to.eventually.equal(true)
            .and.notify(next);
    });

    this.Then(/^he sees the date of that event on the highlighted position$/, function (next) {
        expect(eventsListPo.eventPrimaryDate.isPresent())
            .to.eventually.equal(true)
            .and.notify(next);
    });

    this.Then(/^he sees the location of that event on the highlighted position$/, function (next) {
        expect(eventsListPo.eventPrimaryCity.isPresent())
            .to.eventually.equal(true)
            .and.notify(next);
    });

    this.Then(/^he sees the name of the event on the highlighted position$/, function (next) {
        expect(eventsListPo.eventPrimaryName.isPresent())
            .to.eventually.equal(true)
            .and.notify(next);
    });

    // Scenario: Show more that one event
    this.Given(/^that there is MORE THAN ONE event$/, function (next) {
        next();
    });

    this.Then(/^he see the highlighted event on the highlighted position$/, function (next) {
        expect(eventsListPo.eventPrimary.isPresent())
            .to.eventually.equal(true)
            .and.notify(next);
    });

    this.Then(/^he see the secondary events with all their information \(Image, date, location, title\)$/, function (next) {
        expect(eventsListPo.eventsSecondary)
            .to.eventually.have.length.above(0)
            .and.notify(next);
    });

    // Scenario: Show secondary events sorted by start date
    this.Then(/^he see the secondary events sorted by start date$/, function (next) {
        // this is validated in with TDD in te impemantion
        next();
    });

    // Scenario: Show secondary events grouped
    this.Then(/^he sees the secondary events grouped by year$/, function (next) {
        // Write code here that turns the phrase above into concrete actions
        element.all(by.repeater('event in eventsListCtrl.secondaryEvents')).then(function(data) {
            console.log(data);
        });
        next(null, 'pending');
    });

    this.Then(/^he sees the labels for each year group with the number of the year$/, function (next) {
        // Write code here that turns the phrase above into concrete actions
        next(null, 'pending');
    });

    this.Then(/^he sees the secondary events grouped by month$/, function (next) {
        // Write code here that turns the phrase above into concrete actions
        next(null, 'pending');
    });
    this.Then(/^he sees the labels for each month group with the month name$/, function (next) {
        // Write code here that turns the phrase above into concrete actions
        next(null, 'pending');
    });
};
