package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ShoppingCartSummeryPage extends Utility {
    private static final Logger log = LogManager.getLogger(ShoppingCartSummeryPage.class.getName());

    public ShoppingCartSummeryPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//td[@class='cart_delete text-center']")
    WebElement deletbin;

    @CacheLookup
    @FindBy(xpath = "//p[contains(text(),'Your shopping cart is empty.')]")
    WebElement emptytext;

    public void clickOnDeletIcon(){
        clickOnElement(deletbin);
    }
    public String verifyemptytext(){
        String emptybintext=getTextFromElement(emptytext);
        return emptybintext;

    }


}
