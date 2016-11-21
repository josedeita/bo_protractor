/**
 * Created by ssierrao on 21/11/2016.
 */
module.exports = function () {

    this.When(/^he inputs a valid <distributor ID>$/, function () {
        var distributorInput = $('#distributorInput');
        distributorInput.sendKeys('502');
        return true;
    });

    this.When(/^clicks on next$/, function () {
        var nextButton = browser.findElement(by.id("nextButton"));
        return nextButton.click();
    });

    this.Then(/^he sees the Assign Ticket label$/, function () {
        var nextButton = browser.findElement(by.id("ticketMessage"));
        return expect(nextButton).to.eventually.exist;
    });

    this.Then(/^he sees the Distributor ID label$/, function () {
        var distributorId = browser.findElement(by.id("distributorId"));
        return expect(distributorId).to.eventually.exist;
    });

    this.Then(/^he sees the ID field populated with the provided <distributor ID>$/, function () {
        var distributorInput = browser.findElement(by.id("distributorInput"));
        return expect(distributorInput.getAttribute('value')).to.eventually.to.equal('502');
    });

    this.Then(/^he sees the Name label$/, function () {
        var fullName = browser.findElement(by.id("fullName"));
        return expect(fullName).to.eventually.exist;
    });

    this.Then(
        /^he sees the name field populated with the <distributor name> according to the service$/,
        function () {
            var fullName = browser.findElement(by.id("fullName"));
            browser.sleep(1000);
            return expect(fullName.getAttribute('value')).to.eventually.to
                .equal('Landon Satele ');
        });

    this.Then(/^he sees the Name field un\-editable$/, function () {
        var fullName = browser.findElement(by.id("fullName"));
        return expect(fullName.getAttribute('disabled')).to.eventually.to.equal('true');
    });

    this.Then(/^he sees the Email label$/, function () {
        var email = browser.findElement(by.id("email"));
        return expect(email).to.eventually.exist;
    });

    this.Then(
        /^he sees the email field populated with the <distributor email> according to the service$/,
        function () {
            var email = browser.findElement(by.id("email"));
            return expect(email.getAttribute('value')).to.eventually.to
                .equal('lsatele98@gmail.com');
        });

    this.Then(/^he sees the email field editable$/, function () {
        var email = browser.findElement(by.id("email"));
        return expect(email.getAttribute('disabled')).to.eventually.to.equal(null);
    });

    this.Then(/^he sees the Cancel option$/, function () {
        var myReassignTicketCancelButton = browser.findElement(
            by.id("myReassignTicketCancelButton"));
        return expect(myReassignTicketCancelButton).to.eventually.exist;
    });

    this.Then(/^he sees the Send option$/, function () {
        var myReassignTicketMessageConfirmButton = browser.findElement(
            by.id("myReassignTicketMessageConfirmButton"));
        return expect(myReassignTicketMessageConfirmButton).to.eventually.exist;
    });
};