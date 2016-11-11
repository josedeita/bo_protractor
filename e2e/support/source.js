var EC = protractor.ExpectedConditions;
var request = require('request');

var src = function () {

    this.waitElementPresent =  function (element) {
        return browser.wait(function() { return browser.isElementPresent(element) }, 60000);
    };

    this.isElementPresent = function (element) {
        return this.waitElementPresent(function () {
            element.isPresent();
        });
    };

    this.getJson = function (url) {

          var getUrlResponse = function (url) {
          var defer = protractor.promise.defer();

          request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
              return defer.fulfill(body);
            }
          });
          return defer.promise;
      };

      return getUrlResponse(url);
    };

}
module.exports = new src();
