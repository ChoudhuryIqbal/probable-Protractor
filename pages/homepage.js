let homepage = function () {
    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.enterFirstNumber = function (firstNo) {
        firstNumber_input.sendKeys(firstNo);
    }

    this.enterSecondNumber = function (secondNo) {
        secondNumber_input.sendKeys(secondNo);
    }
    this.clickGo = function () {
        goButton.click();
    }
    this.verifyResult = function (result) {
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    }
    this.get = function (url) {
        browser.get(url);
    }
};
module.exports = new homepage();