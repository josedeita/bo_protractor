
var homePage = function () {
    this.headerInfo = element(by.binding('HeaderCtrl.showInfoHeader'));
    this.search = $('#searchBox');
    this.reports = $('#insight-header');
    this.rankStatusWidget_Tittle = $$('.hidden-xs [ng-if="MainCtrl.showRankComparison"]');
    //this.rankStatusWidget_Tittle = $x('.//div[@class="hidden-xs ng-scope"] //div[@ng-if="MainCtrl.showRankComparison"]') //xpath example
};

module.exports = new homePage();
