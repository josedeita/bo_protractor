
var homePage = function () {
    this.headerInfo = element(by.binding('HeaderCtrl.showInfoHeader'));
    this.search = $('#searchBox');
    this.reports = $('#insight-header');
    this.rankStatusWidget_Tittle = $$('.hidden-xs [ng-if="MainCtrl.showRankComparison"]');
    //this.rankStatusWidget_Tittle = $x('.//div[@class="hidden-xs ng-scope"] //div[@ng-if="MainCtrl.showRankComparison"]') //xpath example
    this.currentRankGem = $$('.hidden-xs [id="current-rank"] [ng-src$=".png"]')[0];
    this.nextRankGem = $$('.hidden-xs .col-xs-3.thumbnail-rank-teaser [ng-src$=".png"]')[1];
};

module.exports = new homePage();
