var baseUrl = 'https://login.kyani.net';

module.exports = function () {
    this.Before(function () {
        browser.ignoreSynchronization = true;
    browser.driver.get(baseUrl + '/en-us/?app=office-dev');

        $('#username').sendKeys(process.env.KYANI_USER);
        $('#password').sendKeys(process.env.KYANI_KEY);

        $('button[type="submit"]').click();

        console.log('.....after click and before Given.....');

        return browser.driver.wait(function () {
            return browser.driver.getCurrentUrl().then(function (url) {
                return /home/.test(url);
            });
        }, 30000);
    });

    // Background
    this.Given(/^that the distributor is in the BO$/, function () {
        console.log('..... In Given .....');
        // Write code here that turns the phrase above into concrete actions
        return expect(browser.getCurrentUrl()).to.eventually.equal('https://office-dev2.kyani.net/home');
    });

    this.Given(/^the distributor clicks on Events$/, function () {
        // Write code here that turns the phrase above into concrete actions
        var el = element(by.id('insight-header'));
        el.click();
        browser.sleep(10000);
    });

    // Scenario: Show message when there are no events
    this.Given(/^That there aren't any events$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.When(/^the distributor see the Events page$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.Then(/^he sees a message that says "([^"]*)"$/, function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
};
