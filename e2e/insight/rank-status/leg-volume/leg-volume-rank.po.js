var LegVolume = function(){
    this.popoverLeg = $('.volume-popover');
    this.tablePopover = element.all(by.css('[ng-repeat="leg in volumeByLegCtrl.legs"]')).get(0);
    this.firstIdUser = this.tablePopover.element(by.css('.id.ng-binding'));
    this.firstImageUser = this.tablePopover.element(by.id('user-img-0'));
    this.firstUserName = this.tablePopover.element(by.id('user-name-0'));
    this.firstUserId = this.tablePopover.element(by.id('user-id-0'));
    this.firstUserVolumeQv = this.tablePopover.element(by.id('user-volume-qv-0'));
    this.firstUserLinkDownlineTree = element(by.id('user-link-downlineTree-0'));
};

module.exports = new LegVolume();