var baseUrl = 'https://login.kyani.cn';

var LoginPage = function () {
  this.login = function(user, pass){

    browser.ignoreSynchronization = true;
    browser.driver.get(baseUrl + '/zh-cn');

    // Login takes some time, so wait until it's done.
    // For the test app's login, we know it's done when it redirects to home.html.

    $('#username').sendKeys(user);
    $('#password').sendKeys(pass);
    $('button[type="submit"]').click();

    return browser.driver.wait(function () {
        return browser.driver.getCurrentUrl().then(function (url) {
            return /home/.test(url);
        });
    }, 30000);
  }

  //To execute:
  //navigate to: C:\Users\dbonillab\Documents\kyani\bo_protractor>
  //C:\Users\dbonillab\Documents\kyani\bo_protractor>npm test

};

module.exports = new LoginPage();
