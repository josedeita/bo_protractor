/**
 * Created by ssierrao on 21/11/2016.
 */
module.exports = function () {

    this.When(/^he inputs an invalid <distributor ID>$/, function () {
        var distributorInput = $('#distributorInput');
        distributorInput.sendKeys('7asd8a7'); //<- random id
        return expect(distributorInput.getAttribute('value')).to.eventually.to.equal('7asd8a7');
    });

    this.Then(/^he sees an <invalid ID message>$/, function () {
        var errorMessage = browser.findElement(by.id("errorMessage"));
        return expect(errorMessage).to.eventually.exist;
    });

};