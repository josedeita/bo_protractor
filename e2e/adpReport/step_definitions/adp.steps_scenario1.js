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

  /*
  this.After(function(){
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
  });
  */
  this.Given(/^a distributor in China logged into the Backoffice$/, function (callback) {
         loginPage.login('568','kyani@2016!');
         callback();
  });

  this.Given(/^the distributor has access to the ADP report from the Rep\/Allowed$/, function (callback) {
    src.isElementPresent(add.genealogyOption);
    callback();
  });

  this.When(/^the distributor goes to the Report's Menu$/, function (callback) {
   src.waitElementPresent(homePage.reports);
   homePage.reports.click();
   callback();
  });

  this.Then(/^he sees the ADP submenu active$/, function (callback) {
      src.waitElementPresent(add.genealogyOption);
      expect(add.genealogyOption.isPresent()).to.be.true;
      callback();
  });

};
