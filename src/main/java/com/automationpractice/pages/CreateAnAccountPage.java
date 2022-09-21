package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Factory;

public class CreateAnAccountPage extends Utility {

    private static final Logger log = LogManager.getLogger(CreateAnAccountPage.class.getName());

    public CreateAnAccountPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='customer_firstname']")
    WebElement fName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='customer_lastname']")
    WebElement lName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement pssword;

    @CacheLookup
    @FindBy(xpath = "//input[@id='address1']")
    WebElement address;

    @CacheLookup
    @FindBy(xpath = "//input[@id='city']")
    WebElement city;
    @CacheLookup
    @FindBy(xpath = "//select[@id='id_state']")
    WebElement state;


    @CacheLookup
    @FindBy(xpath = "//input[@id='postcode']")
    WebElement zipcod;

   /* @CacheLookup
    @FindBy(xpath = "//select[@id='id_country']")
    WebElement country;*/

    @CacheLookup
    @FindBy(xpath = "//input[@id='phone_mobile']")
    WebElement mobile;

    @CacheLookup
    @FindBy(xpath = "//button[@id='submitAccount']")
    WebElement register;

    public void enterFirstName(String nam) {
        sendTextToElement(fName, nam);


    }

    public void enterLastName(String lnam) {
        sendTextToElement(lName, lnam);

    }

    public void enterPassrord(String pwd) {
        sendTextToElement(pssword, pwd);

    }

    public void enterAddress(String adrs) {
        sendTextToElement(address, adrs);

    }

    public void EnterCity(String cty) {
        sendTextToElement(city, cty);


    }

    public void SelectState(String stet) {
        selectByVisibleTextFromDropDown(state, stet);


    }

    public void enterPostCode(String code) {
        sendTextToElement(zipcod, code);


    }

   /* public void selectCountry(String ctry) {
        selectByVisibleTextFromDropDown(country, ctry);


    }*/

    public void EnterMobile(String moNo) {
        sendTextToElement(mobile, moNo);


    }

    public void clickOnRegisterbutton() {
        clickOnElement(register);
    }

}
