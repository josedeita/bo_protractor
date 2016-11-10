module.exports = function () {
    // Scenario: Go to Events page through the header calendar icon
    this.Given(/^that the distributor is in the BO$/, function (callback) {
        callback(null, 'pending');
    });

    this.When(/^he clicks on the header calendar icon of Events$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^he gets to the new Events page from BO$/, function (callback) {
        callback(null, 'pending');
    });

    // Scenario: Show message when there are no events
    this.Given(/^That there aren't any events$/, function (callback) {
        callback(null, 'pending');
    });

    this.When(/^the distributor clicks on Events$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^he sees a message that says \"([^\"]*)\"$/, function (therearenoopenorupcomingeventscheckbacklater, callback) {
        callback(null, 'pending');
    });

    // Scenario: Show only one event
    this.Given(/^that there is only ONE event$/, function (callback) {
        callback(null, 'pending');
    });

    this.When(/^the distributor clicks on Events$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^he sees the image for that event on the highlighted position$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^he sees the date of that event on the highlighted position$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^he sees the location of that event on the highlighted position$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^he sees the name of the event on the highlighted position$/, function (callback) {
        callback(null, 'pending');
    });

    // Scenario: Show more that one event
    this.Given(/^that there is MORE THAN ONE event$/, function (callback) {
        callback(null, 'pending');
    });

    this.When(/^the distributor clicks on Events$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^he see the highlighted event on the highlighted position$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^he see the secondary events with all their information (Image, date, location, title)$/, function (callback) {
        callback(null, 'pending');
    });

    // Scenario: Show secondary events sorted by start date
    this.Given(/^that there is MORE THAN ONE event$/, function (callback) {
        callback(null, 'pending');
    });

    this.When(/^the distributor click on Events$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^he see the secondary events sorted by start date$/, function (callback) {
        callback(null, 'pending');
    });

    // Scenario: Show secondary events grouped
    this.Given(/^that there is MORE THAN ONE event$/, function (callback) {
        callback(null, 'pending');
    });

    this.When(/^the distributor clicks on Events$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^he sees the secondary events grouped by year$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^he sees the labels for each year group with the number of the year$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^he sees the secondary events grouped by month$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^he sees the labels for each month group with the month name$/, function (callback) {
        callback(null, 'pending');
    });

    // Scenario: Show buy tickets for the highlighted and secondary events
    this.Given(/^That there is an event (highlighted or secondary) on the Events page$/, function (callback) {
        callback(null, 'pending');
    });

    this.When(/^he clicks on Events$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^he sees the Buy Tickets button for that event$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^the distributor has not bought any tickets for that event$/, function (callback) {
        callback(null, 'pending');
    });

    // Scenario: Show manage tickets for the highlighted and secondary events
    this.Given(/^that there is an event (highlighted or secondary) on the Events page$/, function (callback) {
        callback(null, 'pending');
    });

    this.When(/^he clicks on Events$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^he sees the Manage Tickets button for that event$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^the distributor has already bought tickets for the Event$/, function (callback) {
        callback(null, 'pending');
    });

    // Scenario: Navigate to shop when clicking on buy tickets
    this.Given(/^that there is an event (highlighted or secondary) on the Events page$/, function (callback) {
        callback(null, 'pending');
    });

    this.When(/^the distributor clicks on Buy Tickets$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^he's taken to Kyani Shop URL for that product on a new browser tab$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^the event has a Buy Tickets option$/, function (callback) {
        callback(null, 'pending');
    });

    // Scenario: Show message when service fails or times out
    this.Given(/^that the distributor is in the BO$/, function (callback) {
        callback(null, 'pending');
    });

    this.When(/^he clicks on Events$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^he gets to the new Events page from BO$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^the service for events fails or times out$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^he sees the message \"([^\"]*)\"$/, function (nodatafound, callback) {
        callback(null, 'pending');
    });

    // Scenario: Show according to the rep allowed
    this.Given(/^that the distributor has the attribute events:true$/, function (callback) {
        callback(null, 'pending');
    });

    this.When(/^he logs in to the BO$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^he sees the Calendar Icon on the header for Events$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^he can navigate to the events page$/, function (callback) {
        callback(null, 'pending');
    });

    // Scenario: Hide according to the rep allowed
    this.Given(/^that the distributor has the attribute events:false$/, function (callback) {
        callback(null, 'pending');
    });

    this.When(/^he logs in to the BO$/, function (callback) {
        callback(null, 'pending');
    });

    this.Then(/^he cannot see the Calendar Icon on the header for Events$/, function (callback) {
        callback(null, 'pending');
    });


};
