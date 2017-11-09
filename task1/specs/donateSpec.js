const World = require("../pages/world");
const Header = require("../pages/header");
const world = new World();
const header = new Header();

beforeEach(()=>{
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
});

describe("Donate", () => {
    afterEach(() => {
        header.donate.click();
        browser.wait(EC.titleIs('Donate'), 5000);
        browser.element(by.css("input#currencyAmount")).click().sendKeys("123");
        browser.element(by.css("button#guestPaymentBtn")).click();
        expect(browser.element.all(by.css(".vx_form-control-error-icon")).count()).toEqual(13);
    });

    it("donate from projects page", () => {
        world.projects.openUrl();
    });

    it("donate from documentation page", () => {
        world.documentation.openUrl();
    });
});