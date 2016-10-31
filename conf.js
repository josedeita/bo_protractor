var env = require('./environment.js');

exports.config = {
    seleniumServerJar: env.seleniumServerJar,
    specs: env.specs,
    baseUrl: env.baseUrl,
    framework: env.framework,
    capabilities: env.capabilities,
    jasmineNodeOpts: env.jasmineNodeOpts,
    onPrepare: env.onPrepare
};
