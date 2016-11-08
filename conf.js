var env = require('./environment.js');

exports.config = {
    seleniumServerJar: env.seleniumServerJar,
    getPageTimeout: 300000,
    allScriptsTimeout: 900000,
    specs: env.specs,
    baseUrl: env.baseUrl,
    framework: env.framework,
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: env.capabilities,
    cucumberOpts: env.cucumberOpts,
    onPrepare: env.onPrepare
};
