/**
 * Created by GQuinteroO on 11/16/2016.
 */
var helper = require('../../../../support/helper');
var legVolumePage = require('../legVolumeRank.po.js');
module.exports = function () {

    this.Before(function () {
        browser.baseUrl = 'https://login.kyani.net';
    });

    this.After(function(){
        helper.logout();
    });

    this.Given(/^that a distributor is outside China$/, function () {
        // Write code here that turns the phrase above into concrete actions
            helper.login(501, 'Kyani@2016!');
            return browser.driver.wait(function () {
                browser.baseUrl = 'https://office-dev2.kyani.net';
                var currentUrl = browser.getCurrentUrl();
                var url = browser.baseUrl + '/home';
                return expect(currentUrl).to.eventually.equal(url);
            }, 1000);
    });

    this.Then(/^he sees the downline's picture$/, function (next) {
        // Write code here that turns the phrase above into concrete actions
        expect(legVolumePage.firstImageUser.isPresent())
            .to.eventually.equal(true)
            .and.notify(next);
    });

    this.Then(/^the downline's Name$/, function (next) {
        // Write code here that turns the phrase above into concrete actions
        expect(legVolumePage.firstUserName.isPresent())
            .to.eventually.equal(true)
            .and.notify(next);
    });

    this.Then(/^the downline's ID$/, function (next) {
        expect(legVolumePage.firstUserId.isPresent())
         .to.eventually.equal(true)
         .and.notify(next);
    });

    this.Then(/^the link to the Downline Tree$/, function (next) {
        // Write code here that turns the phrase above into concrete actions

        expect(legVolumePage.firstUserLinkDownlineTree.isPresent())
            .to.eventually.equal(true)
            .and.notify(next);
    });
};

