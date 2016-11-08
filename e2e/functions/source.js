var EC = protractor.ExpectedConditions;

var src = function () {

    this.waitElementPresent =  function (element) {
        return browser.wait(function() { return browser.isElementPresent(element) }, 60000);
    };

    this.isElementPresent = function (element) {
        return this.waitElementPresent(function () {
            element.isPresent();
        });
    };
}

module.exports = new src();
