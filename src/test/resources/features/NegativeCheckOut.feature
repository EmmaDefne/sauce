@Regression
Feature: Add To Cart
  As a user, I want to be able to check out


@CheckOutNegative
Scenario Outline: User adds to cart two or more items

  When User logs in to Swag Labs with username "<User_Name>" password "<Password>"
  Then User adds  any item to shopping cart
  Then User clicks shopping cart button



  When User clicks checkout button
  When User fills out on the checkout page  with  last name "<Last_Name>" zip code "<Zip_Code>" and User verifies the Error Message "<Error Message>"
  When User fills out on the checkout page  with first name "<First_Name>"  zip code "<Zip_Code>" and User verifies the Error Message "<Error Message>"
  When User fills out on the checkout page  with first name "<First_Name>" last name "<Last_Name>" and User verifies the Error Message "<Error Message>"


  Examples:
    | First_Name | Last_Name | Zip_Code | Error Message                  | User_Name     | Password     |
    |            | Parker    | 08767    | Error: First Name is required  | standard_user | secret_sauce |
    | Emma       |           | 09876    | Error: Last Name is required   | standard_user | secret_sauce |
    | Emma       | Parker    |          | Error: Postal Code is required | standard_user | secret_sauce |
    |            |           |          | Error: First Name is required  | standard_user | secret_sauce |



