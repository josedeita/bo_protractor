var Helper = function () {
    /**
     * Open the backOffice and makes the login
     * @param  {string} user     Optional: id, if not provided the user the env var KYANI_USER
     * @param  {string} password Optional: password, if not provided the user the env var KYANI_KEY
     */
    this.login = function (user, password) {
        var userField = $('#username');
        var passwordField = $('#password');
        var submitButton = $('button[type="submit"]');

        user = user || process.env.KYANI_USER;
        password = password || process.env.KYANI_KEY;

        browser.ignoreSynchronization = true;
        browser.driver.get(browser.baseUrl + '/en-us/?app=office-dev');

        userField.sendKeys(user);
        passwordField.sendKeys(password);
        submitButton.click();

        return browser.driver.wait(function () {
            return browser.driver.getCurrentUrl().then(function (url) {
                return /home/.test(url);
            });
        }, 30000);
    };

    this.ChinaLogin = function (user, password) {
        var userField = $('#username');
        var passwordField = $('#password');
        var submitButton = $('button[type="submit"]');

        user = user || process.env.KYANI_USER;
        password = password || process.env.KYANI_KEY;

        browser.ignoreSynchronization = true;
        //browser.driver.get('https://office-dev.kyani.cn' + '/login');
        browser.driver.get('https://office-dev.kyani.cn' + '/login');

        userField.sendKeys(user);
        passwordField.sendKeys(password);
        submitButton.click();

        return browser.driver.wait(function () {
            return browser.driver.getCurrentUrl().then(function (url) {
                return /home/.test(url);
            });
        }, 30000);
    };

    this.logout = function () {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
        browser.driver.manage().deleteAllCookies();
        //browser.driver.get('https://login.kyani.net/en-us/?app=testdrive');
         //browser.restart();

    };

};

module.exports = new Helper();
