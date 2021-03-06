package step_definitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import pages.AddToCartPage;
import pages.CheckOutPage;
import pages.LoginPage;
import utilities.BrowserUtilities;
import utilities.Driver;

public class NegativeCheckOutStepDefinitions {
    CheckOutPage checkOut = new CheckOutPage();
    LoginPage loginPage = new LoginPage();
    AddToCartPage addToCartObject = new AddToCartPage();

//    @When("User logs in to Swag Labs with user name {string} password {string}")
//    public void user_logs_in_to_Swag_Labs_with_user_name_password(String User_Name, String Password) {
//        System.out.println("Log in with " + User_Name + " and " + Password);
//        loginPage.login(User_Name, Password);
//
//    }

//    @Then("User adds  any item to shopping cart")
//    public void user_adds_any_item_to_shopping_cart() {
//        addToCartObject.clickToAddToCart();
//
//
//    @Then("User clicks shopping cart button")
//    public void user_clicks_shopping_cart_button() {
//        addToCartObject.shoppingCartButton.click();
//    }

//    @Then("User clicks checkout button")
//    public void user_clicks_checkout_button() {
//        checkOut.ClickCheckButton();
//    }


    @When("User fills out on the checkout page  with  last name {string} zip code {string} and User verifies the Error Message {string}")
    public void user_fills_out_on_the_checkout_page_with_last_name_zip_code_and_User_verifies_the_Error_Message(String Last_Name, String Zip_Code, String Error_Message) {
        checkOut.lastNameText.sendKeys(Last_Name);
        checkOut.zipCodeText.sendKeys(Zip_Code);
        checkOut.continueButton.click();
        Assert.assertTrue(Error_Message.contains("Error:"));
    }


    @When("User fills out on the checkout page  with first name {string}  zip code {string} and User verifies the Error Message {string}")
    public void user_fills_out_on_the_checkout_page_with_first_name_zip_code_and_User_verifies_the_Error_Message(String First_Name, String Zip_Code, String Error_Message) {
        checkOut.firstNameText.sendKeys(First_Name);
        checkOut.zipCodeText.sendKeys(Zip_Code);
        checkOut.continueButton.click();
        Assert.assertTrue(Error_Message.contains("Error:"));

    }

    @When("User fills out on the checkout page  with first name {string} last name {string} and User verifies the Error Message {string}")
    public void user_fills_out_on_the_checkout_page_with_first_name_last_name_and_User_verifies_the_Error_Message(String First_Name, String Last_Name, String Error_Message) {
        checkOut.firstNameText.sendKeys(First_Name);
        checkOut.lastNameText.sendKeys(Last_Name);
        checkOut.continueButton.click();
        Assert.assertTrue(Error_Message.contains("Error:"));

    }


}


