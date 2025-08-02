
describe('My First Test', () => {
    it('login callerdesk site', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            // If the error message contains 'Cannot read properties of null', we skip the test
            if (err.message.includes('Cannot read properties of null') 
            || err.message.includes('Cannot read properties of undefined')
            || err.message.includes('App is not defined')
            || err.message.includes('Unexpected token')
            || err.message.includes('$(...).datepicker is not a function')
            || err.message.includes('$(...).summernote is not a function')
            || err.message.includes('$(...).kendoCalendar is not a function')
            || err.message.includes('$(...).multiselect is not a function')

        || err.message.includes('Element not found'))
            {
              return false; // This will prevent Cypress from failing the test
            }
            // Allow other errors to fail the test
            return true;
          });

          
      
      cy.visit('https://app.callerdesk.io');
      cy.viewport(1366, 768);
      cy.get('#emailuser').type('info@soilsearch.in');
      cy.get('#passworduser').type('Admin@123');
      cy.get('#do_signin-submit-btn').click();
      cy.wait(2000);
  
    
    });
  });
  