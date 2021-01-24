@Cart
Feature: Add To Cart
  As a user, I want to be able to add any item into shopping cart

@addToCart
Scenario Outline: User adds to cart two or more items
Given User launches the Swag Labs page
When User logs in to Swag Labs with username "<User_Name>" password "<Password>"
Then User should verify that title is a Swag Labs
Then User clicks the product sort button
Then User will able to sort items by price from lowest the highest
Then User adds to cart any item on the Swag Labs Page
Then User clicks shopping cart button
Then User verifies the items are added to the shopping cart
Then User is able to remove any item from shopping cart
Then User clicks continue shopping button
Then User adds to cart any item on the Swag Labs Page

Examples:
| User_Name               | Password |
| standard_user           | secret_sauce |
| problem_user            |secret_sauce  |
| performance_glitch_user |secret_sauce  |

@removeItem
Scenario Outline: User will be able to remove any item from shopping cart
Given User launches the Swag Labs page
When User logs in to Swag Labs with username "<User_Name>" password "<Password>"
Then User should verify that title is a Swag Labs
Then User clicks the product sort button
Then User will able to sort items by price from lowest the highest
Then User adds to cart any item on the Swag Labs Page
Then User clicks shopping cart button
Then User verifies the items are added to the shopping cart
Then User is able to remove any item from shopping cart
Then User clicks continue shopping button
Then User adds to cart any item on the Swag Labs Page

  Examples:
    | User_Name               | Password |
    | standard_user           | secret_sauce |
    | problem_user            |secret_sauce  |
    | performance_glitch_user |secret_sauce  |


