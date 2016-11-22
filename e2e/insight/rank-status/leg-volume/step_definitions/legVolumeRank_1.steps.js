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

    this.After(function(){
        helper.logout();
    });


    // Scenario: Show message when there are no events
    this.Given(/^that a distributor is inside China$/, function () {
        // Write code here that turns the phrase above into concrete actions
        helper.ChinaLogin(568, 'Kyani@2016!');
        var currentUrl = browser.getCurrentUrl();
        var url = 'https://office-dev.kyani.cn' + '/home';

        return browser.driver.wait(function () {
            return expect(currentUrl).to.eventually.equal(url);
        }, 1000);
    });

    this.When(/^he opens View Leg details option$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        rankStatusPage.openLegDetails();
        expect(legVolumePage.popoverLeg.isPresent())
            .to.eventually.equal(true)
            .and.notify(callback);
    });

    this.Then(/^he sees the downline's ID$/, function (next) {
        // Write code here that turns the phrase above into concrete actions
        legVolumePage.allTablePopover.count().then(function(count) {
            for(var indexes = 0; indexes < count; indexes++){
                var idUser = legVolumePage.allTablePopover.get(indexes).element(by.id('user-id-'+indexes));
                    expect(idUser.isPresent())
                        .to.eventually.equal(true);
            }
            next();
        });

    });

    this.Then(/^Volume for each leg$/, function (next) {
        // Write code here that turns the phrase above into concrete actions
        var allTablePopover = element.all(by.repeater('leg in volumeByLegCtrl.legs'));
        allTablePopover.count().then(function(count) {
            for(var indexes = 0; indexes < count; indexes++) {
                var volumeUser = allTablePopover.get(indexes).element(by.id('user-volume-qv-'+indexes));
                expect(volumeUser.isPresent())
                    .to.eventually.equal(true);
            }
            next();
        });
    });

    this.Then(/^he does not see the downline's picture$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        expect(legVolumePage.firstImageUser.isPresent())
            .to.eventually.equal(false)
            .and.notify(callback);
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

