@login @Regression
Feature: Login
  As a User, I want to be able to login with username and password



@login_Positive
  Scenario Outline: Login as user and verify that page title is Swag Labs
    Given User launches the Swag Labs page
    When User logs in to Swag Labs with user name "<User_Name>" password "<Password>"
  Then User should verify that page title is a Swag Labs
    Examples:
      | User_Name               | Password |
      | standard_user           | secret_sauce |
      | problem_user            |secret_sauce  |
      | performance_glitch_user |secret_sauce  |

@locked_out_User
Scenario Outline: Login as user and verify that page title is Swag Labs
  Given User launches the Swag Labs page
  When User logs in to Swag Labs with user name "<User_Name>" password "<Password>"
  Then User should not able to login and see error message "<Error Message>" on the login page

  Examples:
    | User_Name               | Password    |  Error Message                                       |
    | locked_out_user         |secret_sauce  | Epic sadface: Sorry, this user has been locked out. |



  @sortItems
   Scenario Outline: User sorts the items by price from lowest to highest
      Given User launches the Swag Labs page
      When User logs in to Swag Labs with username "<User_Name>" password "<Password>"
      Then User should verify that page title is a Swag Labs
      Then User clicks the product sort button
      Then User will able to sort items by price from lowest the highest
      Examples:
        | User_Name               | Password |
        | standard_user           | secret_sauce |

@loginNegative
  Scenario Outline: Login as user and verify that page title is Swag Labs
    Given User launches the Swag Labs page
    When User logs in to Swag Labs with user name "<User_Name>" password "<Password>"
    Then User should verify that page title is a Swag Labs
    Examples:
      | User_Name               | Password     | Error_Message_For_User_Name           |Error_Message_For_Password  |
      | standard_user           |              |                                       |Epic sadface: Password is required|
      |                         |secret_sauce  | Epic sadface: Username is required   |                                 |
      |                         |              | Epic sadface: Username is required    |                                 |
      | performance_glitch_user |hfjkhfl       |                                       |Epic sadface: Username and password do not match any user in this service|
      | dnfjdkfhkldf            |secret_sauce  |Epic sadface: Username and password do not match any user in this service |                                      |








