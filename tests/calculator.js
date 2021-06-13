let homepage = require('../pages/homepage')
describe("Calculator app", function () {
    it("Addititon Test", function () {
        homepage.get("https://juliemr.github.io/protractor-demo/");
        browser.sleep(2000);
        homepage.enterFirstNumber("3");
        homepage.enterSecondNumber("2");
        homepage.clickGo();
        browser.sleep(2000);
        homepage.verifyResult("5");
    })
})