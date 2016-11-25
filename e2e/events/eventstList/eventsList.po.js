var EventsPage = function () {
    this.eventsTitle = $('.title-header');
    this.eventPrimary = $('.events-primary');
    this.eventPrimaryDate = $('.event-date');
    this.eventPrimaryCity = $('.event-city');
    this.eventPrimaryName = $('.event-title');
    this.eventsSecondary = element.all(by.css('.event-card'));
    this.eventsByYears = element.all(by.repeater('event in eventsListCtrl.secondaryEvents'));
};

module.exports = new EventsPage();
