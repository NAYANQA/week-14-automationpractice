$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/createanaccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create An Account Functionality",
  "description": "",
  "id": "create-an-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should able to create new Account",
  "description": "",
  "id": "create-an-account-functionality;user-should-able-to-create-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I can click on SignIn Page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I can enter new \"\u003cemail\u003e\" id",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I can click on Create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I can enter FirstName \"\u003cFirst name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I can enter LastName\"\u003cLast name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I can enter Password\"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can enter Address\"\u003cAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I can enter City\"\u003cCity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I can select State\"\u003cState\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I can enter Post Code\"\u003cPostal Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can select Country\"\u003cCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I can enter Mobile Phone\"\u003cMobile phone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can see the Account Name on Top Reigt",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "create-an-account-functionality;user-should-able-to-create-new-account;",
  "rows": [
    {
      "cells": [
        "email",
        "First name",
        "Last name",
        "Password",
        "Address",
        "City",
        "State",
        "Postal Code",
        "Country",
        "Mobile phone"
      ],
      "line": 21,
      "id": "create-an-account-functionality;user-should-able-to-create-new-account;;1"
    },
    {
      "cells": [
        "qa1234@gmail.com",
        "Test",
        "QA",
        "123456",
        "1234 Kings Drive",
        "Harrow",
        "indiana",
        "12345",
        "United States",
        "1234567890"
      ],
      "line": 22,
      "id": "create-an-account-functionality;user-should-able-to-create-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16627307500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should able to create new Account",
  "description": "",
  "id": "create-an-account-functionality;user-should-able-to-create-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I can click on SignIn Page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I can enter new \"qa1234@gmail.com\" id",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I can click on Create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I can enter FirstName \"Test\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I can enter LastName\"QA\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I can enter Password\"123456\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can enter Address\"1234 Kings Drive\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I can enter City\"Harrow\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I can select State\"indiana\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I can enter Post Code\"12345\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can select Country\"United States\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I can enter Mobile Phone\"1234567890\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can see the Account Name on Top Reigt",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccountSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 1289030400,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iCanClickOnSignInPage()"
});
formatter.result({
  "duration": 4152049200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qa1234@gmail.com",
      "offset": 17
    }
  ],
  "location": "CreateAccountSteps.iCanEnterNewId(String)"
});
formatter.result({
  "duration": 620503300,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iCanClickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 156114100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 23
    }
  ],
  "location": "CreateAccountSteps.iCanEnterFirstName(String)"
});
formatter.result({
  "duration": 3711181900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA",
      "offset": 21
    }
  ],
  "location": "CreateAccountSteps.iCanEnterLastName(String)"
});
formatter.result({
  "duration": 251418400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 21
    }
  ],
  "location": "CreateAccountSteps.iCanEnterPassword(String)"
});
formatter.result({
  "duration": 338530200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234 Kings Drive",
      "offset": 20
    }
  ],
  "location": "CreateAccountSteps.iCanEnterAddress(String)"
});
formatter.result({
  "duration": 289748700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 17
    }
  ],
  "location": "CreateAccountSteps.iCanEnterCity(String)"
});
formatter.result({
  "duration": 237524100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "indiana",
      "offset": 19
    }
  ],
  "location": "CreateAccountSteps.iCanSelectState(String)"
});
formatter.result({
  "duration": 20288032200,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with text: indiana\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-FUGQNF4\u0027, ip: \u0027192.168.20.71\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:151)\r\n\tat com.automationpractice.utility.Utility.selectByVisibleTextFromDropDown(Utility.java:148)\r\n\tat com.automationpractice.pages.CreateAnAccountPage.SelectState(CreateAnAccountPage.java:88)\r\n\tat com.automationpractice.steps.CreateAccountSteps.iCanSelectState(CreateAccountSteps.java:64)\r\n\tat ✽.And I can select State\"indiana\"(src/test/java/resources/featurefile/createanaccount.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 22
    }
  ],
  "location": "CreateAccountSteps.iCanEnterPostCode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 21
    }
  ],
  "location": "CreateAccountSteps.iCanSelectCountry(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 25
    }
  ],
  "location": "CreateAccountSteps.iCanEnterMobilePhone(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountSteps.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountSteps.iCanSeeTheAccountNameOnTopReigt()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 305610500,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/ourestores.feature");
formatter.feature({
  "line": 1,
  "name": "Our Stores Browsing Functionality",
  "description": "",
  "id": "our-stores-browsing-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 18701849900,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should able to brows a store",
  "description": "",
  "id": "our-stores-browsing-functionality;user-should-able-to-brows-a-store",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on \u0027Our Stores\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I can",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 46500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 56700,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/shopingcart.feature");
formatter.feature({
  "line": 1,
  "name": "Shopping Cart Functionality",
  "description": "",
  "id": "shopping-cart-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 19416660500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User able to remove item in shopping cart",
  "description": "",
  "id": "shopping-cart-functionality;user-able-to-remove-item-in-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mousehover on WOMEN tab",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I click on Summer Dresses",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Add to cart button on Product",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on proceed to checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on delete icon",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I can verify text \u0027Your shopping cart is empty.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccountSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 30700,
  "status": "passed"
});
formatter.match({
  "location": "SummerDressSteps.iMousehoverOnWOMENTab()"
});
formatter.result({
  "duration": 456782800,
  "status": "passed"
});
formatter.match({
  "location": "SummerDressSteps.iClickOnSummerDresses()"
});
formatter.result({
  "duration": 3136351300,
  "status": "passed"
});
formatter.match({
  "location": "ShopingCartSteps.iClickOnAddToCartButtonOnProduct()"
});
formatter.result({
  "duration": 20207200500,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d105.0.5195.127)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-FUGQNF4\u0027, ip: \u0027192.168.20.71\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [7d161a93c4d5451bd2fe16165afc097d, clickElement {id\u003d7d31c6cd-25f1-40af-a307-a2007cadef5b}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.127, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:60525}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60525/devtoo..., se:cdpVersion: 105.0.5195.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (7d161a93c4d5451bd2fe16165afc097d)] -\u003e xpath: //body/div[@id\u003d\u0027page\u0027]/div[2]/div[1]/div[3]/div[2]/ul[1]/li[1]/div[1]/div[2]/div[2]/a[1]]\nSession ID: 7d161a93c4d5451bd2fe16165afc097d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat com.automationpractice.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.automationpractice.pages.SummerDressesPage.clickOnAddToCartButton(SummerDressesPage.java:37)\r\n\tat com.automationpractice.steps.ShopingCartSteps.iClickOnAddToCartButtonOnProduct(ShopingCartSteps.java:11)\r\n\tat ✽.And I click on Add to cart button on Product(src/test/java/resources/featurefile/shopingcart.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShopingCartSteps.iClickOnProceedToCheckoutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShopingCartSteps.iClickOnDeleteIcon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShopingCartSteps.iCanVerifyTextYourShoppingCartIsEmpty()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1061525700,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/summerdersses.feature");
formatter.feature({
  "line": 1,
  "name": "Summer Dresses Functionality",
  "description": "",
  "id": "summer-dresses-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 40680113100,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Summer items Display inside search result",
  "description": "",
  "id": "summer-dresses-functionality;summer-items-display-inside-search-result",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mousehover on WOMEN tab",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I click on Summer Dresses",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I can see \u0027SUMMER DRESSES \u0027 text",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccountSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 43000,
  "status": "passed"
});
formatter.match({
  "location": "SummerDressSteps.iMousehoverOnWOMENTab()"
});
formatter.result({
  "duration": 5956777400,
  "status": "passed"
});
formatter.match({
  "location": "SummerDressSteps.iClickOnSummerDresses()"
});
formatter.result({
  "duration": 8099321100,
  "status": "passed"
});
formatter.match({
  "location": "SummerDressSteps.iCanSeeSUMMERDRESSESText()"
});
formatter.result({
  "duration": 83322400,
  "status": "passed"
});
formatter.after({
  "duration": 31700,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/summerdresspricerange.feature");
formatter.feature({
  "line": 1,
  "name": "Change The Price Range",
  "description": "",
  "id": "change-the-price-range",
  "keyword": "Feature"
});
formatter.before({
  "duration": 41904643500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should be able to Change Price Range",
  "description": "",
  "id": "change-the-price-range;user-should-be-able-to-change-price-range",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mousehover on WOMEN tab",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I click on Summer Dresses",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I can change the price slider $16-$20",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I can see item returned with price range",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccountSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 64000,
  "status": "passed"
});
formatter.match({
  "location": "SummerDressSteps.iMousehoverOnWOMENTab()"
});
formatter.result({
  "duration": 282992000,
  "status": "passed"
});
formatter.match({
  "location": "SummerDressSteps.iClickOnSummerDresses()"
});
formatter.result({
  "duration": 5928602200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 117200,
  "status": "passed"
});
});