export const createNewAccountPageObjects = {
    signInButton: ".authorization-link",
    createAnAccountHeaderButton: "[class='header links'] > li:nth-child(3)",
    firstNameField: "#firstname",
    lastNameField: "#lastname",
    emailField: "#email_address",
    passowrdField: "#password",
    confirmPasswordField: "#password-confirmation",
    createAnAccountButton: '[title="Create an Account"]',
    successMessage: ".message-success > div",

    async clickOnSignInHeaderButton() {
        await cy.get(this.signInButton).eq(0).should('be.visible').click();
    },

    async clickOnCreateAnAccountHeaderButton() {
        await cy.get(this.createAnAccountHeaderButton).eq(0).should('be.visible');
        await cy.wait(3000);
        await cy.get(this.createAnAccountHeaderButton).eq(0).should('be.visible').click();
    },

    async enterFirstName(firstName) {
        await cy.get(this.firstNameField).should('be.visible').click().type(firstName);
    },

    async enterLastName(lastName) {
        await cy.get(this.lastNameField).should('be.visible').click().type(lastName);
    },

    async enterEmail(email) {
        await cy.get(this.emailField).should('be.visible').click().type(email);
    },

    async enterPassword(password) {
        await cy.get(this.passowrdField).should('be.visible').click().type(password);
    },

    async enterConfirmPassword(confirmPassword) {
        await cy.get(this.confirmPasswordField).should('be.visible').click().type(confirmPassword);
    },

    async clickOnCreateAnAccountButton() {
        await cy.get(this.createAnAccountButton).should('be.visible').click();
    },

    async verifySuccessMessagePopupIsVisible(text) {
        await cy.get(this.successMessage).should('be.visible').should('have.text', text);
    }
}