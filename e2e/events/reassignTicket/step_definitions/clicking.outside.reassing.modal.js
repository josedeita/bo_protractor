/**
 * Created by ssierrao on 21/11/2016.
 */
module.exports = function () {

    this.Given(/^he clicks outside the modal$/, function () {
        var outFromModal = browser.findElement(by.css(".modal"));
        return outFromModal.click();
    });

    this.Given(/^he do not see assignation modal$/, function () {
        var modal = browser.findElement(by.id("myReassignTicketModal"));
        return  modal == 'undefined';
    });
};