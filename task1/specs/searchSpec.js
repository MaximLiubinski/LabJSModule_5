const World = require("../pages/world");
const Header = require("../pages/header");
const world = new World();
const header = new Header();

beforeEach(()=>{
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
});

describe("test searching", () => {
    it('search "webdriver"', () => {
        world.projects.openUrl();
        header.searchFild.click().sendKeys("webdriver");
        header.searchGo.click();
        browser.wait(EC.titleIs('Google Custom Search'), 5000);
        browser.wait(EC.visibilityOf(element(by.linkText("WebDriverJs · SeleniumHQ/selenium Wiki · GitHub"), 5000)));
        browser.element(by.linkText("WebDriverJs · SeleniumHQ/selenium Wiki · GitHub")).click()
        expect(browser.getTitle()).toEqual('WebDriverJs · SeleniumHQ/selenium Wiki · GitHub');
    });
});