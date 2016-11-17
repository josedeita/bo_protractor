var LegVolume = function(){
    this.popoverLeg = $('.volume-popover');
    this.tablePopover = element(by.css('[ng-repeat="leg in volumeByLegCtrl.legs"]'));
    this.firstIdUser = this.tablePopover.element(by.css('.id.ng-binding'));
    this.firstVolumeUser = this.tablePopover.element(by.css('[ng-show="leg.qv >= 0"]'));
};

module.exports = new LegVolume();