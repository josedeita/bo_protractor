/**
 * Created by GQuinteroO on 11/16/2016.
 */
var helper = require('../../../../support/helper');
var insightPage = require('../../../insight.po.js');
var rankStatusPage = require('../../rankStatus.po.js');
var legVolumePage = require('../leg-volume-rank.po.js');
module.exports = function () {

    // Scenario: Show message when there are no events
    this.Given(/^that a distributor is inside China$/, function () {
        // Write code here that turns the phrase above into concrete actions
        helper.login(568, 'Kyani@2016!');
        var currentUrl = browser.getCurrentUrl();
        var url = browser.baseUrl + '/home';

        return browser.driver.wait(function () {
            return expect(currentUrl).to.eventually.equal(url);
        }, 1000);
    });

    this.Given(/^he clicks on the Reports Menu$/, function (next) {
        // Write code here that turns the phrase above into concrete actions
        browser.waitForAngular();
        insightPage.goToInsightReports();
        next();

    });

    this.Given(/^he is on the Rank Status$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        var currentUrl = browser.getCurrentUrl();
        var url = browser.baseUrl + '/insight/rankComparison/';
         browser.driver.wait(function () {
            expect(currentUrl).to.eventually.equal(url);
             expect(rankStatusPage.titleLabel.isPresent())
                 .to.eventually.equal(true)
                 .and.notify(callback);
        }, 2000);


    });

    this.Given(/^he is on his current rank$/, function (next) {
        // Write code here that turns the phrase above into concrete actions
        next();
    });

    this.When(/^he opens View Leg details option$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        browser.waitForAngular();
        rankStatusPage.openLegDetails();
        expect(legVolumePage.popoverLeg.isPresent())
            .to.eventually.equal(true)
            .and.notify(callback);
    });

    this.Then(/^he sees the downline's ID and Volume for each leg$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        expect(legVolumePage.firstIdUser.isPresent())
            .to.eventually.equal(true)
            .and.notify(callback);

        expect(legVolumePage.firstVolumeUser.isPresent())
            .to.eventually.equal(true)
            .and.notify(callback);
    });
};

