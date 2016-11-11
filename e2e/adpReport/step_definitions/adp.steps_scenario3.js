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

  this.Given(/^a distributor is outside of China and he is logged into the Backoffice$/, function (callback) {
        loginPage.login('512','kyani@2016!');
        browser.waitForAngular();
        callback();
       });

  this.Given(/^the distributor does not have access to the ADP report from the Rep\/Allowed$/, function (callback) {
        var json= src.getJson('https://api.kyani.net/rep/512/reports/allowed');
         json.then(function(body) {
         var jsonResponse = JSON.parse(body);
         expect(jsonResponse.data.adp_report).to.be.false;
        });
        callback();
       });

  this.When(/^the distributor navigates to the Report's Menu$/, function (callback) {
    src.waitElementPresent(homePage.reports);
    homePage.reports.click();
    browser.waitForAngular();
    callback();
  });

  this.Then(/^he does not see the ADP submenu active\.$/, function (callback) {
      expect(add.genealogyListSubmenu.isPresent()).to.be.true;
          /*it's the same option menu but with different link, so to validate
            the changes it's neccesary to check if it's a list or not*/
      callback();
    });
};
