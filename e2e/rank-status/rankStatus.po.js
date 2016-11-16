var RankStatusPage = function(){
    this.insightMenu = $('#insight-header');
    this.legDetailsLink = $('#leg-details-rank');

    this.goToRankStatus = function(){
        this.insightMenu.click();
    };

    this.openLegDetails = function(){
        this.legDetailsLink.click();
    };

};

module.exports = new RankStatusPage();