var EventsPage = function () {
    this.eventsIcon = $('.events');

    /**
     * Click and open events page.
     */
    this.openEvents = function () {
        browser.sleep(100);
        this.eventsIcon.click();
    };
};

module.exports = new EventsPage();
