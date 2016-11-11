var baseUrl = 'http://localhost:9000/login';

module.exports = {
    // Path of the selenium server
    seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar",
    // Spec patterns
    specs: ['e2e/events/*.feature'],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: baseUrl,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },

    cucumberOpts: {
        require: [
            'e2e/support/timeout.js',
            'e2e/support/world.js',
            'e2e/**/step_definitions/*.js'
        ],
        tags: false,
        format: 'pretty',
        profile: false,
        'no-source': true
    },

    onPrepare: function () {
        // Set up chai and chai-as-promised
        var helper = require('./e2e/support/provideChai.js');
        helper.loadChai();

        // set implicit wait times in ms...
        browser.manage().timeouts().implicitlyWait(9000);
        // set browser size...
        browser.manage().window().setSize(1024, 800);
    }
};
