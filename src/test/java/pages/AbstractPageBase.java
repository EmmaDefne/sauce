package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

public class AbstractPageBase {


    public WebDriver driver = utilities.Driver.getDriver();
    public WebDriverWait wait = new WebDriverWait(driver, 15);



    public AbstractPageBase() {
        PageFactory.initElements(driver, this);

    }
}

