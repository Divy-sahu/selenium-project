const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

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
      

      cy.get(':nth-child(3) > .nav-link > a > .feather-chevron-right').click();
      cy.get('.show > .nav > :nth-child(2) > a').click();
      cy.get('.actions > .btn').click();
      cy.get('.feather-plus-square').click();
      cy.get('#routing_id').select('DTMF Routing');


for (let i = 0; i < 10; i++) {
  cy.get(`#key_action${i}`).select('Call Group');
  cy.get(`#key_ring_timeout${i}`).select('30 seconds');
  cy.get(`#key_call_stratgie${i}`).select('Roundrobin Ringing');
  cy.get(`#key_postaction_${i}`).select('Nothing');
}


     

    
    });
  });
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',


  e2e: {
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);
      // 'writeFile' टास्क रजिस्टर करें
      on('task', {
        writeFile({ fileName, content }) {
          const filePath = path.join(__dirname, 'downloads', fileName); // फाइल की लोकेशन


          // अगर फोल्डर मौजूद नहीं है, तो उसे बनाएं
          if (!fs.existsSync(path.dirname(filePath))) {
            fs.mkdirSync(path.dirname(filePath), { recursive: true });
          }

          // कंटेंट को फाइल में लिखें
          fs.writeFileSync(filePath, content, 'utf8');
          return null;
        },
      });
    },
  },
});
  