package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPage extends Utility {
    private static final Logger log = LogManager.getLogger(SignInPage.class.getName());

    public SignInPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement email;

    @CacheLookup
    @FindBy(xpath = "//button[@id='SubmitCreate']")
    WebElement creatAct;

    public void enterEmailId(String mail){
        sendTextToElement(email,mail);

    }

    public  void clickOnCrateAccountButton(){
        clickOnElement(creatAct);
    }


}
