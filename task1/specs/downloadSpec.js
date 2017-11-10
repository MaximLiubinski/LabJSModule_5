var filename = 'C:/Users/Maksim_Liubinski/Downloads/selenium-java-3.7.1.zip';
var fs = require('fs');
const World = require("../pages/world");
const world = new World();

describe('test download', () => {

    beforeAll(() => {
        if (fs.existsSync(filename)) {
            fs.unlinkSync(filename);
        }
    });

    afterAll(() => {
            fs.unlinkSync(filename);
    });

    it('download java', () => {
        world.download.openUrl();
        browser.wait(EC.titleIs('Downloads'), 5000);
        world.download.downloadJava.click().then(()=>{
            return browser.sleep(10000);
        }).then(()=> expect(fs.existsSync(filename)).toEqual(true));
    });
});