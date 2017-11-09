const World = require("../pages/world");
const world = new World();

beforeEach(()=>{
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
});

describe("smoke", () => {
    it("open projects page", () => {
        world.projects.openUrl();
        expect(browser.getTitle()).toEqual('Selenium Projects');
    });
    it("open documentation page", () => {
        world.documentation.openUrl();
        expect(browser.getTitle()).toEqual('Selenium Documentation — Selenium Documentation');
    });
    it("open Selenium-Grid documentation", () => {
        world.documentation.openUrl();
        world.documentation.seleniumGrid.click();
        expect(browser.getTitle()).toEqual('Selenium-Grid — Selenium Documentation');
    });
});

