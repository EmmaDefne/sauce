package pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import utilities.BrowserUtilities;
import utilities.Driver;

import java.util.List;

public class AddToCartPage extends AbstractPageBase{


    @FindBy (xpath = "//button[@class='btn_primary btn_inventory']")
    List<WebElement> addToCartButtons ;

    @FindBy(css = ".svg-inline--fa")
    public WebElement shoppingCartButton;



    public void clickToAddToCart() {
        System.out.println(addToCartButtons.size());
        BrowserUtilities.wait(7);
        wait.until(ExpectedConditions.visibilityOf(addToCartButtons.get(0))).click();
        BrowserUtilities.wait(7);
        wait.until(ExpectedConditions.visibilityOf(addToCartButtons.get(addToCartButtons.size() - 1))).click();


    }


}

