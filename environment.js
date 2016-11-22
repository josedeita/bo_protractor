var baseUrl = 'https://login.kyani.net';

module.exports = {
    // Path of the selenium server
    seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar",
    // Spec patterns
    specs: ['e2e/backoffice/china_rank_icons/*.feature'],
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
            'e2e/backoffice/china_rank_icons/step_definitions/*.js'
        ],
        tags: false,
        format: 'pretty',
        profile: false,
        'no-source': true
    },

    onPrepare: function () {
        // set implicit wait times in ms...
        browser.manage().timeouts().implicitlyWait(9000);
        // set browser size...
        browser.manage().window().setSize(1024, 800);

    }
};
