'use strict';

class Home {
    constructor() {
        this.url = 'http://www.bmwclub.by/';
        this.openPage = function () {
            return browser.driver.get(this.url);
        };
        this.mainButton = element(by.id('menu-item-745'));
        this.clubButton = element(by.id('menu-item-219'));
        this.partnersButton = element(by.id('menu-item-218'));
        this.forumButton = element(by.id('menu-item-215'));


    }
}
module.exports = Home;
