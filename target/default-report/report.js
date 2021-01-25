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
  "error_message": "java.lang.IndexOutOfBoundsException: Index 0 out of bounds for length 0\n\tat java.base/jdk.internal.util.Preconditions.outOfBounds(Preconditions.java:64)\n\tat java.base/jdk.internal.util.Preconditions.outOfBoundsCheckIndex(Preconditions.java:70)\n\tat java.base/jdk.internal.util.Preconditions.checkIndex(Preconditions.java:248)\n\tat java.base/java.util.Objects.checkIndex(Objects.java:372)\n\tat java.base/java.util.ArrayList.get(ArrayList.java:458)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:39)\n\tat com.sun.proxy.$Proxy20.get(Unknown Source)\n\tat step_definitions.AddToCartStepDefinitions.user_verifies_the_items_are_added_to_the_shopping_cart(AddToCartStepDefinitions.java:40)\n\tat ✽.User verifies the items are added to the shopping cart(file:src/test/resources/features/CheckOut.feature:16)\n",
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
formatter.embedding("image/png", "embedded0.png", "User adds to cart two or more items");
formatter.after({
  "status": "passed"
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
  "error_message": "java.lang.IndexOutOfBoundsException: Index 0 out of bounds for length 0\n\tat java.base/jdk.internal.util.Preconditions.outOfBounds(Preconditions.java:64)\n\tat java.base/jdk.internal.util.Preconditions.outOfBoundsCheckIndex(Preconditions.java:70)\n\tat java.base/jdk.internal.util.Preconditions.checkIndex(Preconditions.java:248)\n\tat java.base/java.util.Objects.checkIndex(Objects.java:372)\n\tat java.base/java.util.ArrayList.get(ArrayList.java:458)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:39)\n\tat com.sun.proxy.$Proxy20.get(Unknown Source)\n\tat step_definitions.AddToCartStepDefinitions.user_verifies_the_items_are_added_to_the_shopping_cart(AddToCartStepDefinitions.java:40)\n\tat ✽.User verifies the items are added to the shopping cart(file:src/test/resources/features/CheckOut.feature:16)\n",
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
formatter.embedding("image/png", "embedded1.png", "User adds to cart two or more items");
formatter.after({
  "status": "passed"
});
});