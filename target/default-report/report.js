$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AddToCart.feature");
formatter.feature({
  "name": "Add To Cart",
  "description": "  As a user, I want to be able to add any item into shopping cart",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Cart"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User adds to cart two or more items",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addToCart"
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
  "name": "User is able to remove any item from shopping cart",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks continue shopping button",
  "keyword": "Then "
});
formatter.step({
  "name": "User adds  any item to shopping cart",
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
      "name": "@Cart"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@addToCart"
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
  "name": "User is able to remove any item from shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartStepDefinitions.user_is_able_to_remove_any_item_from_shopping_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks continue shopping button",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartStepDefinitions.user_clicks_continue_shopping_button()"
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
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User will be able to remove any item from shopping cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@removeItem"
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
  "name": "User is able to remove any item from shopping cart",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks continue shopping button",
  "keyword": "Then "
});
formatter.step({
  "name": "User adds  any item to shopping cart",
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
  "name": "User will be able to remove any item from shopping cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Cart"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@removeItem"
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
  "name": "User is able to remove any item from shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartStepDefinitions.user_is_able_to_remove_any_item_from_shopping_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks continue shopping button",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartStepDefinitions.user_clicks_continue_shopping_button()"
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
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/CheckOut.feature");
formatter.feature({
  "name": "Add To Cart",
  "description": "  As a user, I want to be able to check out",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
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
      "name": "@Regression"
    },
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
  "status": "passed"
});
formatter.step({
  "name": "User verifies total price is added to the shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckOutStepDefinitions.user_verifies_total_price_is_added_to_the_shopping_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click finish button",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckOutStepDefinitions.user_click_finish_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies SwagLabs Page header text is \"THANK YOU FOR YOUR ORDER\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckOutStepDefinitions.user_verifies_SwagLabs_Page_header_text_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  As a User, I want to be able to login with username and password",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@Regression"
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
      "name": "@Regression"
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
  "status": "passed"
});
formatter.step({
  "name": "User should verify that page title is a Swag Labs",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_verify_that_page_title_is_a_Swag_Labs()"
});
formatter.result({
  "status": "passed"
});
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
      "name": "@Regression"
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
  "status": "passed"
});
formatter.step({
  "name": "User should verify that page title is a Swag Labs",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_verify_that_page_title_is_a_Swag_Labs()"
});
formatter.result({
  "status": "passed"
});
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
      "name": "@Regression"
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
  "status": "passed"
});
formatter.step({
  "name": "User should verify that page title is a Swag Labs",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_verify_that_page_title_is_a_Swag_Labs()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login as user and verify that page title is Swag Labs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@locked_out_User"
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
  "name": "User should not able to login and see error message \"\u003cError Message\u003e\" on the login page",
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
        "Password",
        "Error Message"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Epic sadface: Sorry, this user has been locked out."
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
      "name": "@Regression"
    },
    {
      "name": "@locked_out_User"
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
  "name": "User logs in to Swag Labs with user name \"locked_out_user\" password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_to_Swag_Labs_with_user_name_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should not able to login and see error message \"Epic sadface: Sorry, this user has been locked out.\" on the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_not_able_to_login_and_see_error_message_on_the_login_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User sorts the items by price from lowest to highest",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sortItems"
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
  "name": "User should verify that page title is a Swag Labs",
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
  "name": "User sorts the items by price from lowest to highest",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@sortItems"
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
  "name": "User should verify that page title is a Swag Labs",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_verify_that_page_title_is_a_Swag_Labs()"
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
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login as user and verify that page title is Swag Labs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loginNegative"
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
        "Password",
        "Error_Message_For_User_Name",
        "Error_Message_For_Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "",
        "",
        "Epic sadface: Password is required"
      ]
    },
    {
      "cells": [
        "",
        "secret_sauce",
        "Epic sadface: Username is required",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "Epic sadface: Username is required",
        ""
      ]
    },
    {
      "cells": [
        "performance_glitch_user",
        "hfjkhfl",
        "",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    },
    {
      "cells": [
        "dnfjdkfhkldf",
        "secret_sauce",
        "Epic sadface: Username and password do not match any user in this service",
        ""
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
      "name": "@Regression"
    },
    {
      "name": "@loginNegative"
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
  "name": "User logs in to Swag Labs with user name \"standard_user\" password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_to_Swag_Labs_with_user_name_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify that page title is a Swag Labs",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_verify_that_page_title_is_a_Swag_Labs()"
});
formatter.result({
  "status": "passed"
});
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
      "name": "@Regression"
    },
    {
      "name": "@loginNegative"
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
  "name": "User logs in to Swag Labs with user name \"\" password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_to_Swag_Labs_with_user_name_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify that page title is a Swag Labs",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_verify_that_page_title_is_a_Swag_Labs()"
});
formatter.result({
  "status": "passed"
});
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
      "name": "@Regression"
    },
    {
      "name": "@loginNegative"
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
  "name": "User logs in to Swag Labs with user name \"\" password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_to_Swag_Labs_with_user_name_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify that page title is a Swag Labs",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_verify_that_page_title_is_a_Swag_Labs()"
});
formatter.result({
  "status": "passed"
});
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
      "name": "@Regression"
    },
    {
      "name": "@loginNegative"
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
  "name": "User logs in to Swag Labs with user name \"performance_glitch_user\" password \"hfjkhfl\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_to_Swag_Labs_with_user_name_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify that page title is a Swag Labs",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_verify_that_page_title_is_a_Swag_Labs()"
});
formatter.result({
  "status": "passed"
});
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
      "name": "@Regression"
    },
    {
      "name": "@loginNegative"
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
  "name": "User logs in to Swag Labs with user name \"dnfjdkfhkldf\" password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_to_Swag_Labs_with_user_name_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify that page title is a Swag Labs",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_verify_that_page_title_is_a_Swag_Labs()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/NegativeCheckOut.feature");
formatter.feature({
  "name": "Add To Cart",
  "description": "  As a user, I want to be able to check out",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User adds to cart two or more items",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CheckOutNegative"
    }
  ]
});
formatter.step({
  "name": "User logs in to Swag Labs with username \"\u003cUser_Name\u003e\" password \"\u003cPassword\u003e\"",
  "keyword": "When "
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
  "name": "User clicks checkout button",
  "keyword": "When "
});
formatter.step({
  "name": "User fills out on the checkout page  with  last name \"\u003cLast_Name\u003e\" zip code \"\u003cZip_Code\u003e\" and User verifies the Error Message \"\u003cError Message\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User fills out on the checkout page  with first name \"\u003cFirst_Name\u003e\"  zip code \"\u003cZip_Code\u003e\" and User verifies the Error Message \"\u003cError Message\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User fills out on the checkout page  with first name \"\u003cFirst_Name\u003e\" last name \"\u003cLast_Name\u003e\" and User verifies the Error Message \"\u003cError Message\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "First_Name",
        "Last_Name",
        "Zip_Code",
        "Error Message",
        "User_Name",
        "Password"
      ]
    },
    {
      "cells": [
        "",
        "Parker",
        "08767",
        "Error: First Name is required",
        "standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "Emma",
        "",
        "09876",
        "Error: Last Name is required",
        "standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "Emma",
        "Parker",
        "",
        "Error: Postal Code is required",
        "standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "Error: First Name is required",
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
      "name": "@Regression"
    },
    {
      "name": "@CheckOutNegative"
    }
  ]
});
formatter.before({
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
  "name": "User clicks checkout button",
  "keyword": "When "
});
formatter.match({
  "location": "CheckOutStepDefinitions.user_clicks_checkout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills out on the checkout page  with  last name \"Parker\" zip code \"08767\" and User verifies the Error Message \"Error: First Name is required\"",
  "keyword": "When "
});
formatter.match({
  "location": "NegativeCheckOutStepDefinitions.user_fills_out_on_the_checkout_page_with_last_name_zip_code_and_User_verifies_the_Error_Message(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills out on the checkout page  with first name \"\"  zip code \"08767\" and User verifies the Error Message \"Error: First Name is required\"",
  "keyword": "When "
});
formatter.match({
  "location": "NegativeCheckOutStepDefinitions.user_fills_out_on_the_checkout_page_with_first_name_zip_code_and_User_verifies_the_Error_Message(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills out on the checkout page  with first name \"\" last name \"Parker\" and User verifies the Error Message \"Error: First Name is required\"",
  "keyword": "When "
});
formatter.match({
  "location": "NegativeCheckOutStepDefinitions.user_fills_out_on_the_checkout_page_with_first_name_last_name_and_User_verifies_the_Error_Message(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User adds to cart two or more items",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@CheckOutNegative"
    }
  ]
});
formatter.before({
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
  "name": "User clicks checkout button",
  "keyword": "When "
});
formatter.match({
  "location": "CheckOutStepDefinitions.user_clicks_checkout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills out on the checkout page  with  last name \"\" zip code \"09876\" and User verifies the Error Message \"Error: Last Name is required\"",
  "keyword": "When "
});
formatter.match({
  "location": "NegativeCheckOutStepDefinitions.user_fills_out_on_the_checkout_page_with_last_name_zip_code_and_User_verifies_the_Error_Message(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills out on the checkout page  with first name \"Emma\"  zip code \"09876\" and User verifies the Error Message \"Error: Last Name is required\"",
  "keyword": "When "
});
formatter.match({
  "location": "NegativeCheckOutStepDefinitions.user_fills_out_on_the_checkout_page_with_first_name_zip_code_and_User_verifies_the_Error_Message(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills out on the checkout page  with first name \"Emma\" last name \"\" and User verifies the Error Message \"Error: Last Name is required\"",
  "keyword": "When "
});
formatter.match({
  "location": "NegativeCheckOutStepDefinitions.user_fills_out_on_the_checkout_page_with_first_name_last_name_and_User_verifies_the_Error_Message(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User adds to cart two or more items",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@CheckOutNegative"
    }
  ]
});
formatter.before({
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
  "name": "User clicks checkout button",
  "keyword": "When "
});
formatter.match({
  "location": "CheckOutStepDefinitions.user_clicks_checkout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills out on the checkout page  with  last name \"Parker\" zip code \"\" and User verifies the Error Message \"Error: Postal Code is required\"",
  "keyword": "When "
});
formatter.match({
  "location": "NegativeCheckOutStepDefinitions.user_fills_out_on_the_checkout_page_with_last_name_zip_code_and_User_verifies_the_Error_Message(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills out on the checkout page  with first name \"Emma\"  zip code \"\" and User verifies the Error Message \"Error: Postal Code is required\"",
  "keyword": "When "
});
formatter.match({
  "location": "NegativeCheckOutStepDefinitions.user_fills_out_on_the_checkout_page_with_first_name_zip_code_and_User_verifies_the_Error_Message(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills out on the checkout page  with first name \"Emma\" last name \"Parker\" and User verifies the Error Message \"Error: Postal Code is required\"",
  "keyword": "When "
});
formatter.match({
  "location": "NegativeCheckOutStepDefinitions.user_fills_out_on_the_checkout_page_with_first_name_last_name_and_User_verifies_the_Error_Message(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User adds to cart two or more items",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@CheckOutNegative"
    }
  ]
});
formatter.before({
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
  "name": "User clicks checkout button",
  "keyword": "When "
});
formatter.match({
  "location": "CheckOutStepDefinitions.user_clicks_checkout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills out on the checkout page  with  last name \"\" zip code \"\" and User verifies the Error Message \"Error: First Name is required\"",
  "keyword": "When "
});
formatter.match({
  "location": "NegativeCheckOutStepDefinitions.user_fills_out_on_the_checkout_page_with_last_name_zip_code_and_User_verifies_the_Error_Message(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills out on the checkout page  with first name \"\"  zip code \"\" and User verifies the Error Message \"Error: First Name is required\"",
  "keyword": "When "
});
formatter.match({
  "location": "NegativeCheckOutStepDefinitions.user_fills_out_on_the_checkout_page_with_first_name_zip_code_and_User_verifies_the_Error_Message(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills out on the checkout page  with first name \"\" last name \"\" and User verifies the Error Message \"Error: First Name is required\"",
  "keyword": "When "
});
formatter.match({
  "location": "NegativeCheckOutStepDefinitions.user_fills_out_on_the_checkout_page_with_first_name_last_name_and_User_verifies_the_Error_Message(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});