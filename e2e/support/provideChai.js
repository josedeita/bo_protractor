var ProvideChai = function () {
    'use strict';

    this.loadChai = function () {
        var chai = require('chai');

        chai.use(require('chai-as-promised'));
        global.chai = chai;
        global.expect = chai.expect;
    };
};

module.exports =  new ProvideChai();
