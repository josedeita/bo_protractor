/**
 * Created by ssierrao on 29/11/2016.
 */
module.exports = function () {
    this.When(/^he clicks on invite a guest option$/, function () {
        var myInviteeIsAGuest = browser.findElement(by.id("myInviteeIsAGuest"));
        return myInviteeIsAGuest.click();
    });

    this.When(/^he clicks send button$/, function () {
        var sendButton = browser.findElement(by.id("myReassignTicketMessageConfirmButton"));
        return sendButton.click();
    });

    this.Then(/^he inputs a name \"([^\"]*)\"$/, function (name) {
        var distributorInput = $('#fullName');
        distributorInput.sendKeys(name);
        return expect(distributorInput.getAttribute('value')).to.eventually.to.equal(name);
    });

    this.Then(/^he inputs a valid email (.+)$/, function (email) {
        var distributorInput = $('#email');
        distributorInput.sendKeys(email); //<- random id
        return expect(distributorInput.getAttribute('value')).to.eventually.to.equal(email);
    });

    this.Then(/^he sees my confirmation modal$/, function () {
        var sendButton = browser.findElement(by.id("myConfirmationModal"));
        return expect(sendButton).to.eventually.exist;
    });

    this.Then(/^he sees the Name label field editable$/, function () {
        var fullName = browser.findElement(by.id("fullName"));
        return expect(fullName.getAttribute('disabled')).to.eventually.to.equal(null);
    });
};