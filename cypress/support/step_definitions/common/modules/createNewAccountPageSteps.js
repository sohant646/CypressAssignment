import { And, Then, When } from "cypress-cucumber-preprocessor/steps";
import { loginPageObjects } from "../../../base/pageObjects/loginPageObjects";
import { createNewAccountPageObjects } from "../../../base/pageObjects/createNewAccountPageObjects";
import data from "../../../../fixtures/users.json";

const random = Math.floor(Math.random() * 99999);
const email = `automation.testing+${random}@gmail.com`;

When(/^User navigate to website$/, async () => {
    cy.visit("/");
});

And(/^User click on create an account header button$/, async () => {
    createNewAccountPageObjects.clickOnCreateAnAccountHeaderButton();
});

And(/^User enters the firstname$/, async () => {
    createNewAccountPageObjects.enterFirstName(data.firstname);
});

And(/^User enters the lastname$/, async () => {
    createNewAccountPageObjects.enterLastName(data.lastname);
});

And(/^User enters the email$/, async () => {
    createNewAccountPageObjects.enterEmail(email);
});

And(/^User enters the password$/, async () => {
    createNewAccountPageObjects.enterPassword(data.password);
});

And(/^User enters the confirm password$/, async () => {
    createNewAccountPageObjects.enterConfirmPassword(data.password);
});

And(/^User click on create an account button$/, async () => {
    createNewAccountPageObjects.clickOnCreateAnAccountButton();
});

Then(/^Verify user is getting required success message after creating an account$/, async () => {
    createNewAccountPageObjects.verifySuccessMessagePopupIsVisible("Thank you for registering with Main Website Store.");
});

And(/^User click on sign in header button$/, async () => {
    createNewAccountPageObjects.clickOnSignInHeaderButton();
});

And(/^User enters the email under login page$/, async () => {
    loginPageObjects.enterEmail(email);
});

And(/^User enters the password under login page$/, async () => {
    loginPageObjects.enterPassword(data.password);
});

And(/^User click on signin button under login page$/, async () => {
    loginPageObjects.clickOnSignInButton();
});

Then(/^Verify user logged in successfully$/, async () => {
    loginPageObjects.verifyUserLoggedInSuccessfully(`Welcome, ${data.firstname} ${data.lastname}!`);
});
