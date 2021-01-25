package step_definitions;

import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.CheckOutPage;

public class CheckOutStepDefinitions {


    CheckOutPage checkOut=new CheckOutPage();


    @Then("User clicks checkout button")
    public void user_clicks_checkout_button() {
      checkOut.ClickCheckButton();
    }

    @Then("User fills out all information on the checkout page")
    public void user_fills_out_all_information_on_the_checkout_page() {
       checkOut.fillOutTheForm();

    }

    @Then("User verifies total price is added to the shopping cart")
    public void user_verifies_total_price_is_added_to_the_shopping_cart() {
        System.out.println(checkOut.totalPrice.getText());
    }

    @Then("User click finish button")
    public void user_click_finish_button() {
     checkOut.finishButton.click();

    }

    @Then("User verifies SwagLabs Page header text is {string}")
    public void user_verifies_SwagLabs_Page_header_text_is(String string) {
      checkOut.thankYouForOrder.getText();

    }



}
