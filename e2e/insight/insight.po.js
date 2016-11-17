/**
 * Created by GQuinteroO on 11/17/2016.
 */
var insightPage = function(){
    this.insightMenu = $('#insight-header');

    this.goToInsightReports = function(){
        this.insightMenu.click();
        browser.sleep(1000);
    };
};

module.exports = new insightPage();
