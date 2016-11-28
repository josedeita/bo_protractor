/**
 * Created by GQuinteroO on 11/16/2016.
 */
var helper = require('../../../support/helper');
var insightPage = require('../../insight.po.js');
var rankStatusPage = require('../rankStatus.po.js');
module.exports = function () {

    this.Given(/^he is on the Rank Status$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        var currentUrl = browser.getCurrentUrl();
        var url = browser.baseUrl + '/insight/rankComparison/';
            expect(currentUrl).to.eventually.equal(url);
             expect(rankStatusPage.titleLabel.isPresent())
                 .to.eventually.equal(true)
                 .and.notify(callback);
    });

    this.Given(/^he is on the Rank Status China$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        var currentUrl = browser.getCurrentUrl();
        var url = 'https://office-dev.kyani.cn' + '/insight/rankComparison/';
        expect(currentUrl).to.eventually.equal(url);
        expect(rankStatusPage.titleLabel.isPresent())
            .to.eventually.equal(true)
            .and.notify(callback);
    });

    this.Given(/^he clicks on the rank menu$/, function (next) {
        // Write code here that turns the phrase above into concrete actions
        browser.waitForAngular();
        insightPage.clickRankMenu();
        next();
    });

    this.Given(/^he clicks on the paygates submenu$/, function (next) {
        // Write code here that turns the phrase above into concrete actions
        insightPage.clickPaygatesSubMenu();
        next();
    });

    this.Given(/^he is on his current rank$/, function (next) {
        // Write code here that turns the phrase above into concrete actions
        next();
    });

};

