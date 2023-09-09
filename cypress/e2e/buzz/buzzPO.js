class BuzzPO{
 MenuBuzz(){
    return cy.contains('Buzz').click()
 }   

 Input(){
    return cy.get('.oxd-buzz-post-input')
 }
 
 Button(){
    return cy.get('[type="submit"]').click()
 }

 Successmessage(){
    return cy.get('.oxd-text--toast-message').should('be.visible');
    
    
 }

}

export default BuzzPO;