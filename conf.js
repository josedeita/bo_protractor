var env = require('./environment.js');

exports.config = {
    seleniumServerJar: env.seleniumServerJar,
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    specs: env.specs,
    baseUrl: env.baseUrl,
    framework: env.framework,
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: env.capabilities,
    cucumberOpts: env.cucumberOpts,
    onPrepare: env.onPrepare
};
