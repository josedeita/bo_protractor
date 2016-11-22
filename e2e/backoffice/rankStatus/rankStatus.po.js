
var rankStatus = function () {
    this.menu = $('#menu-option-rank');
    this.Submenu = $$('.dropdown-menu.ng-scope.insight [ui-sref="insight.RankComparison()"]')[0];
    this.title = $('#title-rank');
    this.currentRank = $$('[id="current-rank"] [ng-src$=".png"]');
    this.nextRank = $$('[id="next-rank"] [ng-src$=".png"]');
    this.currentRank_mini = $$('.thumbnail-rank [ng-src$=".png"]')[0];
    this.nextRank_mini = $$('.thumbnail-rank [ng-src$=".png"]')[0];
    this.carrousel_garnet = $$('[id="carousel-rank"] [ng-src$=".png"]')[0];
    this.carrousel_jade = $$('[id="carousel-rank"] [ng-src$=".png"]')[1];
    this.carrousel_pearl = $$('[id="carousel-rank"] [ng-src$=".png"]')[2];
    this.carrousel_sapphire = $$('[id="carousel-rank"] [ng-src$=".png"]')[3];
    this.carrousel_ruby = $$('[id="carousel-rank"] [ng-src$=".png"]')[4];
    this.carrousel_emerald = $$('[id="carousel-rank"] [ng-src$=".png"]')[5];
    this.carrousel_diamond = $$('[id="carousel-rank"] [ng-src$=".png"]')[6];
    this.carrousel_bdiamond = $$('[id="carousel-rank"] [ng-src$=".png"]')[7];
    this.carrousel_gdiamond = $$('[id="carousel-rank"] [ng-src$=".png"]')[8];
    this.carrousel_pdiamond = $$('[id="carousel-rank"] [ng-src$=".png"]')[9];
    this.carrousel_rdiamond = $$('[id="carousel-rank"] [ng-src$=".png"]')[10];
    this.carrousel_drdiamond = $$('[id="carousel-rank"] [ng-src$=".png"]')[11];
    this.carrousel_bldiamond = $$('[id="carousel-rank"] [ng-src$=".png"]')[12];
    this.carrousel_dbldiamond = $$('[id="carousel-rank"] [ng-src$=".png"]')[13];
};

module.exports = rankStatus;
