describe('Add Member API Test', () => {
    const memberNames = ['Jyoti Ranjan', 'John Doe', 'Jane Smith']; // Add more names here
    const memberNumbers = ['9777703470', '9888888888', '9999999999']; // Add corresponding numbers
  
    it('Should add members and skip if mobile number is already registered', () => {
      memberNames.forEach((name, index) => {
        cy.request({
          method: 'POST',
          url: 'https://app.callerdesk.io/api/addmember_v2',
          headers: {
            'Cookie': 'PHPSESSID=p1io60i1iah621lchl6b3a22th; ci_cookie=DjoBOgZkATxcL1RyAG9WN1Y1CmVWIwVxVWVeeAF1B2dYYFdrU19UPFdmV3QEaVAkDT8CZFI1DGYDclIyB2FRMlE9AjMDZgg1UjcGZVExVm4OPgE2BjUBN1w3VGQAY1YwVjwKalZgBTBVNV4zATQHN1g2V2BTM1RlVzRXdARpUCQNPwJmUjcMZgNyUm4HIFEJUWUCMwNgCHNSYAYnUXFWdQ5gAXMGagE3XGBUOwB3VjRWNwpsVi8FMFUzXjgBKAc5WDhXK1MyVGZXO1d0BGlQJA0%2FAmZSNwxmA3JScgcjUTNRdgIIA2UIZlJgBjpRdlZ1DmABcwZqATRcZVQ7AHdWVlZqCixWdQVvVWFeZQFUB3tYYVdxU2lUOFdnV3kEZVB5DTECZFIpDGwDclI8ByNRbFE1AmQDPggjUmkGNVFxViMOBAFhBjMBclw9VHcAPFZyVnwKfVY6BWtVOl46ATEHPVg3VzxTMFRiVzdXYgRhUGwNeA%3D%3D'
          },
          body: {
            authcode: '419aa4827e48ea102cda6af8b513d4f4',
            member_name: name,
            member_num: memberNumbers[index], // Match the number with the name
            access: '2',
            active: '1'
          },
          failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx responses
        }).then((response) => {
          if (response.body.message === 'Mobile no of user is already register for this user.') {
            cy.log(`Skipping ${name} with mobile number ${memberNumbers[index]}: Already registered.`);
          } else {
            expect(response.status).to.eq(200); // Check for successful response
            // Add additional assertions if needed
          }
        });
      });
    });
  });
  