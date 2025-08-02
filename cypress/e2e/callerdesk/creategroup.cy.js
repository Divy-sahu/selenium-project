
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
      cy.get('#emailuser').focus().type('mychanda@mychanda.com').blur();
      cy.get('#passworduser').type('mychanda@123');
      cy.get('#do_signin-submit-btn').click();
      cy.wait(2000);

      //cy.get('.navbar-main > .container-fluid > .hor-menu > #bs-example-navbar-collapse-2 > .nav > :nth-child(5) > .dropdown-toggle > .fa').first().click();
      cy.xpath("//a[contains(text(),'User Management')]/i").first().click();
      cy.xpath("//a[contains(text(),' Members ')]/i").click();
      cy.contains('Members ').first().click();
      cy.get('#rangepickerA > .fa-angle-down').click();
      cy.get('.ranges > ul > :nth-child(6)').click();
      cy.wait(60000);


      
      
     /*y.contains('Account').first().click();
     //cy.wait(2000);

     cy.get('.nav > :nth-child(2) > .nav-link').click();
     cy.get('[href="#collapse_a_2"] > .panel-heading > .panel-title > .caption-subject').click();

     cy.get('.panel-body .table-scrollable .table tbody')
  .contains('td', 'INDIREPAIR')  // Search for matching td elements
  .each(($el) => {
    cy.wrap($el).find('.blr').click();  // Click on the .blr element inside each matching td
  });

  cy.xpath('//*[@id="parent_user"]').select('27348'); 
  cy.xpath('//*[@id="account_manager"]').type('Dharm Pratap Singh');
  //cy.xpath('//*[@id="collapse_3_1"]/div[7]/a').cick();

*/
     
    /* const names = [
      "Surender Singh", "Shobha Pandey", "Vikas", "Abhay Sachdeva", "Somik Sharma",
      "Nikhil Sharma", "Chetan Wadhw", "Mukesh Tiwari", "Vinay", "Yogender Yadav",
      "Irfan Ansari", "Lalit Jain", "Manish Solanki", "Ajay Hans", "Akshita Tyagi",
      "Aashi Sharma", "Kajal", "Abhishek Prasad", "Vikrant Tyagi", "Nisha", "Nitesh",
      "Satpreet Singh Cheema", "Rajesh Kumar", "Vinay Malik", "Nahid", "Pankaj Kumar",
      "Mukesh Negi", "Jagdeep", "Vikas Aggarwal", "Satpreet", "Deepa Chauhan", 
      "Ashutosh Singh", "Sohit Mavi", "Vassu Arora", "Preeti", "Rakesh Kumar Rawat", 
      "Rekha", "Shweta Sharma"
    ];

    const phoneNumbers = [
      "9599021279", "7835065978", "9999738395", "7983821121", "8191886386", 
      "9582050607", "9756333035", "9709384950", "8802291391", "9821422619", 
      "8923349077", "9650573798", "7906833760", "9999722379", "9528452911", 
      "7451978919", "9899391059", "9568485083", "9997141760", "9999315020", 
      "8745922852", "9675551555", "8860926336", "9410853402", "9761798400", 
      "7065960660", "9958875944", "9643651606", "7838405405", "7289942501", 
      "8091359256", "7042709538", "7503767678", "7454807545", "7838748990", 
      "8447731608", "9877805455", "9599608139"
    ];
    
    for (let i = 0; i <= 37; i++) {
      cy.get('[data-target="#demo"]').click();
      const username = names[i];
      const mobileno = phoneNumbers[i];
      cy.get('#username1').clear().type(username);
     cy.get('#mobileno1').clear().type(mobileno);
     cy.get('#access1').select('2');
     cy.get('#demo > .modal-dialog > .modal-content > .modal-footer > .btn').click();

    }

    for (let j = 0; j <= 36; j++) {
    cy.get(':nth-child ${i} > :nth-child(3) > a').click();
    cy.get('#sel2').select('1');
    cy.get('#myModal > .modal-dialog > .modal-content > .modal-footer > .btn');

    }*/
      

    
    });
  });
  