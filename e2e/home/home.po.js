var HomePage = function () {
    this.headerInfo = element(by.binding('HeaderCtrl.showInfoHeader'));
    this.search = $('#searchBox');

    this.waitElementPresent =  function (element) {
        return browser.wait(element, 10);
    };

    this.isElementPresent = function (element) {
        return this.waitElementPresent(function () {
            element.isPresent();
        });
    };

};

module.exports = new HomePage();
