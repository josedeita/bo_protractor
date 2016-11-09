var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {
  this.Given(/^a Chinese distributor is logged into the Backoffice$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Given(/^the distributor has access from the Rep\/Allowed to the ADP report$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });

  this.Given(/^he is on the Report's Menu$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  callback(null, 'pending');
  });

  this.When(/^he selects the ADP option$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^the user sees the fields: Report Title, Build Date, Company names, Company IDs, Personally Sponsored, Leg (\d+) Information, Leg (\d+) Information, Leg (\d+) Information and Other Legs Information, Leg (\d+) Volume, Leg (\d+) Volume, Leg (\d+) Volume and Other Legs Volume, next option and previous option$/, function (arg1, arg2, arg3, arg4, arg5, arg6, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });
};
