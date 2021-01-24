package step_definitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;
import pages.LoginPage;
import utilities.BrowserUtilities;
import utilities.ConfigurationReader;
import utilities.Driver;

public class LoginStepDefinitions {
    LoginPage loginPage=new LoginPage();



    @Given("User launches the Swag Labs page")
    public void user_launches_the_Swag_Labs_page() {
        System.out.println(" Swag Labs page is launched");
        String URL= Driver.getDriver().getCurrentUrl();
        System.out.println(URL);

        System.out.println("Given done");

    }

    @When("User logs in to Swag Labs with user name {string} password {string}")
    public void user_logs_in_to_Swag_Labs_with_user_name_password(String User_Name, String Password) {
        System.out.println("Log in with "  + User_Name + " and " + Password );
       loginPage.login(User_Name, Password);

        System.out.println("when done");


    }

    @Then("User should verify that page title is a Swag Labs")
    public void user_should_verify_that_page_title_is_a_Swag_Labs() {
        System.out.println("Verify that page title is a Swag Labs");
        BrowserUtilities.waitForPageToLoad(10);
        Assert.assertEquals("Swag Labs" , Driver.getDriver().getTitle());
    }

    @Then("User should not able to login and see error message {string} on the login page")
    public void user_should_not_able_to_login_and_see_error_message_on_the_login_page(String ErrorMessage) {
        System.out.println("User should not able to Log in with locked_out_user ");
    Assert.assertTrue( loginPage.lockOutErrorMessage.isDisplayed());
    Assert.assertEquals(loginPage.lockOutErrorMessage.getText(), ErrorMessage );
    }


    @When("User logs in to Swag Labs with username {string} password {string}")
    public void user_logs_in_to_Swag_Labs_with_username_password(String User_Name, String Password) {
        System.out.println("Log in with "  + User_Name + " and " + Password );
        loginPage.login(User_Name, Password);


    }

    @Then("User clicks the product sort button")
    public void user_clicks_the_product_sort_button() {




    }

    @Then("User will able to sort items by price from lowest the highest")
    public void user_will_able_to_sort_items_by_price_from_lowest_the_highest() {
    }

}
