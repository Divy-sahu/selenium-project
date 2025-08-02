describe('My First Test', () => {
  it('login callerdesk site', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      if (
        err.message.includes('Cannot read properties of null') ||
        err.message.includes('Cannot read properties of undefined') ||
        err.message.includes('App is not defined') ||
        err.message.includes('Unexpected token') ||
        err.message.includes('$(...).datepicker is not a function') ||
        err.message.includes('$(...).summernote is not a function') ||
        err.message.includes('$(...).kendoCalendar is not a function') ||
        err.message.includes('$(...).multiselect is not a function') ||
        err.message.includes('echarts is not defined') ||
        err.message.includes('Element not found')
      ) {
        return false;
      }
      return true;
    });

    cy.visit('https://app.callerdesk.io');
    cy.viewport(1366, 768);
    cy.get('#emailuser').focus().type('anandmedicaldist@gmail.com	').blur();
    cy.get('#passworduser').type('abc123');
    cy.get('#do_signin-submit-btn').click();
    cy.wait(2000);

    // Navigate through the menu
    cy.get('.navbar-main > .container-fluid > .hor-menu > #bs-example-navbar-collapse-2 > .nav > :nth-child(2) > a').click();
    cy.get('.right > :nth-child(1) > .btn-group > .btn > .fa').click();
    cy.get('.right > :nth-child(1) > .btn-group > .dropdown-menu > li > a').click();
    
   cy.get('#myModal4 > .modal-dialog > .modal-content > .modal-body > .form-horizontal > :nth-child(1) > .col-sm-8 > .form-control').focus().type('Area');
   cy.get('.field_wrapper > :nth-child(1) > .form-control').focus().type('NANA PETH');
    const upDistricts = [
   "NANA PETH", "GHORPADE/SHUKARWAR PETH", "RAVIWAR PETH", "JANWAWADI", "DHANORI", "MULSHI", "JEJURI",
  "GHORPADE PETH [2]", "GHORPADI GAON", "PERANE(KARVENAGAR)", "URALI DEVACHI", "LAXMI/NARAYAN/SADASHIV/SHANIWAR",
  "SASANENAGAR", "HADAPSAR 1", "DECCAN/F.C ROAD", "MUNDHAWA", "SINHAGAD RD (B)", "BIBWEWADI", "SHIVAJI NAGAR",
  "VADGAON BK", "AUNDH (MERGE)", "BALEWADI", "BAVDHAN (MERGE)", "SAHAKARNAGAR", "WADAGON SHERI", "UNDRI",
  "GULTEKDI", "AMBEGAON BK.", "KOTHRUD", "NARHE/DHAYRI", "TALEGAON DHAMDARE", "YERAWADA", "KOREGAON/TADIWALA RD",
  "WAGHOLI", "SADASHIV PETH", "SHIKRAPUR", "PHURSUNGI", "BUDHWAR PETH", "KATRAJ", "KATRAJ/KONDHWA RD",
  "NANDED PHATA", "LONI STATION", "DHAYRI", "POUD ROAD", "VISHTANTHWADI", "RASTA/SOM/KASBA/MANGALWAR PETH",
  "VIMANNAGAR", "WARJE MALWADI", "WANAWADI", "ERANDAWANE/KARVENAGAR", "KARVE NAGAR", "NAGAR ROAD", "KARVE ROAD",
  "MANJARI", "KONDHWA", "CHINCHWAD", "TADIWALA ROAD", "DAUND", "INSTITUTION/HOSPITAL", "CAMP/BHAWANI PETH",
  "SANGAVI", "LOHGAON", "PIMPLE SAUDAGAR", "SASWAD", "MARKET YARD", "KHARADI", "URALIKANCHAN", "VITTHALWADI",
  "NARHE/AMBEGAON", "SHIRUR/GODNADI", "DHANKAWADI", "UTTAMNAGAR", "PASHAN", "WAKAD", "SHANIWAR PETH", "KHADKI",
  "PISOLI", "BANER", "BHUGAON", "SHANTINAGAR", "KALAS", "SWARGATE", "PIMPALE GURAV", "KUNJIRWADI", "BHOR",
  "SHIVANE", "DHANKWADI (B)", "PIRANGUT", "PARVATI", "HINJEWADI", "PERNE PHATA", "KOREGAON BHIMA", "KHADAKWASLA",
  "KALEWADI PHATA", "CHANDAN NAGAR", "MUMBAI", "WADGAON BHUDRUK", "SUSGAON", "YEWALEWADI", "NARAYAN PETH",
  "HADAPSAR", "GHORPADI", "BHAWANI PETH", "UPPER/SUPPER BIBEWADI", "KIRKATWADI", "KIWALE", "BHOSARI", "LONIKAND",
  "PURANDER", "JUNNAR", "INDAPUR", "NA", "SOMWAR PETH", "MOSHI", "SHRIRAMPUR", "NEW PANVEL", "KHED SHIVAPUR",
  "YEWAT", "BARAMATI", "XXLOHOGAON", "ANDHERI EAST", "GURUWAR PETH", "OUTSTATION", "DIGHI", "THEUR",
  "KALYANI NAGAR", "WHOLSALE", "DOCTOR (L0CAL)", "SHUKURWAR PETH", "TALEGAON", "NEW SANGVI", "ALANDI", "PIMPRI",
  "DAPODI", "CHAKAN", "PHALTAN", "SATARA", "HAVELI", "THERGAON", "CHARHOLI", "AMBEGAON KHURD", "AMBEGAON",
  "AHMEDNAGAR", "P.S. ROAD", "AURANGABAD", "DATTAWADI/TILAK RD.", "YAWAT", "KASHTI", "TEMBHURNI", "PANSHET",
  "KARJAT", "NIGDI", "RAJGURUNAGAR", "KHANDALA", "SUKHSAGAR NAGAR", "BHAVDHA/RAMNAGAR", "KEDGAON", "RAVET",
  "KASABA PETH", "SOLAPUR", "TATHAWADE", "RAHATANI", "SANGLI", "WADKI", "PIMPALE NILAKH", "SOLAPUR ROAD(DAUND)",
  "BHEKRAI NAGAR", "STATION", "NASRAPUR", "SHRIGONDA", "MIRAJ", "MAHLUNGE", "LAXIM ROAD", "PUNE", "MANGALWAR PETH",
  "HINGOLI", "MANCHAR", "SHIVAPUR", "NASHIK", "MAVAL", "BOPODI", "NANDED", "AKURDI", "KASARWADI", "CHIKHALI",
  "AKLUJ", "JALNA", "NANDURBAR", "PUNAWALE", "GHODEGAON", "GOA", "FATIMANAGAR", "NARAYAN GAON", "GANESH PETH",
  "TALAWADE", "RAHU", "MAHAD", "MARGAO", "BHIGWAN", "SHRIWARDHAN", "J", "KARANJADE", "JALGAON", "CHENNAI", "BEED",
  "NAVI PETH", "NIRA", "THANE", "SASOON ROAD", "KHANAPUR", "KOLHAPUR", "RAIGAD", "JAMKHED", "WAI", "SANGAMNER",
  "PAYYANUR", "SHEVGAON", "JALORI GATE", "CHIPLUN", "KARAD", "SANASWADI", "KALEPADAL", "WAGHAPUR", "PAUD",
  "PARGAON", "PANDHARPUR", "BARSHI", "PARBHANI", "BHIWANDI", "WELNESS", "PATHARDI"
    ];

    // Loop through and add each district
    upDistricts.forEach((district, index) => {
      cy.get('.add_button > .fa').click();

      // Adjust this selector to match your field DOM structure if needed
      cy.get(`.field_wrapper .form-control`).last().type(district);
    });

    //cy.get('.modal-dialog > .modal-footer > .btn').click();

    // If you want to include further steps such as filtering or navigating users:
    /*
    cy.xpath("//a[contains(text(),'User Management')]/i").first().click();
    cy.xpath("//a[contains(text(),' Members ')]/i").click();
    cy.contains('Members ').first().click();
    cy.get('#rangepickerA > .fa-angle-down').click();
    cy.get('.ranges > ul > :nth-child(6)').click();
    cy.wait(60000);
    */
  });
});
