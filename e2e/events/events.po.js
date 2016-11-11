var EventsPage = function () {
    this.eventsIcon = $('.events');
    // this.missingEvents = $('.missing-events');

    this.openEvents = function () {
        this.eventsIcon.click();
    };
};

module.exports = new EventsPage();
