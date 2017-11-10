const Header = require('./parts/header');
const Sponsors = require('./parts/sponsors');

class DownloadPage {
    constructor(){
        this.header = new Header();
        this.sponsors = new Sponsors();
        this.url = "http://www.seleniumhq.org/download/";
        this.downloadJava = element(by.css('a[href="http://selenium-release.storage.googleapis.com/3.7/selenium-java-3.7.1.zip"]'));
    }

    openUrl() {
        return browser.get(this.url);
    }
}

module.exports = DownloadPage;