class LoginPO {
    insertUserName() {
        return cy.get('[name="username"]')
    }

    insertPassword() {
        return cy.get('[name="password"]')
    }

    clickOnLogInButton() {
        return cy.get('[type="submit"]').click();
    }
}

export default LoginPO