var EventsPage = function () {
    this.eventsIcon = $('.events');
    this.missingEvents = $('.missing-events');

    /**
     * Click and open events page.
     */
    this.openEvents = function () {
        this.eventsIcon.click();
    };
};

module.exports = new EventsPage();
