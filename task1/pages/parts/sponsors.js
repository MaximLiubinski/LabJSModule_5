class Sponsors{
    constructor(){
        this.donate = element(by.css('input[alt="PayPal - The safer, easier way to pay online!"]'))
        this.browserStack = element(by.css('a img[src=/sponsors/browserstack.png]'));
        this.sauceLabs = element(by.css('a img[alt="Sauce Labs"]'));
        this.Experitest = element(by.css('a img[alt="Experitest"]'));
        this.newRelicSynthetics = element(by.css('a img[alt="New Relic Synthetics"]'));
        this.cbt = element(by.css('a img[src="/sponsors/CBT-Logo.png"]'));
        this.applitools = element(by.css('a img[src="/sponsors/applitools.png"]'));
        this.ranorexSelocity = element(by.css('a img[src="/sponsors/Selocity_banner_Seleniumhq.png"]'));
        this.microfocus = element(by.css('a img[src="/sponsors/microfocus.png"]'));
    }
}

module.exports = Sponsors;