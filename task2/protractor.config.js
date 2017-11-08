'use strict';
const path = require("path");
exports.config = {
    directConnect: true,
    // Base URL for application server
    baseUrl: 'http://www.bmwclub.by/',
    capabilities: {
        browserName: 'chrome',
        platform: "Windows 8.1",
        maxDuration: 10800
    },
    specs: [
        './features/*.feature'
    ],
    onPrepare: function () {
        browser.waitForAngularEnabled(false); //if your app is not angular
        browser.driver.manage().window().maximize(); //full screen mode
    },
    cucumberOpts: {
        require: [
            path.resolve('./step_definitions/**.js'),
            './env.js'
        ],
        format: ['json:output/cucumber.json'],
        tags: ['@important']
    },
    allScriptsTimeout: 200000,
    getPageTimeout: 100000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework')
};


// cucumberOpts: {
//     require: [
//         'step_definitions/*.js',
//         './env.js',
//         './hooks.js'
//     ],
//         format: 'pretty'
// },
// var configure = function () {
//     this.setDefaultTimeout(60 * 1000);
// };
//
//
// module.exports = configure;