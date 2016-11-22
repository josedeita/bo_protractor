var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var homePage = require('../../home/home.po.js');
var loginPage = require('../../login/login.po.js');
var rStatus = require('../../rankStatus/rankStatus.po.js');
//var homePage = require('../../home/homeCHINA.po.js');
//var loginPage = require('../../login/loginCHINA.po.js');

var src = require('../../../support/source.js');

chai.use(chaiAsPromised);
var expect = chai.expect;
var image = [];

module.exports = function () {

  this.After(function() {
    console.log('TestCase Exit >>>');
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
  });

  this.Given(/^that a distributor is logged into the backoffice from (inside|outside) China$/, function (location, callback) {
    this.loc = location;
    if (location == 'inside'){
       loginPage.login('568','kyani@2016!');
       browser.waitForAngular();
   }else {
       loginPage.login('512','kyani@2016!');
       browser.waitForAngular();
    }
    callback();
  });

  this.When(/^he navigates to (.+)$/, function (report, callback) {
    if (this.loc=='inside')
    {
      switch(report) {
          case 'Rank Status Widget':
              //Implements navigation to the report
              expect(homePage.rankStatusWidget_Tittle.isPresent()).to.eventually.to.equal(true);
              this.image[0] = homePage.currentRankGem;
              this.image[1] = homePage.nextRankGem;
              callback();
              break;
          case 'Fast Start Bonus Widget':
              //code block
              callback();
              break;
          case 'Rank Status':
              src.waitElementPresent(homePage.reports);
              homePage.reports.click();
              browser.waitForAngular();

              var rankStatus = new rStatus();
              rankStatus.menu.click();
              browser.sleep(5000);

              //rankStatus.Submenu.click();
              src.waitElementPresent(rankStatus.title);

              image[0] = rankStatus.currentRank;
              image[1] = rankStatus.nextRank;
              image[2] = rankStatus.currentRank_mini;
              image[3] = rankStatus.nextRank_mini;
              image[4] = rankStatus.carrousel_garnet;
              image[5] = rankStatus.carrousel_jade;
              image[6] = rankStatus.carrousel_pearl;
              image[7] = rankStatus.carrousel_sapphire;
              image[8] = rankStatus.carrousel_ruby;
              image[9] = rankStatus.carrousel_emerald;
              image[10] = rankStatus.carrousel_diamond;
              image[11] = rankStatus.carrousel_bdiamond;
              image[12] = rankStatus.carrousel_gdiamond;
              image[13] = rankStatus.carrousel_pdiamond;
              image[14] = rankStatus.carrousel_rdiamond;
              image[15] = rankStatus.carrousel_drdiamond;
              image[16] = rankStatus.carrousel_bldiamond;
              image[17] = rankStatus.carrousel_dbldiamond;
              callback();
              break;
          default:
              //default code block
      }
    }
  });

  this.Then(/^he sees the (Chinese|Global) Rank icons$/, function (rank_icons, callback) {
    var boo;
    for(i=0; i<= image.length; i++)
    {
      image[i].getAttribute('src').then(function(val){
        //console.log(val[0]);
        if (rank_icons === 'Chinese')
        {
          expect(/China-pin-/.test(val[0])).to.be.true;
        }
        else{
          expect(/China-pin-/.test(val[0])).to.be.false;
        }
      });
    } callback();
  });

};
