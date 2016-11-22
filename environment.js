module.exports = {
    // Path of the selenium server
    seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar",
    // Spec patterns
    specs: [
        'e2e/events/**/*.feature'
    ],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // change for https://login.kyani.net when integrate with bamboo
    baseUrl: 'http://localhost:9000',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },

    cucumberOpts: {
        require: [
            'e2e/support/timeout.js',
            'e2e/support/world.js',
            'e2e/events/**/commons/*.js',
            'e2e/events/**/step_definitions/*.js'
        ],
        tags: [/*'@eventsList',*/
            /*'@reassignTickets',*/
            /*'@cancelReassignTicket'*/
            /*'@cancelThroughXReassignTicket'*/
            /*'@confirmReassignTicket'*/
            /*'@CheckingAssignModal'*/
            /*'@assignTicketInputValidDistributorIdAndNext'*/
            /*'@assignTicketInvalidInputDistributorIdAndNext'*/
            /*'@clickingOutsideReassignModal'*/
            '@clickingOutsideAssignTicketToDistributorModal'
            /*'@ticketsList'*/
            /*'@cancelReassignTicket'*/],
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
