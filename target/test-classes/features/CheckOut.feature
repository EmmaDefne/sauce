Feature: Add To Cart
  As a user, I want to be able to check out

  @CheckOut
  Scenario Outline: User adds to cart two or more items
    Given User launches the Swag Labs page
    When User logs in to Swag Labs with username "<User_Name>" password "<Password>"
    Then User should verify that title is a Swag Labs
    Then User clicks the product sort button
    Then User will able to sort items by price from lowest the highest
    Then User adds to cart any item on the Swag Labs Page
    Then User clicks shopping cart button
    Then User verifies the items are added to the shopping cart
    Then User clicks checkout button
    Then User fills out all information on the checkout page
    Then User verifies the items are added to the shopping cart
    Then User verifies total price is added to the shopping cart
    Then User click finish button
    Then User verifies SwagLabs Page header text is "THANK YOU FOR YOUR ORDER"



    Examples:
      | User_Name               | Password     |
      | standard_user           | secret_sauce |
      | problem_user            |secret_sauce  |
      | performance_glitch_user |secret_sauce  |


@CheckOutNegative
Scenario Outline: User adds to cart two or more items
  Given User clicks checkout button
  When User fills out on the checkout page  with first name "<First Name>" last name "<Last Name>" zip code "<Zip Code>"
  Then User verifies the Error Message "<Error Message>"

  Examples:
    | First Name              | Last Name | Zip Code   |   Error Message                  |
    |                         | Parker    |  08767     | Error: First Name is required  |
    | Emma                    |           |  09876     |Error: Last Name is required    |
    | Emma                    | Parker    |            |Error: Postal Code is required  |
    |                         |           |            |Error: First Name is required   |



