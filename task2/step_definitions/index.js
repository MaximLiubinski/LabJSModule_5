'use strict';
const expect=require('chai').expect;
const world = require('../support/world');
const EC = protractor.ExpectedConditions;
const DEFAULT_STEP_TIMEOUT = 10 * 1000;

module.exports = function () {

    this.Given(/^I am on Home page$/, () => {
        return world.homePage.openPage();
    });

    this.Given(/^I am on Forum page$/, () => {
        return world.forumPage.openPage();
    });

    this.Given(/^I am on Partners page$/, () => {
        return world.partnersPage.openPage();
    });

    this.Then(/^I click Main button$/, () => {
        return world.homePage.mainButton.click();
    });

    this.Then(/^I click Forum button$/, () => {
        return world.homePage.forumButton.click();
    });

    this.Then(/^I click sign in button$/, () => {
        return world.forumPage.signIn.click();
    });

    this.Then(/^Enter username '(.*)'$/, (userName) => {
        return browser.wait(EC.visibilityOf(world.forumPage.usernameField), DEFAULT_STEP_TIMEOUT)
            .then(() => {return world.forumPage.usernameField.click().clear().sendKeys(userName)}
            );
    });

    this.Then(/^Enter password '(.*)'$/, (userPassword) => {
        return browser.wait(EC.visibilityOf(world.forumPage.userpasswordField), DEFAULT_STEP_TIMEOUT)
            .then(() => {return world.forumPage.userpasswordField.click().clear().sendKeys(userPassword)}
            );
    });

    this.Then(/^Enter username "(.*)"$/, (userName) => {
        return browser.wait(EC.visibilityOf(world.forumPage.usernameField), DEFAULT_STEP_TIMEOUT)
            .then(() => {return world.forumPage.usernameField.click().clear().sendKeys(userName)}
            );
    });

    this.Then(/^Enter password "(.*)"$/, (userPassword) => {
        return browser.wait(EC.visibilityOf(world.forumPage.userpasswordField), DEFAULT_STEP_TIMEOUT)
            .then(() => {return world.forumPage.userpasswordField.click().clear().sendKeys(userPassword)}
            );
    });

    this.Then(/^I click partner '(.*)'$/, (partner) => {
        return world.partnersPage[partner].click();
    });

    this.Then(/^I click submit button$/, () => {
        return world.forumPage.submitButton.click();
    });

    this.Then(/^Page contains error message "([^"]*)"$/, (message) => {
        return browser.wait(EC.textToBePresentInElement(world.forumPage.errors, message), DEFAULT_STEP_TIMEOUT);
    });

    this.Then(/^I wait page loaded$/, () => {
        return  browser.wait(EC.visibilityOf(world.itunesPage.contentPage),DEFAULT_STEP_TIMEOUT);
    });

    this.Then(/^Page title should be "(.*)"$/, (title) => {
       return browser.getTitle().then((text)=>{
           return expect(text).to.equal(title);
        });
    });

    this.Then(/^Page title should be '(.*)'$/, (title) => {
        return browser.getTitle().then((text)=>{
            return expect(text).to.equal(title);
        });
    });
};