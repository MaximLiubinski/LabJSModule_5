"use strict";

exports.config = {
    framework: 'jasmine',
    directConnect: true,
    baseUrl: 'http://www.seleniumhq.org/',
    capabilities: {
        browserName: 'chrome',
        platform: "Windows 8.1",
        maxDuration: 10800
    },
    specs: [
        './specs/*[Ss]pec.js'
    ],
    onPrepare: function (){
        global.EC = protractor.ExpectedConditions;
        global.defTimeoutExplicit = 5 * 1000;

        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
    },
    allScriptsTimeout: 200000,
    getPageTimeout: 100000
};