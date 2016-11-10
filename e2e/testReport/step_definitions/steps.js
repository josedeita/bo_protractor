module.exports = function () {
    this.Given(/^I in the home page$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        this.expect(true).to.be.true;
        callback();
    });

    this.When(/^I click in the Reports button$/, function () {
        // Write code here that turns the phrase above into concrete actions
         var el = element(by.id('insight-header'));
         el.click();
    });

    this.Then(/^I should see "([^"]*)" title$/, function (text, callback) {
        // Write code here that turns the phrase above into concrete actions
        var title = element(by.id('title-rank'));

        this.expect(title.getText()).to.eventually.equal(text).and.notify(callback);
    });

};
