class DirectoryPO{
    ClickmenuDirectory(){
       return cy.contains('Directory').click()
    }   
   
    Clickautocompletarinput(){
       return cy.get('.oxd-autocomplete-text-input--active').click()
      
    }
    Assert(){
        cy.wait(5000); // Espera 5 segundos, ajusta el tiempo según sea necesario
        cy.get('[role="listbox"]').should('exist').click();
    }

     Clickselector(){
      cy.get('.oxd-select-wrapper')
      .eq(0)
      .click()
      .contains('Software Engineer')
      .click();
    }

    ClickLocation(){
      cy.get('.oxd-select-wrapper')
      .eq(1)
      .click()
      .contains('Canadian Regional HQ')
      .click();
    }

        
    Button(){
      cy.contains('Search').should('be.visible').click({multiple: true, force: true});
      
    }
   
    directorycard(){
       return cy.get('.orangehrm-profile-picture').should('be.visible');
       
       
    }
   
   }
   
   export default DirectoryPO;
