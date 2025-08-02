
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
            || err.message.includes('echarts is not defined')

        || err.message.includes('Element not found'))
            {
              return false; // This will prevent Cypress from failing the test
            }
            // Allow other errors to fail the test
            return true;
          });

          
      
      cy.visit('https://app.callerdesk.io');
      cy.viewport(1366, 768);
      cy.get('#emailuser').focus().type('bhagur123@gmail.com').blur();
      cy.get('#passworduser').type('bhagur123');
      cy.get('#do_signin-submit-btn').click();
      cy.wait(600);


       cy.xpath("//a[contains(text(),'User Management')]/i").first().click();
      //cy.xpath("//a[contains(text(),' Call groups ')]/i").click();
      cy.contains(' Call groups ').first().click();


      cy.get('.pagination > :nth-child(6) > a').click();

      for (let id = 33185; id <= 33194; id++) {
  cy.get(`[href="https://app.callerdesk.io/admin/updategroup/${id}"] > .feather-eye`).click();
   cy.get('.feather-edit').click();


    for (let i = 1; i <= 7; i++) {
  cy.get(`#updategroupform > .clearfix > .col-sm-9 > :nth-child(${i}) > .mt-checkbox > input`)
  .then(($input) => {
    if (!$input.is(':checked')) {
      cy.wrap($input).siblings('span').click();
    }
  });

}
cy.get('#edit_user > .modal-dialog > .modal-content > .modal-footer > .blue').click();

cy.get('.col-sm-12.text-center > .btn').click();
cy.get('.pagination > :nth-child(6) > a').click();



}

     
      
     

      




     

    
    });
  });
  