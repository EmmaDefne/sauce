package step_definitions;

import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.AddToCartPage;
import pages.ShoppingCartPage;
import utilities.BrowserUtilities;
import utilities.Driver;


public class AddToCartStepDefinitions {



    AddToCartPage addToCartObject=new AddToCartPage();
    ShoppingCartPage shopping=new ShoppingCartPage();


    @Then("User should verify that title is a Swag Labs")
    public void user_should_verify_that_title_is_a_Swag_Labs() {
        System.out.println("Verify that page title is a Swag Labs");
        BrowserUtilities.waitForPageToLoad(10);
        Assert.assertEquals("Swag Labs" , Driver.getDriver().getTitle());

    }

    @Then("User adds  any item to shopping cart")
    public void user_adds_any_item_to_shopping_cart() {
     addToCartObject.clickToAddToCart();

    }

    @Then("User clicks shopping cart button")
    public void user_clicks_shopping_cart_button() {
        addToCartObject.shoppingCartButton.click();
    }

    @Then("User verifies the items are added to the shopping cart")
    public void user_verifies_the_items_are_added_to_the_shopping_cart() {
      Assert.assertEquals("Sauce Labs Onesie",shopping.shoppingCartItems.get(0).getText() );
          Assert.assertEquals("Sauce Labs Fleece Jacket",shopping.shoppingCartItems.get(shopping.shoppingCartItems.size() - 1).getText() );

    }

    @Then("User is able to remove any item from shopping cart")
    public void user_is_able_to_remove_any_item_from_shopping_cart() {
        shopping.removeAllItems();

    }

    @Then("User clicks continue shopping button")
    public void user_clicks_continue_shopping_button() {
        shopping.continueShoppingButtonClick();


    }



}
