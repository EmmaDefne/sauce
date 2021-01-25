package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class ShoppingCartPage extends AbstractPageBase {

    @FindBy(xpath = "//div[@class='inventory_item_name']")
    public List<WebElement> shoppingCartItems;


    @FindBy(xpath = "//button[@class='btn_secondary cart_button']")
    public List<WebElement> removeButtons;


    @FindBy(xpath = "//a[text()='Continue Shopping']")
    public WebElement continueShoppingButton;


public void removeAllItems(){
    for ( WebElement each   :   removeButtons  ) {
        each.click();
    }
}

    public void continueShoppingButtonClick(){
    continueShoppingButton.click();
    }


}
