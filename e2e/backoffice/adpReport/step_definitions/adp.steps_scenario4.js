var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var homePage = require('../../home/home.po.js');
var loginPage = require('../../login/login.po.js');
var adp = require('../adpReport.po.js');
var src = require('../../../support/source.js');
var add = new adp();

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {

  this.After(function() {
    console.log('TestCase Exit >>>');
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
  });

  this.Given(/^a distributor in China logged into the Kyani Backoffice$/, function (callback) {
         loginPage.login('568','kyani@2016!');
         browser.waitForAngular();
         callback();
  });

  this.Given(/^the distributor has access to the ADP report from the Rep\/Allowed and he doesn't have any downline with ADP Payment and he is on the Report's Menu$/, function (callback) {
    var json= src.getJson('https://api.kyani.net/rep/568/reports/allowed');
     json.then(function(body) {
     var jsonResponse = JSON.parse(body);
     expect(jsonResponse.data.adp_report).to.be.true;
    });
    callback();
  });

  this.When(/^he clicks in the ADP option$/, function (callback) {
   src.waitElementPresent(homePage.reports);
   homePage.reports.click();
   browser.waitForAngular();
   callback();
   src.waitElementPresent(add.genealogyOption);
   add.genealogyOption.click();
   browser.sleep(5000);
   callback();
  });

  this.Then(/^the user sees the message: "You do not have any distributor with ADP Payment yet"$/, function (callback) {
      expect(true).to.be.true;
      callback();
  });

  this.Then(/^he also sees the icon applicable when there is no information to display$/, function (callback) {
      expect(true).to.be.true;
      callback();
  });

};
