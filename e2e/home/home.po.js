
var homePage = function () {
    this.headerInfo = element(by.binding('HeaderCtrl.showInfoHeader'));
    this.search = $('#searchBox');
    this.reports = $('#insight-header');
};

module.exports = new homePage();
