var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {
    this.Given(/^I in the home page$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        expect(true).to.be.true;
        callback();
    });

    this.When(/^I click in the Reports button$/, {timeout: 14 * 1000}, function () {
        // Write code here that turns the phrase above into concrete actions
         var el = element(by.id('insight-header'));
         el.click();
    });

    this.Then(/^I should see "([^"]*)" title$/, {timeout: 16 * 1000}, function (text, callback) {
        // Write code here that turns the phrase above into concrete actions
        var title = element(by.id('title-rank'));

        expect(title.getText()).to.eventually.equal(text).and.notify(callback);
    });

};
