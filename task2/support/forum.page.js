'use strict';

class Forum {
    constructor() {
        this.url = 'http://www.bmwclub.by/forum/';
        this.openPage = function () {
            return browser.get(this.url);
        };
        this.signIn = element(by.id('sign_in'));
        this.usernameField = element(by.id('ips_username'));
        this.userpasswordField = element(by.id('ips_password'));
        this.submitButton = element(by.css('div.ipsForm_submit input.ipsButton'));
        this.errors = element(by.css('.error'));
        this.loginForm = element(by.css('form#login'));
    }
}
module.exports = Forum;
