import Papa from 'papaparse'; // Add this import for PapaParse to work

describe('Check Non-DND Numbers and Generate File from CSV', () => {
  let token;  // Store the API token here
  let nonDndNumbers = [];  // Store Non-DND numbers here

  // Step 1: Login to get the token
  before(() => {
    // Make API call to login and get the token
    cy.request({
      method: 'POST',
      url: 'https://obd3api.expressivr.com/api/obd/login',
      body: {
        username: 'dnd_filter',
        password: 'Admin@123'
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      token = response.body.token;
      expect(token).to.not.be.null;  // Make sure token is returned successfully
    });
  });

  // Step 2: Read the CSV file and parse it
  it('Read and Parse CSV File, then Check Non-DND numbers', () => {
    // Read the CSV file (assuming it is located in the `cypress/fixtures` folder)
    cy.fixture('numbers.csv').then((csvData) => {
      // Parse the CSV data using PapaParse
      Papa.parse(csvData, {
        complete: function(results) {
          const mobileNumbers = results.data.map(row => row[0].trim());  // Assuming mobile numbers are in the first column

          // Loop through the mobile numbers and check if they are Non-DND
          cy.wrap(mobileNumbers).each((mobile) => {
            cy.request({
              method: 'POST',
              url: 'https://obd3api.expressivr.com/api/obd/search/Blacklist/DND',
              body: {
                userId: '500185',
                mobile: mobile
              },
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
              },
              failOnStatusCode: false  // Don't fail on non-2xx status codes
            }).then((response) => {
              // Check if the number is not in the blacklist (Non-DND)
              if (response.body.message === 'Number not found in Blacklist or DND') {
                nonDndNumbers.push(mobile);
              }
            });
          });

          // After checking all numbers, write the non-DND numbers to a file
          cy.wrap(nonDndNumbers).should('have.length.greaterThan', 0).then(() => {
            const result = nonDndNumbers.join('\n');  // Convert the array to a newline-separated string
            cy.task('writeFile', { fileName: 'non_dnd_numbers.txt', content: result });

            // Log the completion message
            cy.log('Non-DND numbers saved to non_dnd_numbers.txt');
          });
        },
      });
    });
  });
});
