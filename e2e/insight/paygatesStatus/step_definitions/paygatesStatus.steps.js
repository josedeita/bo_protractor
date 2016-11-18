/**
 * Created by GQuinteroO on 11/16/2016.
 */
var helper = require('../../../support/helper');
var paygatesStatusPage = require('../paygatesStatus.po.js');
module.exports = function () {

    this.Given(/^he is on the Paygate Status$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        var currentUrl = browser.getCurrentUrl();
        var url = browser.baseUrl + '/insight/paygateBonus/';

            expect(currentUrl).to.eventually.equal(url);
             expect(paygatesStatusPage.titleLabel.isPresent())
                 .to.eventually.equal(true)
                 .and.notify(callback);

    });

    this.Given(/^he is on the Paygate Status China$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        var currentUrl = browser.getCurrentUrl();
        var url = 'https://office-dev.kyani.cn' + '/insight/paygateBonus/';

        expect(currentUrl).to.eventually.equal(url);
        expect(paygatesStatusPage.titleLabel.isPresent())
            .to.eventually.equal(true)
            .and.notify(callback);

    });

};

