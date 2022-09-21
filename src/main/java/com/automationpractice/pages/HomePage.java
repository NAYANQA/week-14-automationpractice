package com.automationpractice.pages;


import com.automationpractice.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.nio.file.WatchEvent;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Sign in')]")
    WebElement signIn;

    @CacheLookup
    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li[1]/a[1]")
    WebElement women;

    @CacheLookup
    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li[1]/ul[1]/li[2]/ul[1]/li[3]/a[1]")
    WebElement summerDress;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Our stores')]")
    WebElement ourStores;

    public void clickOnSignInLink() {
        clickOnElement(signIn);
    }

    public void hoverOnWomen() {
        mouseHoverToElement(women);
    }

    public void clickOnSummerDress() {
        clickOnElement(summerDress);
    }

    public void clickOnOurStores(){
        clickOnElement(ourStores);
    }

}
