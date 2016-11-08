var baseUrl = 'https://login.kyani.net';

module.exports = {
    // Path of the selenium server
    seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar",
    // Spec patterns
    specs: ['features/*.feature'],
    framework: 'custom',
    baseUrl: baseUrl,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },

    cucumberOpts: {
        require: 'features/step_definitions/*.js',
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

        browser.ignoreSynchronization = true;
        browser.driver.get(baseUrl + '/en-us/?app=office-dev');
        $('#username').sendKeys(process.env.KYANI_USER);
        $('#password').sendKeys(process.env.KYANI_KEY);
        $('button[type="submit"]').click();

        // Login takes some time, so wait until it's done.
        // For the test app's login, we know it's done when it redirects to home.html.
        return browser.driver.wait(function () {
            return browser.driver.getCurrentUrl().then(function (url) {
                return /home/.test(url);
            });
        }, 30000);
    }
};
