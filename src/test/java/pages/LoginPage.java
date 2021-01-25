package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import utilities.BrowserUtilities;
import utilities.ConfigurationReader;
import utilities.Driver;

import java.util.ArrayList;
import java.util.List;

public class LoginPage extends AbstractPageBase {

    @FindBy (xpath = "//input[@id='user-name']")
    public WebElement userName;

    @FindBy (xpath = "//input[@id='password']")
    public WebElement password;


    @FindBy(id="login-button")
    public WebElement btnLogin;

    @FindBy(xpath = "//div[@class='product_label']")
    public WebElement visualizaProducts;

    @FindBy(xpath = "//h3[.='Epic sadface: Sorry, this user has been locked out.']")
    public WebElement lockOutErrorMessage;

   @FindBy(xpath = "//select[@class='product_sort_container']")
   public WebElement product_sort_container;

   @FindBy(xpath = "//option[.='Price (low to high)']")
   public WebElement lowToHigh;

   @FindBy( className = "inventory_item_price")
   public List<WebElement> inventoryItems;






    public void login(String User_Name, String Password) {
        userName.sendKeys(User_Name);
        BrowserUtilities.wait(5);
        password.sendKeys(Password, Keys.ENTER);

        BrowserUtilities.waitForPageToLoad(10);
    }

    public void sortItem(){
       Select selectItem = new Select(product_sort_container);
       selectItem.selectByVisibleText("Price (low to high)");

    }

    public List<WebElement> inventoryItemsList() {
        List<WebElement> listOfInventory = Driver.getDriver().findElements(By.className("inventory_item_price"));

        return listOfInventory;

    }







}