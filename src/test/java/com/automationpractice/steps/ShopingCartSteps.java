package com.automationpractice.steps;

import com.automationpractice.pages.ShoppingCartSummeryPage;
import com.automationpractice.pages.SummerDressesPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class ShopingCartSteps {
    @And("^I click on Add to cart button on Product$")
    public void iClickOnAddToCartButtonOnProduct() {
        new SummerDressesPage().clickOnAddToCartButton();
    }

    @And("^I click on proceed to checkout button$")
    public void iClickOnProceedToCheckoutButton() {

        new SummerDressesPage().clickOnCheckOutButton();
    }

    @And("^I click on delete icon$")
    public void iClickOnDeleteIcon() {

        new ShoppingCartSummeryPage().clickOnDeletIcon();
    }

    @Then("^I can verify text 'Your shopping cart is empty\\.'$")
    public void iCanVerifyTextYourShoppingCartIsEmpty() {

        new ShoppingCartSummeryPage().verifyemptytext();
    }

    @And("^I click on Product$")
    public void iClickOnProduct() {
        new SummerDressesPage().clickOnProduct();
    }
}
