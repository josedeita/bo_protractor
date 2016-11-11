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

  this.After(function() {
    console.log('TestCase Exit >>>');
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
  });

  this.Given(/^a distributor in China logged into the Backoffice$/, function (callback) {
         loginPage.login('568','kyani@2016!');
         browser.waitForAngular();
         callback();
  });

  this.Given(/^the distributor has access to the ADP report from the Rep\/Allowed$/, function (callback) {
    var json= src.getJson('https://api.kyani.net/rep/568/reports/allowed');
     json.then(function(body) {
     var jsonResponse = JSON.parse(body);
     expect(jsonResponse.data.adp_report).to.be.true;
    });
    callback();
  });

  this.When(/^the distributor goes to the Report's Menu$/, function (callback) {
   src.waitElementPresent(homePage.reports);
   homePage.reports.click();
   browser.waitForAngular();
   callback();
  });

  this.Then(/^he sees the ADP submenu active$/, function (callback) {
      src.waitElementPresent(add.genealogyOption);
      expect(add.genealogyOption.isPresent()).to.eventually.to.equal(true);
      callback();
  });

};
