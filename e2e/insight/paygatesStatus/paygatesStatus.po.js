var PaygatesStatusPage = function(){
    this.legDetailsLink = element.all(by.css('.volume-by-legs')).get(0);
    this.titleLabel = $('#title_paygate');

    this.openLegDetails2 = function(){

        browser.executeScript("arguments[0].scrollIntoView();", this.legDetailsLink.getWebElement());
        this.legDetailsLink.click();
    };

};

module.exports = new PaygatesStatusPage();