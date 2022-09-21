package com.automationpractice.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class PriceRangeSliderSteps {
    @And("^I can change the price slider \\$(\\d+)-\\$(\\d+)$")
    public void iCanChangeThePriceSlider$$(int arg0, int arg1) {
/*
        new SummerDressSteps().dragAndDrop(arg0,arg1);
*/

    }

    @Then("^I can see item returned with price range$")
    public void iCanSeeItemReturnedWithPriceRange() {
    }
}
