package com.automationpractice.steps;

import com.automationpractice.pages.HomePage;
import com.automationpractice.pages.SummerDressesPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class SummerDressSteps {
    @Then("^I mousehover on WOMEN tab$")
    public void iMousehoverOnWOMENTab() {

        new HomePage().hoverOnWomen();
    }

    @And("^I click on Summer Dresses$")
    public void iClickOnSummerDresses() {
        new HomePage().clickOnSummerDress();
    }

    @Then("^I can see 'SUMMER DRESSES ' text$")
    public void iCanSeeSUMMERDRESSESText() {

        new SummerDressesPage().veryfiySummerDressText();

    }
}
