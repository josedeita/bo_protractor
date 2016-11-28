// Scenario: 02 - Navigate to Kyani Shop from Manage Tickets page

module.exports = function () {

    this.Given(/^he's on the Manage Tickets page for that event$/, function () {
        var currentUrl = browser.getCurrentUrl();
        return expect(currentUrl).to.eventually.contain('/events/ticketsList/');
    });

    this.When(/^he clicks on Buy More Tickets$/, function (next) {
        if (browser.findElement(by.css('.event-buy'))) {
            browser.findElement(by.css('.event-buy')).click();
        }
        next();
    });

    this.Then(/^he's taken to Kyani Shop URL for that product on a new browser tab$/, function () {
        browser.getAllWindowHandles().then(function(handles) {
            browser.switchTo().window(handles[1]).then(function () {
                browser.sleep(2000);
                expect(browser.driver.getCurrentUrl()).to.eventually.contain('shop.kyani.net');
            });
        });
    });

};
