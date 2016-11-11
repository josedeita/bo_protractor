var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var homePage = require('../../home/home.po.js');
var loginPage = require('../../login/login.po.js');
var adp = require('../adpReport.po.js');
var src = require('../../support/source.js');
var add = new adp();

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {

  this.Given(/^a distributor is log into the Backoffice in China$/, function (callback) {
        loginPage.login('568','kyani@2016!');
        browser.waitForAngular();
        callback();
       });

  this.Given(/^the distributor has access from the Rep\/Allowed to the ADP report$/, function (callback) {
        var json= src.getJson('https://api.kyani.net/rep/568/reports/allowed');
         json.then(function(body) {
         var jsonResponse = JSON.parse(body);
         expect(jsonResponse.data.adp_report).to.be.true;
        });
        callback();
       });

  this.Given(/^he is on the Report's Menu$/, function (callback) {
    src.waitElementPresent(homePage.reports);
    homePage.reports.click();
    browser.waitForAngular();
    callback();

  });

  this.When(/^he selects the ADP option$/, function (callback) {
    src.waitElementPresent(add.genealogyOption);
    add.genealogyOption.click();
    browser.sleep(5000);
    callback();
  });

  this.Then(/^the user sees the fields: Report Title, Build Date, Company names, Company IDs, Personally Sponsored, Leg one Information, Leg two Information, Leg three Information and Other Legs Information, Leg one Volume, Leg two Volume, Leg three Volume and Other Legs Volume, next option and previous option$/, function (callback) {
      expect(add.title_adp.isPresent()).to.eventually.to.equal(true);
      expect(add.genealogyOption.isPresent()).to.eventually.to.equal(true);
      expect(add.title_adp.isPresent()).to.eventually.to.equal(true);
      expect(add.buildDate_adp.isPresent()).to.eventually.to.equal(true);
      expect(add.companiesName_adp.isPresent()).to.eventually.to.equal(true);
      expect(add.id_adp.isPresent()).to.eventually.to.equal(true);
      expect(add.Sponsored_adp.isPresent()).to.eventually.to.equal(true);
      expect(add.labelLeg1_adp.isPresent()).to.eventually.to.equal(true);
      expect(add.volumeLeg1_adp.isPresent()).to.eventually.to.equal(true);
      expect(add.labelLeg2_adp.isPresent()).to.eventually.to.equal(true);
      expect(add.volumeLeg2_adp.isPresent()).to.eventually.to.equal(true);
      expect(add.labelLeg3_adp.isPresent()).to.eventually.to.equal(true);
      expect(add.volumeLeg3_adp.isPresent()).to.eventually.to.equal(true);
      expect(add.labelOtherLegs_adp.isPresent()).to.eventually.to.equal(true);
      expect(add.volumeOtherLegs_adp.isPresent()).to.eventually.to.equal(true);
      callback();
    });
};
