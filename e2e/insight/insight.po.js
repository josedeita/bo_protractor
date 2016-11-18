/**
 * Created by GQuinteroO on 11/17/2016.
 */
var insightPage = function(){
    this.insightMenu = $('#insight-header');
    this.rankMenu = element(by.id('menu-option-rank'));
    this.paygatesSubMenu = element.all(by.css('a[href="/insight/paygateBonus/"]')).get(1);

    this.goToInsightReports = function(){
        this.insightMenu.click();
        browser.sleep(1000);
    };

    this.clickRankMenu = function(){
        this.rankMenu.click();
        browser.sleep(1000);
    };

    this.clickPaygatesSubMenu = function(){
        this.paygatesSubMenu.click();
        browser.sleep(1000);
    };
};

module.exports = new insightPage();
