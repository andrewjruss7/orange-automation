import LoginPO from "./loginPO";

describe('Login', () => {
        const loginPO = new LoginPO();
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('Login Successe', () => {
        loginPO.insertUserName().type('Admin');
        loginPO.insertPassword().type('admin123');
        loginPO.clickOnLogInButton();

    })
})