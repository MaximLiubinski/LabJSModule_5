const Header = require('./header.js');

class ProjectsPage extends Header{
    constructor(){
        super();
        this.url = "http://www.seleniumhq.org/projects/";
        this.webDriver = element(by.css('h3 a[href="webdriver/"]'));
        this.grid = element(by.css('h3 a[href="grid/"]'));
        this.ide = element(by.css('h3 a[href="ide/"]'));
        this.remoteControl = element(by.css('h3 a[href="remote-control/"]'));
    }

    openUrl() {
        return browser.get(this.url);
    }
}

module.exports = ProjectsPage;