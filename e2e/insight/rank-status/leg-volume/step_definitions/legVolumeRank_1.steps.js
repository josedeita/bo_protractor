/**
 * Created by GQuinteroO on 11/16/2016.
 */
var helper = require('../../../../support/helper');
var rankStatusPage = require('../../rankStatus.po.js');
var legVolumePage = require('../leg-volume-rank.po.js');
module.exports = function () {

    this.Before(function () {
        browser.baseUrl = 'https://office-dev.kyani.cn';
    });


    // Scenario: Show message when there are no events
    this.Given(/^that a distributor is inside China$/, function () {
        // Write code here that turns the phrase above into concrete actions
        helper.ChinaLogin(568, 'Kyani@2016!');
        var currentUrl = browser.getCurrentUrl();
        var url = 'https://office-dev.kyani.cn' + '/home';

        return browser.driver.wait(function () {
            return expect(currentUrl).to.eventually.equal(url);
        }, 5000);
    });

    this.When(/^he opens View Leg details option$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        rankStatusPage.openLegDetails();
        expect(legVolumePage.popoverLeg.isPresent())
            .to.eventually.equal(true)
            .and.notify(callback);
    });

    this.Then(/^he sees the downline's ID$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        expect(legVolumePage.firstIdUser.isPresent())
            .to.eventually.equal(true)
            .and.notify(callback);
    });

    this.Then(/^Volume for each leg$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        expect(legVolumePage.firstUserVolumeQv.isPresent())
            .to.eventually.equal(true)
            .and.notify(callback);
    });

    this.Then(/^he does not see the downline's picture$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions

            /*expect(legVolumePage.firstImageUser.isPresent())
                .to.equal(false)
                .and.notify(callback);*/

       /* expect(legVolumePage.firstImageUser.isPresent().then(function(count){
            return count.length;
        })).to.eventually.equal(0);*/

        /*legVolumePage.firstImageUser.isPresent().then(function(count){
            console.log('count ', count);
                expect(count).to.equal(false);
                    //callback();
        }).and.notify(callback);*/


        expect(legVolumePage.firstImageUser.isPresent())
            .to.eventually.equal(false)
            .and.notify(callback);

        //callback();
    });

    this.Then(/^does not see the downline's Name$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions

        expect(legVolumePage.firstUserName.isPresent())
            .to.eventually.equal(false)
            .and.notify(callback);
    });

    this.Then(/^does not see the link to the Downline Tree$/, function (callback) {
        expect(legVolumePage.firstUserLinkDownlineTree.isPresent())
            .to.eventually.equal(false)
            .and.notify(callback);
    });
};

