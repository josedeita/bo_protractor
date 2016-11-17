var LegVolume = function(){
    this.popoverLeg = $('.volume-popover');
    this.tablePopover = element(by.css('[ng-repeat="leg in volumeByLegCtrl.legs"]'));
    this.firstIdUser = this.tablePopover.element(by.css('.id.ng-binding'));
};

module.exports = new LegVolume();