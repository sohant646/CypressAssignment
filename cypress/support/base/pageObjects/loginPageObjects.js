export const loginPageObjects = {
    emailField: "#email",
    passwordField: "#pass",
    signInButton: '[name="send"]',
    header: "[class='greet welcome']",

    async enterEmail(email) {
        await cy.get(this.emailField).should('be.visible').click().type(email);
    },

    async enterPassword(password) {
        await cy.get(this.passwordField).should('be.visible').click().type(password);
    },

    async clickOnSignInButton() {
        await cy.get(this.signInButton).eq(0).should('be.visible').click();
    },

    async verifyUserLoggedInSuccessfully(text) {
        await cy.get(this.header).eq(0).should('be.visible').should('include.text', text);
    }
}