class LoginPO {
    insertUserName(){
        return cy.get("[name='username']");

    }
    insertPassword(){
        return cy.get("[name='password']"); 
    }
    clickOnLoginButton() {
         return cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]');

    }
         assertLoginSuccess(){
            return cy.contains('Admin').should('be.visible');
                
        }

    }



    export default LoginPO;