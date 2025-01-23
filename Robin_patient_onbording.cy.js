const { it } = require("mocha");

describe("Patient Onboarding", () => {
  // Function to generate a random SSN number
  function generateRandomSSN() {
    return Math.floor(100000000 + Math.random() * 900000000).toString(); // 9-digit number
  }

  // Function to generate a random phone number
  function generateRandomPhoneNumber() {
    const areaCode = 300;  // 3-digit  area acode
    const Number = Math.floor(1000000 + Math.random() * 9000000); // 7-digit remaining number
    return `${areaCode}${Number}`; // 10-digit phone number
  }

  it("should login successfully with correct credentials", () => {
    // Visit the login page
    cy.visit("https://robin.octdaily.com/public/login");
    
    // Set the viewport
    cy.viewport(1500, 814);
    
    // Enter login credentials
    cy.get("div:nth-of-type(1) > input").clear().type("admin");
    cy.get("div:nth-of-type(2) > input").clear().type("123");
    cy.get("form > div button").click();

    // Verify successful login
    cy.get('.text-danger').should('not.exist');

    cy.wait(5000);
//     // Create a new patient
//     cy.get('#mainwrap > app-header > header > nav > div.app-menu > ul > li:nth-child(2) > button').click(); // New case button
//     cy.wait(5000);

//     // Fill in patient information
//     cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.mob-hidden > div > div:nth-child(2) > div:nth-child(2) > div > div > app-qa-patient-info-form > div > div > form > div.form-wrap.row > div:nth-child(2) > div > input')
//       .clear().type('Test'); // First Name
    
//     cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.mob-hidden > div > div:nth-child(2) > div:nth-child(2) > div > div > app-qa-patient-info-form > div > div > form > div.form-wrap.row > div:nth-child(3) > div > input')
//       .clear().type('Mudassir'); // Last Name
    
//     cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.mob-hidden > div > div:nth-child(2) > div:nth-child(2) > div > div > app-qa-patient-info-form > div > div > form > div.form-wrap.row > div:nth-child(4) > div > input')
//       .clear().type('2004-07-28'); // DOB
    
//     cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.mob-hidden > div > div:nth-child(2) > div:nth-child(2) > div > div > app-qa-patient-info-form > div > div > form > div.form-wrap.row > div:nth-child(5) > div > div > label:nth-child(4)')
//       .click(); // Gender Checkbox (Male)
    
//     cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.mob-hidden > div > div:nth-child(2) > div:nth-child(2) > div > div > app-qa-patient-info-form > div > div > form > div.form-wrap.row > div:nth-child(6) > div > input')
//       .clear().type(generateRandomSSN()); // SSN
    
//     cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.mob-hidden > div > div:nth-child(2) > div:nth-child(2) > div > div > app-qa-patient-info-form > div > div > form > div.form-wrap.row > div:nth-child(7) > div > div > app-country-code > select')
//       .select('PK(+92)'); // Country Code (Pakistan)
    
//     cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.mob-hidden > div > div:nth-child(2) > div:nth-child(2) > div > div > app-qa-patient-info-form > div > div > form > div.form-wrap.row > div:nth-child(7) > div > div > input')
//       .clear().type(generateRandomPhoneNumber()); // Phone Number

//     cy.wait(2000);

//     cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.mob-hidden > div > div:nth-child(2) > div:nth-child(2) > div > div > app-qa-patient-info-form > div > div > form > div.form-wrap.row > div:nth-child(8) > div > input')
//       .type('syedm4821@gmail.com'); // Email

//     cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.mob-hidden > div > div:nth-child(2) > div:nth-child(2) > div > div > app-qa-patient-info-form > div > div > form > div.form-wrap.row > div:nth-child(9) > div > textarea')
//       .clear().type('XYZ Duplex Street 15'); // Address

//     cy.get('#validationTooltip04')
//       .select('Arizona'); // State

//     cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.mob-hidden > div > div:nth-child(2) > div:nth-child(2) > div > div > app-qa-patient-info-form > div > div > form > div.form-wrap.row > div:nth-child(12) > div > input')
//       .clear().type('Test'); // City

//     cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.mob-hidden > div > div:nth-child(2) > div:nth-child(2) > div > div > app-qa-patient-info-form > div > div > form > div.form-wrap.row > div:nth-child(13) > div > input')
//       .clear().type('111333'); // Zipcode

//       cy.get('.mat-mdc-select-value').first().type('{enter}'); // Primary Insurance

//       // cy.get('#mat-select-value-1')
//     //   .click(); // Primary Insurance

//     // cy.get('#mat-option-2 > span')
//     //   .click(); // Primary Insurance option form the dropdown menu

//     cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.mob-hidden > div > div:nth-child(2) > div:nth-child(2) > div > div > app-qa-patient-info-form > div > div > form > div.form-wrap.row > div:nth-child(21) > div > input')
//       .clear().type('47839234'); // Insurance ID

//     cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.mob-hidden > div > div:nth-child(2) > div:nth-child(2) > div > div > app-qa-patient-info-form > div > div > form > div.form-btn > p > button > span.mdc-button__label')
//       .click(); // Save Button


// //                                  APPOINTMENTS

//     // Creating first encouter
//     cy.get('#Leadinfo > div.from-btnlist > div:nth-child(3)').click(); // Appointment Button
   
//     cy.wait(5000);

//     // Open the provider dropdown
//     cy.get('.mat-mdc-select-value')
//   .contains('Unassigned')
//   .click();  // Clicks the div containing 'Unassigned'

//     // cy.get('#mat-select-value-5').click();

//     // Select a provider
//     cy.get('mat-option').contains('test provider').click();

//     // Verification that the correct option was selected
//     cy.get('.mat-mdc-select-value').should('contain', 'test provider');
 
//     // Selecting the date for the appintment 
//     // Date format is YYYY-MM-DD & T08:30 is the time of appointment in short XYZ date at 8:30 am
//     // Adjust the date accordingly
//     cy.get('#followupdate').clear().type('2025-01-25T10:30');
    

//     // Vist Type ==> Televisit
//     cy.get('#visitType > label.me-3 > input').click();
    
//     // Appointment Duration
//     cy.get('#duration').select('3');

//     // Questionnaire Medium ==> Email
//     cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.mob-visible > div > div:nth-child(2) > div:nth-child(2) > div > div > app-appointmentsv2 > form > div > div.row > div.col-lg-12 > div > div > label.me-3 > input').click();

//     // Adding Notes
//     cy.get('#Notes').click().type('Test');

//     // Save Button
//     cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.mob-visible > div > div:nth-child(2) > div:nth-child(2) > div > div > app-appointmentsv2 > form > div > p > button > span.mat-mdc-button-touch-target')
//     .click({ force: true });


// // Creating second Encounter 
//     cy.visit("https://robin.octdaily.com/public/login");
//     cy.get("div:nth-of-type(1) > input").clear().type("admin");
//     cy.get("div:nth-of-type(2) > input").clear().type("123");
//     cy.get("form > div button").click();
//     cy.wait(3000);
//     cy.get('#Leadinfo > div.from-btnlist > div:nth-child(3)').click(); // Appointment Button
      
//     cy.wait(3000);

//     // Open the provider dropdown
//     cy.get('.mat-mdc-select-value')
//     .contains('Unassigned')
//     .click();  // Clicks the div containing 'Unassigned'

//     // cy.get('#mat-select-value-5').click();

//     // Select a provider
//     cy.get('mat-option').contains('test provider').click();

//     // Verification that the correct option was selected
//     cy.get('.mat-mdc-select-value').should('contain', 'test provider');

//     // Selecting the date for the appintment 
//     // Date format is YYYY-MM-DD & T08:30 is the time of appointment in short XYZ date at 8:30 am
//     // Adjust the date accordingly
//     cy.get('#followupdate').type('2025-01-26T08:30');
    

//     // Vist Type ==> Office
//     cy.get('#visitType > label:nth-child(2) > input').click();
    
//     // Appointment Duration
//     cy.get('#duration').select('3');

//     // Questionnaire Medium ==> Email
//     cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.mob-visible > div > div:nth-child(2) > div:nth-child(2) > div > div > app-appointmentsv2 > form > div > div.row > div.col-lg-12 > div > div > label.me-3 > input').click();

//     // Adding Notes
//     cy.get('#Notes').click().type('Test');

//     // Save Button
//     cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.mob-visible > div > div:nth-child(2) > div:nth-child(2) > div > div > app-appointmentsv2 > form > div > p > button > span.mat-mdc-button-touch-target')
//     .click({ force: true }); 

    // click on Encounter 1
    cy.get("div[class='ng-tns-c1859850774-2'] div[class='from-append-bg-btn d-flex align-items-center justify-content-between ng-star-inserted']").click();
    
    // Chief Complaint
    cy.get("#chiefComplaint").clear().type('Test');

    // History of Presenting Illness
    cy.get("#historyofPresentingIllness").clear().type('test');

    // Past Medical History Reviewed
    cy.get("#pastMedicalHistoryReviewed").click();

    // Family History Reviewed
    cy.get("#familyHistoryReviewed").click();

    // Social History Reviewed
    cy.get("#socialHistoryReviewed").click();

    // Review of System
    cy.get("#system").click();

    // Physical Examination
    cy.get("#physicalExamination").clear().type("Test");

    // Assessment & Plan
    cy.get("#assessmentAndPlan").clear().type("Test");

    // Specialist Name
    cy.get("body > app-root:nth-child(9) > app-admin-layout:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > section:nth-child(1) > app-qa-dashboard:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-qa-leads:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-encounter-details:nth-child(1) > div:nth-child(7) > form:nth-child(1) > div:nth-child(1) > div:nth-child(13) > input:nth-child(2)").clear().type("test");

    // Reccomendations
    cy.get("#recommendations").clear().type("Test");

    // Reason for Recommendations
    cy.get("#reasonForRecommendations").clear().type("Test");

    // Problem
    cy.get("div[class='col-3 text-right'] button[class='btn btn-primary ng-star-inserted']").click();
    
    cy.wait(3000);

    // Search
    // cy.get('input[placeholder="Search ICD10"]').type('1').contains('Typhoid fever');
    cy.get('input[placeholder="Search ICD10"]').type('1'); // Typing in the search input

    // Selecting Typhoid fever
    cy.get('.mat-mdc-autocomplete-panel').contains('Typhoid fever').click();

    // Type
    cy.get('body > div:nth-child(20) > div:nth-child(2) > div:nth-child(1) > mat-dialog-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-add-patient-problem:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > select:nth-child(2)').select("Problem");

    // Chronicity
    cy.get("body > div:nth-child(20) > div:nth-child(2) > div:nth-child(1) > mat-dialog-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-add-patient-problem:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > select:nth-child(2)").select("Acute");

    // Severity
    cy.get("body > div:nth-child(20) > div:nth-child(2) > div:nth-child(1) > mat-dialog-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-add-patient-problem:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > select:nth-child(2)").select("Unknown");

    // Status
    cy.get("body > div:nth-child(20) > div:nth-child(2) > div:nth-child(1) > mat-dialog-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-add-patient-problem:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > select:nth-child(2)").select("Active");

    // Onset
    cy.get("#onset").type("2025-01-26");

    // Notes
    cy.get("#Notes").type('Test')

    // Save button
    cy.get("button[class='h_40 w-150 btn-primary mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base'] span[class='mdc-button__label']").click();

        // Save
        cy.get("button[type='button'] span").click();
        
    // Approve and Sign
    cy.get("button:nth-child(1) span:nth-child(1)").click();



  });
});
