/**
 * Created by ssierrao on 17/11/2016.
 */
module.exports = function () {

    this.When(/^he clicks on the X$/, function () {
        var xButton = browser.findElement(by.id("myReassignTicketMessageCloseButton"));
        xButton.click();
    });

};