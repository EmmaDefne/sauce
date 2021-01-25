package step_definitions;

import io.cucumber.java.en.Then;
import pages.CheckOutPage;

public class CheckOutStepDefinitions {


    CheckOutPage checkOut=new CheckOutPage();


    @Then("User clicks checkout button")
    public void user_clicks_checkout_button() {
      checkOut.ClickCheckButton();
    }

    @Then("User fills out all information on the checkout page")
    public void user_fills_out_all_information_on_the_checkout_page() {


    }

    @Then("User verifies total price is added to the shopping cart")
    public void user_verifies_total_price_is_added_to_the_shopping_cart() {


    }

    @Then("User click finish button")
    public void user_click_finish_button() {


    }

    @Then("User verifies SwagLabs Page header text is {string}")
    public void user_verifies_SwagLabs_Page_header_text_is(String string) {


    }



}
