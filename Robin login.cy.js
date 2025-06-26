const { it } = require("mocha");

describe("login test robin", () => {
  it("Visit the url of Robin", () => {
    cy.viewport(694, 585);
    // Visit Robin WebApp
    cy.visit("xyz");
  });

  it("should show error when trying to login without credentials", () => { 
    cy.visit("https://robin.octdaily.com/public/login");
    // Trying to login without Credentials
    cy.get("div:nth-of-type(1) > input").click().clear();
    cy.get("div:nth-of-type(2) > input").click().clear();
    cy.get("form > div button").click();
    // Verify that the login attempt fails
    cy.get('.text-danger').should('exist');
  });

  it("should show error when entering incorrect credentials", () => {
    cy.visit("https://robin.octdaily.com/public/login");
    // Trying to login by entering incorrect credentials
    cy.get("div:nth-of-type(1) > input").clear().type("name");
    cy.get("div:nth-of-type(2) > input").clear().type("password");
    cy.get("form > div button").click();
    // Verify that the login attempt fails
    cy.get('.text-danger').should('exist');
  });

  it("should show error when entering incorrect password", () => {
    cy.visit("https://robin.octdaily.com/public/login");
    // Trying to loging by entering correct username but incorrect password
    cy.get("div:nth-of-type(1) > input").clear().type("admin");
    cy.get("div:nth-of-type(2) > input").clear().type("password");
    cy.get("form > div button").click();
    // Verify that the login attempt fails
    cy.get('.text-danger').should('exist');
  });

  it("should show error when entering incorrect username", () => {
    cy.visit("https://robin.octdaily.com/public/login");
    // Tyring to login with correct password but incorrect username
    cy.get("div:nth-of-type(1) > input").clear().type("name");
    cy.get("div:nth-of-type(2) > input").clear().type("123");
    cy.get("form > div button").click();
    // Verify that the login attempt fails
    cy.get('.text-danger').should('exist');
  });

  it("should login successfully with correct credentials", () => {
    cy.visit("https://robin.octdaily.com/public/login");
    // Trying to login with correct credentials
    cy.get("div:nth-of-type(1) > input").clear().type("admin");
    cy.get("div:nth-of-type(2) > input").clear().type("123");
    cy.get("form > div button").click();
    // verify that the login attempt is successfull
    cy.get('.text-danger').should('not.exist');
    // verify that user is directed to dashboard
    cy.get('.sidebar-menu > :nth-child(1) > a').should('contain', 'Dashboard') 
  });

  it("Create a new case", () => {
    // Create a new case in Robin
    cy.visit("https://robin.octdaily.com/public/login");
    // Trying to login with correct credentials
    cy.get("div:nth-of-type(1) > input").clear().type("admin");
    cy.get("div:nth-of-type(2) > input").clear().type("123");
    cy.get("form > div button").click();
    
  });

});
