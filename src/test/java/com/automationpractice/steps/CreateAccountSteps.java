package com.automationpractice.steps;

import com.automationpractice.pages.CreateAnAccountPage;
import com.automationpractice.pages.HomePage;
import com.automationpractice.pages.MyAccountPage;
import com.automationpractice.pages.SignInPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class CreateAccountSteps {
    @Given("^I am on Home Page$")
    public void iAmOnHomePage() {
    }

    @Then("^I can click on SignIn Page$")
    public void iCanClickOnSignInPage() {
        new HomePage().clickOnSignInLink();
    }

    @And("^I can enter new \"([^\"]*)\" id$")
    public void iCanEnterNewId(String maili) {
        new SignInPage().enterEmailId(maili);

    }

    @And("^I can click on Create an account button$")
    public void iCanClickOnCreateAnAccountButton() {

        new SignInPage().clickOnCrateAccountButton();
    }

    @And("^I can enter FirstName \"([^\"]*)\"$")
    public void iCanEnterFirstName(String fName) {
        new CreateAnAccountPage().enterFirstName(fName);

    }

    @And("^I can enter LastName\"([^\"]*)\"$")
    public void iCanEnterLastName(String lName) {

        new CreateAnAccountPage().enterLastName(lName);

    }

    @And("^I can enter Password\"([^\"]*)\"$")
    public void iCanEnterPassword(String pwd) {
        new CreateAnAccountPage().enterPassrord(pwd);
    }

    @And("^I can enter Address\"([^\"]*)\"$")
    public void iCanEnterAddress(String add) {
        new CreateAnAccountPage().enterAddress(add);
    }

    @And("^I can enter City\"([^\"]*)\"$")
    public void iCanEnterCity(String cty) {
        new CreateAnAccountPage().EnterCity(cty);
    }

    @And("^I can select State\"([^\"]*)\"$")
    public void iCanSelectState(String stat) {
        new CreateAnAccountPage().SelectState(stat);
    }

    @And("^I can enter Post Code\"([^\"]*)\"$")
    public void iCanEnterPostCode(String zipCode) {

        new CreateAnAccountPage().enterPostCode(zipCode);
    }

    @And("^I can enter Mobile Phone\"([^\"]*)\"$")
    public void iCanEnterMobilePhone(String mobile) {
        new CreateAnAccountPage().EnterMobile(mobile);
    }

    @And("^I click on Register button$")
    public void iClickOnRegisterButton() {
        new CreateAnAccountPage().clickOnRegisterbutton();
    }

    @Then("^I can see the Account Name on Top Reigt$")
    public void iCanSeeTheAccountNameOnTopReigt() {
        new MyAccountPage().verifyAccountText();
    }
}
