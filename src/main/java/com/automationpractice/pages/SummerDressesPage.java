package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SummerDressesPage extends Utility {

    private static final Logger log = LogManager.getLogger(SummerDressesPage.class.getName());

    public SummerDressesPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/h1[1]/span[1]")
    WebElement summerDressText;

    @CacheLookup
    @FindBy(xpath = "button[name='Submit'] span")
    WebElement addtoCartButton;

    @CacheLookup
    @FindBy(xpath = "//a[@class='btn btn-default button button-medium']")
    WebElement checkout;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/ul[1]/li[1]")
    WebElement clicprdt;

    @CacheLookup
    @FindBy(xpath = "")
    WebElement slider;

    public String veryfiySummerDressText(){
    String headingText=getTextFromElement(summerDressText);
    return headingText;
    }

    public void clickOnProduct(){
        clickOnElement(clicprdt);
    }

    public void clickOnAddToCartButton(){
        clickOnElement(addtoCartButton);
    }
    public void clickOnCheckOutButton(){
        clickOnElement(checkout);
    }

  /*  public void dragAndDrop(By drag, By drop) {
        Actions actions = new Actions(driver);
        WebElement draggable = driver.findElement(By.xpath(""));
        WebElement droppable = driver.findElement(By.xpath(""));
        actions.dragAndDrop(draggable, droppable).build().perform();
        */

    }

