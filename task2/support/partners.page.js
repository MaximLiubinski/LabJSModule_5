'use strict';

class Partners {
    constructor() {
        this.url = 'http://www.bmwclub.by/%D0%BF%D0%B0%D1%80%D1%82%D0%BD%D1%91%D1%80%D1%8B/';
        this.openPage = function () {
            return browser.get(this.url);
        };
        this.mainButton = element(by.id('menu-item-745'));
        this.clubButton = element(by.id('menu-item-219'));
        this.partnersButton = element(by.id('menu-item-218'));
        this.forumButton = element(by.id('menu-item-215'));

        this.bmwClubService = element(by.css('a img[title="BMW Club Service"]'));
        this.bayerncraft = element(by.css('a img[title="Байернкрафт - Официальный дилер BMW"]'));
        this.alexPremiumAuto = element(by.css('a img[title="АлексПремиумАвто"]'));
        this.lavto = element(by.css('a img[title="Lavto"]'));
    }
}
module.exports = Partners;
