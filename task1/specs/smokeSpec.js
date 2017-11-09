const World = require("../pages/world");

let world = new World();

describe('smoke', function() {
    it('test', function() {
        world.projects.openUrl();

        expect(browser.getTitle()).toEqual('Selenium Projects');
    });
});