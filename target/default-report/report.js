$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CheckOut.feature");
formatter.feature({
  "name": "Add To Cart",
  "description": "  As a user, I want to be able to check out",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User adds to cart two or more items",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CheckOut"
    }
  ]
});
formatter.step({
  "name": "User launches the Swag Labs page",
  "keyword": "Given "
});
formatter.step({
  "name": "User logs in to Swag Labs with username \"\u003cUser_Name\u003e\" password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should verify that title is a Swag Labs",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks the product sort button",
  "keyword": "Then "
});
formatter.step({
  "name": "User will able to sort items by price from lowest the highest",
  "keyword": "Then "
});
formatter.step({
  "name": "User adds  any item to shopping cart",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks shopping cart button",
  "keyword": "Then "
});
formatter.step({
  "name": "User verifies the items are added to the shopping cart",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks checkout button",
  "keyword": "Then "
});
formatter.step({
  "name": "User fills out all information on the checkout page",
  "keyword": "Then "
});
formatter.step({
  "name": "User verifies the items are added to the shopping cart",
  "keyword": "Then "
});
formatter.step({
  "name": "User verifies total price is added to the shopping cart",
  "keyword": "Then "
});
formatter.step({
  "name": "User click finish button",
  "keyword": "Then "
});
formatter.step({
  "name": "User verifies SwagLabs Page header text is \"THANK YOU FOR YOUR ORDER\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "User_Name",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User adds to cart two or more items",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CheckOut"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches the Swag Labs page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_launches_the_Swag_Labs_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in to Swag Labs with username \"standard_user\" password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_to_Swag_Labs_with_username_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify that title is a Swag Labs",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartStepDefinitions.user_should_verify_that_title_is_a_Swag_Labs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the product sort button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_the_product_sort_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will able to sort items by price from lowest the highest",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_will_able_to_sort_items_by_price_from_lowest_the_highest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User adds  any item to shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartStepDefinitions.user_adds_any_item_to_shopping_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks shopping cart button",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartStepDefinitions.user_clicks_shopping_cart_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies the items are added to the shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartStepDefinitions.user_verifies_the_items_are_added_to_the_shopping_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks checkout button",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckOutStepDefinitions.user_clicks_checkout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills out all information on the checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckOutStepDefinitions.user_fills_out_all_information_on_the_checkout_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies the items are added to the shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartStepDefinitions.user_verifies_the_items_are_added_to_the_shopping_cart()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d88.0.4324.96)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:1859:259a:984c:9009%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u002711.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.96, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: /var/folders/rl/gglgn0ln17j...}, goog:chromeOptions: {debuggerAddress: localhost:65412}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 814137c785c43f56da823e038b89caed\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027inventory_item_name\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:432)\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:348)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:85)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\n\tat com.sun.proxy.$Proxy20.get(Unknown Source)\n\tat step_definitions.AddToCartStepDefinitions.user_verifies_the_items_are_added_to_the_shopping_cart(AddToCartStepDefinitions.java:40)\n\tat ✽.User verifies the items are added to the shopping cart(file:src/test/resources/features/CheckOut.feature:16)\n",
  "status": "failed"
});
formatter.step({
  "name": "User verifies total price is added to the shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckOutStepDefinitions.user_verifies_total_price_is_added_to_the_shopping_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click finish button",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckOutStepDefinitions.user_click_finish_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies SwagLabs Page header text is \"THANK YOU FOR YOUR ORDER\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckOutStepDefinitions.user_verifies_SwagLabs_Page_header_text_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d88.0.4324.96)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:1859:259a:984c:9009%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u002711.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.96, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: /var/folders/rl/gglgn0ln17j...}, goog:chromeOptions: {debuggerAddress: localhost:65412}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 814137c785c43f56da823e038b89caed\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat step_definitions.Hooks.tearDown(Hooks.java:36)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
});