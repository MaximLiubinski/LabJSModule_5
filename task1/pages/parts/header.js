class Header{
    constructor() {
        this.selebiumHQ = element(by.css("a[title = 'Return to Selenium home page']"));
        this.projects =  element(by.css("a[title = 'Selenium Projects']"));
        this.download =  element(by.css("a[title = 'Get Selenium']"));
        this.documentation =  element(by.css("#menu_documentation > a"));
        this.support =  element(by.css("a[title = 'Get help with Selenium']"));
        this.about =  element(by.css("a[title = 'Overview of Selenium']"));
        this.searchFild =  element(by.css("#q"));
        this.searchGo =  element(by.css("#submit"));
    }
}
module.exports = Header;