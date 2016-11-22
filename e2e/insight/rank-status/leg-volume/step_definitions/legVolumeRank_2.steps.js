/**
 * Created by GQuinteroO on 11/16/2016.
 */
var helper = require('../../../../support/helper');
var legVolumePage = require('../leg-volume-rank.po.js');
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
        legVolumePage.allTablePopover.count().then(function(count) {
            for(var indexes = 0; indexes < count; indexes++) {
                var imageUser = legVolumePage.allTablePopover.get(indexes).element(by.id('user-img-'+indexes));
                expect(imageUser.isPresent())
                    .to.eventually.equal(true);
            }
            next();
        });

        /*expect(legVolumePage.firstImageUser.isPresent())
            .to.eventually.equal(true)
            .and.notify(callback);*/
    });

    this.Then(/^the downline's Name$/, function (next) {
        // Write code here that turns the phrase above into concrete actions

        legVolumePage.allTablePopover.count().then(function(count) {
            for(var indexes = 0; indexes < count; indexes++) {
                var nameUser = legVolumePage.allTablePopover.get(indexes).element(by.id('user-name-'+indexes));
                expect(nameUser.isPresent())
                    .to.eventually.equal(true);
            }
            next();
        });

        /*expect(legVolumePage.firstUserName.isPresent())
            .to.eventually.equal(true)
            .and.notify(callback);*/
    });

    this.Then(/^the downline's ID$/, function (next) {
        // Write code here that turns the phrase above into concrete actions
        legVolumePage.allTablePopover.count().then(function(count) {
            for(var indexes = 0; indexes < count; indexes++) {
                var userId = legVolumePage.allTablePopover.get(indexes).element(by.id('user-id-'+indexes));
                expect(userId.isPresent())
                    .to.eventually.equal(true);
            }
            next();
        });

        /*expect(legVolumePage.firstUserId.isPresent())
            .to.eventually.equal(true)
            .and.notify(callback);*/
    });

   /* this.Then(/^the downline's Volume for each leg$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions

        expect(legVolumePage.firstUserVolumeQv.isPresent())
            .to.eventually.equal(true)
            .and.notify(callback);
    });*/

    this.Then(/^the link to the Downline Tree$/, function (next) {
        // Write code here that turns the phrase above into concrete actions

        expect(legVolumePage.firstUserLinkDownlineTree.isPresent())
            .to.eventually.equal(true)
            .and.notify(next);
    });
};

