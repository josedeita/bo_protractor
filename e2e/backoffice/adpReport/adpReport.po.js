var adpReportPage = function () {
    this.genealogyOption = $('#menu-option-genealogy');
    this.genealogyListSubmenu = element(by.xpath('//*[@id="menu-option-genealogy"]/*/i'));
    this.title_adp = $('#title-adp');
    this.buildDate_adp = $('#build-date-adp');
    this.companiesName_adp = $('#company-name-adp');
    this.id_adp = $('#id-adp');
    this.Sponsored_adp = $('#sponsored-adp');
    this.labelLeg1_adp = $('#label-leg-0');
    this.volumeLeg1_adp = $('#volume-leg-0');
    this.labelLeg2_adp = $('#label-leg-1');
    this.volumeLeg2_adp = $('#volume-leg-1');
    this.labelLeg3_adp = $('#label-leg-2');
    this.volumeLeg3_adp = $('#volume-leg-2');
    this.labelOtherLegs_adp = $('#label-leg-3');
    this.volumeOtherLegs_adp = $('#volume-leg-3');
};

module.exports = adpReportPage;
