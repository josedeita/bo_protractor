module.exports = {
    // Path of the selenium server
    seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar",
    // Spec patterns
    specs: [

        'e2e/insight/paygatesstatus/leg-volume/**/*.feature'
    ],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // change for https://login.kyani.net when integrate with bamboo
    baseUrl: 'https://login.kyani.net',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },

    cucumberOpts: {
        require: [
            'e2e/support/timeout.js',
            'e2e/support/world.js',
            'e2e/insight/commons/*.js',
            'e2e/insight/**/step_definitions/*.js',

            'e2e/insight/rank-status/leg-volume/**/step_definitions/*.js',
            'e2e/insight/paygatesStatus/leg-volume/**/step_definitions/*.js'
        ],
        tags: ['@legVolumePay'],
        format: 'pretty',
        profile: false,
        'no-source': true
    },

    onPrepare: function () {
        // Set up chai and chai-as-promised
        var provideChai = require('./e2e/support/provideChai.js');
        provideChai.loadChai();

        // set implicit wait times in ms...
        browser.manage().timeouts().implicitlyWait(9000);
        // set browser size...
        browser.manage().window().setSize(1024, 800);
    }
};
