const Header = require('./header.js');

class ProjectsPage extends Header{
    constructor(){
        super();
        this.webDriver = element(by.css('h3 a[href="webdriver/"]'));
        this.grid = element(by.css('h3 a[href="grid/"]'));
        this.ide = element(by.css('h3 a[href="ide/"]'));
        this.remoteControl = element(by.css('h3 a[href="remote-control/"]'));
    }
}

module.exports = ProjectsPage;