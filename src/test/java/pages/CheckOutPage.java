package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import utilities.BrowserUtilities;

public class CheckOutPage extends AbstractPageBase{

    @FindBy (xpath = "//a[.='CHECKOUT']")
    public WebElement checkOutButton;



public void ClickCheckButton(){
    BrowserUtilities.wait(3);
    checkOutButton.click();
    BrowserUtilities.wait(3);

}


}
