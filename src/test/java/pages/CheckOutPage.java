package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import utilities.BrowserUtilities;

public class CheckOutPage extends AbstractPageBase{

    @FindBy(xpath = "//a[.='CHECKOUT']")
    public WebElement checkOutButton;


    @FindBy(id = "first-name")
    public WebElement firstNameText;

    @FindBy(id = "last-name")
    public WebElement lastNameText;

    @FindBy(id = "postal-code")
    public WebElement zipCodeText;

    @FindBy(xpath = "//input[@class='btn_primary cart_button']")
    public WebElement continueButton;


    @FindBy(xpath = "//div[@class='summary_total_label']")
    public WebElement totalPrice;

    @FindBy(xpath = "//a[.='FINISH']")
    public WebElement finishButton;

    @FindBy(xpath = "//h2[@class='complete-header']")
    public WebElement thankYouForOrder;


    @FindBy(xpath = "//h3[.='Error: Last Name is required']")
    public WebElement fillOutFormErrorMessage;

    public void ClickCheckButton(){
    BrowserUtilities.wait(3);
    checkOutButton.click();
    BrowserUtilities.wait(3);

}

     public void fillOutTheForm(){
        firstNameText.sendKeys("Emma");
        lastNameText.sendKeys("Watson");
        zipCodeText.sendKeys("08765");
         BrowserUtilities.wait(3);
         continueButton.click();

     }

     public void negativeFillOutTheForm (String First_Name, String Last_Name, String Zip_Code) {
        firstNameText.sendKeys(First_Name);
        lastNameText.sendKeys(Last_Name);
        zipCodeText.sendKeys(Zip_Code);
         continueButton.click();
     }





}
