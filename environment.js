var baseUrl = 'https://login.kyani.net';

module.exports = {
    // Path of the selenium server
    seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar",
    // Spec patterns
    specs: ['e2e/**/adpReport.*.test.js'],
    //suites: {adpTest:'e2e/test/*test.js'},
    framework: 'jasmine2',
    baseUrl: baseUrl,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
        /*shardTestFiles: true ,
        maxInstances: 2*/
    },

    // Jasmine node options
    // See https://github.com/jasmine/jasmine-npm/blob/master/lib/jasmine.js
    jasmineNodeOpts: {
        showColors: true,
        displayStacktrace: true,
        displaySpecDuration: true,
        // overrides jasmine's print method to report dot syntax for custom reports
        print: function () {},
        defaultTimeoutInterval: 50000
    },

    onPrepare: function () {
        // set implicit wait times in ms...
        browser.manage().timeouts().implicitlyWait(5000);
        // set browser size...
        browser.manage().window().setSize(1024, 800);

        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        var SpecReporter = require('jasmine-spec-reporter');

        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './reports/'
        }));
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'spec'}));
        //to execute= npm test
    }
};
