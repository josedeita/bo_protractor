var RankStatusPage = function(){
    this.insightMenu = $('#insight-header');
    //this.legDetailsLink = $('.volume-by-legs');
    this.legDetailsLink = element.all(by.css('.volume-by-legs')).get(0);
    this.titleLabel = $('#title-rank');


    this.goToRankStatus = function(){
        this.insightMenu.click();
        browser.sleep(1000);
    };

    this.openLegDetails = function(){
        //browser.actions().mouseMove(this.legDetailsLink).perform();
        //browser.executeScript('arguments[0].click()', this.legDetailsLink);
        //this.legDetailsLink.click();

        browser.executeScript("arguments[0].scrollIntoView();", this.legDetailsLink.getWebElement());
        this.legDetailsLink.click();
    };

};

module.exports = new RankStatusPage();