const Header = require('./header.js');

class DocumentationPage extends Header{
    constructor(){
        super();
        this.url = "http://www.seleniumhq.org/docs/";
        this.note = element(by.css('li.toctree-l1 a[href="00_Note_to-the-reader.jsp"]'));
        this.introduction = element(by.css('li.toctree-l1 a[href="01_introducing_selenium.jsp"]'));
        this.seleniumIde = element(by.css('li.toctree-l1 a[href="02_selenium_ide.jsp"]'));
        this.seleniumWebDriver = element(by.css('li.toctree-l1 a[href="03_webdriver.jsp"]'));
        this.seleniumAdvanced = element(by.css('li.toctree-l1 a[href="04_webdriver_advanced.jsp"]'));
        this.seleniumRC = element(by.css('li.toctree-l1 a[href="05_selenium_rc.jsp"]'));
        this.testDesign = element(by.css('li.toctree-l1 a[href="06_test_design_considerations.jsp"]'));
        this.seleniumGrid = element(by.css('li.toctree-l1 a[href="07_selenium_grid.jsp"]'));
        this.userExtensions = element(by.css('li.toctree-l1 a[href="08_user_extensions.jsp"]'));
    }
    openUrl() {
        return browser.get(this.url);
    }
}
module.exports = DocumentationPage;