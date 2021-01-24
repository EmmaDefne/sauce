package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.BrowserUtilities;
import utilities.ConfigurationReader;

import java.util.List;

public class LoginPage extends AbstractPageBase {
   public WebDriver driver;
//    private By usernameInputField = By.id("user-name");
//    private By passwordInputField = By.id("password");
//    private By loginButton = By.cssSelector(".btn_action");

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




    public WebElement getVisualizaProducts() {
        return visualizaProducts;
    }

    public WebElement getInputUsername() {
        return userName;
    }

    public WebElement getInputPasssword() {
        return password;
    }

    public WebElement getBtnLogin() {
        return btnLogin;
    }



//    public LoginPage(WebDriver driver){
//        this.driver = driver;
//        PageFactory.initElements(driver, this);
//    }

    public void login(String User_Name, String Password) {

        userName.sendKeys(User_Name);
        password.sendKeys(Password);
        btnLogin.click();
       BrowserUtilities.waitForPageToLoad(10);
        BrowserUtilities.wait(3);
    }







}