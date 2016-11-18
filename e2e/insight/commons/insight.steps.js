/**
 * Created by GQuinteroO on 11/16/2016.
 */
var helper = require('../../support/helper');
var insightPage = require('../insight.po.js');

module.exports = function () {

    this.Given(/^he clicks on the Reports Menu$/, function (next) {
        // Write code here that turns the phrase above into concrete actions
        browser.waitForAngular();
        insightPage.goToInsightReports();
        next();

    });
};

