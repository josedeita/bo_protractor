'use strict';

function CustomWorld() {
    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');
    this.expect = chai.expect;
    chai.use(chaiAsPromised);
}

module.exports = function() {
    this.World = CustomWorld;
};
