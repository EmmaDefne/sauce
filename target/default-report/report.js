$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  As a user, I want to be able to login with username and password",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login as user and verify that page title is Swag Labs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_Positive"
    }
  ]
});
formatter.step({
  "name": "User launches the Swag Labs page",
  "keyword": "Given "
});
formatter.step({
  "name": "User logs in to Swag Labs with user name \"\u003cUser_Name\u003e\" password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should verify that page title is a Swag Labs",
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
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login as user and verify that page title is Swag Labs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@login_Positive"
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
  "name": "User logs in to Swag Labs with user name \"standard_user\" password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_to_Swag_Labs_with_user_name_password(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027user-name\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.96)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:1859:259a:984c:9009%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u002711.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.96, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: /var/folders/rl/gglgn0ln17j...}, goog:chromeOptions: {debuggerAddress: localhost:63328}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: cfd7e59063bc704741c07da3db8a8fd6\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027user-name\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.sendKeys(Unknown Source)\n\tat pages.LoginPage.login(LoginPage.java:70)\n\tat step_definitions.LoginStepDefinitions.user_logs_in_to_Swag_Labs_with_user_name_password(LoginStepDefinitions.java:32)\n\tat ✽.User logs in to Swag Labs with user name \"standard_user\" password \"secret_sauce\"(file:src/test/resources/features/Login.feature:10)\n",
  "status": "failed"
});
formatter.step({
  "name": "User should verify that page title is a Swag Labs",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_verify_that_page_title_is_a_Swag_Labs()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "Login as user and verify that page title is Swag Labs");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as user and verify that page title is Swag Labs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@login_Positive"
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
  "name": "User logs in to Swag Labs with user name \"problem_user\" password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_to_Swag_Labs_with_user_name_password(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027user-name\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.96)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:1859:259a:984c:9009%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u002711.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.96, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: /var/folders/rl/gglgn0ln17j...}, goog:chromeOptions: {debuggerAddress: localhost:63361}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 5de0e1a7df306f738cd8d9ee0a0d0189\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027user-name\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.sendKeys(Unknown Source)\n\tat pages.LoginPage.login(LoginPage.java:70)\n\tat step_definitions.LoginStepDefinitions.user_logs_in_to_Swag_Labs_with_user_name_password(LoginStepDefinitions.java:32)\n\tat ✽.User logs in to Swag Labs with user name \"problem_user\" password \"secret_sauce\"(file:src/test/resources/features/Login.feature:10)\n",
  "status": "failed"
});
formatter.step({
  "name": "User should verify that page title is a Swag Labs",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_verify_that_page_title_is_a_Swag_Labs()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", "Login as user and verify that page title is Swag Labs");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as user and verify that page title is Swag Labs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@login_Positive"
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
  "name": "User logs in to Swag Labs with user name \"performance_glitch_user\" password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_to_Swag_Labs_with_user_name_password(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027user-name\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.96)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:1859:259a:984c:9009%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u002711.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.96, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: /var/folders/rl/gglgn0ln17j...}, goog:chromeOptions: {debuggerAddress: localhost:63389}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: ec017c8bf7b9d8de56e66172be78fea9\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027user-name\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.sendKeys(Unknown Source)\n\tat pages.LoginPage.login(LoginPage.java:70)\n\tat step_definitions.LoginStepDefinitions.user_logs_in_to_Swag_Labs_with_user_name_password(LoginStepDefinitions.java:32)\n\tat ✽.User logs in to Swag Labs with user name \"performance_glitch_user\" password \"secret_sauce\"(file:src/test/resources/features/Login.feature:10)\n",
  "status": "failed"
});
formatter.step({
  "name": "User should verify that page title is a Swag Labs",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_verify_that_page_title_is_a_Swag_Labs()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", "Login as user and verify that page title is Swag Labs");
formatter.after({
  "status": "passed"
});
});