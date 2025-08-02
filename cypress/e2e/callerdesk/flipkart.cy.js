
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

          
      
      cy.visit('https://www.flipkart.com/');
      cy.viewport(1366, 768);
      cy.get('[data-observerid-79685576-6c9a-471f-80ef-d3d0a86024fe="9b67f7cc-71e6-4344-9527-868fb479c83e"] > .YBLJE4 > ._1XjE3T > ._27h2j1').trigger('mouseover');;

      
  
    
    });
  });
  