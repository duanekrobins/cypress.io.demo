// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
//-- This is a parent command --

import homePage from '../support/pageObjects/homePage'
import loginPage from '../support/pageObjects/loginPage'
// import itemsPage from '../support/pageObjects/itemsPage'
// import moviesPage from '../support/pageObjects/moviesPage'
// import creditPage from '../support/pageObjects/creditPage'

const LoginPage=new loginPage();
const HomePage = new homePage();
// const ItemsPage = new itemsPage();
// const MoviesPage = new moviesPage();
// const CreditPage = new creditPage();

const adminLogin = Cypress.env('adminlogin');
const adminPassword = Cypress.env('adminpass');
const userLogin = Cypress.env('userlogin');
const userPassword = Cypress.env('userpass');


Cypress.Commands.add('loginUsingHyperLinkText', (login, pass) => {
    HomePage.getLoginLinkTxt().click();
    LoginPage.getUsernameInput().type(login);
    LoginPage.getPasswordInput().type(pass);
    LoginPage.getSignInBtn().click();
    cy.log('************LOGGED IN AS: ' + login);
});

Cypress.Commands.add('loginUsingNavMenu', (login, pass) => {
    HomePage.getAccountNavMnu().click();
    HomePage.getAccountLoginNavMnu().click()
    LoginPage.getUsernameInput().type(login);
    LoginPage.getPasswordInput().type(pass);
     LoginPage.getSignInBtn().click();
    cy.log('************LOGGED IN AS: ' + login);
});

Cypress.Commands.add('logOut', () => {
    cy
       .log('Logging out using the menu controls')
       .get('#account-menu > .d-flex').click()
       .get('[href="/logout"]').click();
});

Cypress.Commands.add('navToItemsPage', () => {
    HomePage.getAccountNavMnuEntities().click();
    HomePage.getAccountNavMnuEntitiesItem().click();
});

Cypress.Commands.add('navToAccountSettings', () => {
    HomePage.getAccountNavMnu().click();
    HomePage.getAccountNavMnuSettings().click();
});

Cypress.Commands.add('navToMoviesPage', () => {
    HomePage.getAccountNavMnuEntities().click();
    HomePage.getAccountNavMnuEntitiesMovie().click();
});

Cypress.Commands.add('navToUsersPage', () => {
    HomePage.getAdminMnu().click();
    HomePage.getAdminUserMgtMnu().click();
});

Cypress.Commands.add('navToTrackerPage', () => {
    HomePage.getAdminMnu().click();
    HomePage.getAdminUserTrackerMnu().click();
});

Cypress.Commands.add('navToMetricsPage', () => {
    HomePage.getAdminMnu().click();
    HomePage.getAdminMetricsMnu().click();
});

Cypress.Commands.add('navToHealthPage', () => {
    HomePage.getAdminMnu().click();
    HomePage.getAdminHealthMnu().click();
});

Cypress.Commands.add('navToConfigPage', () => {
    HomePage.getAdminMnu().click();
    HomePage.getAdminConfigMnu().click();
});

Cypress.Commands.add('navToAuditsPage', () => {
    HomePage.getAdminMnu().click();
    HomePage.getAdminAuditsMnu().click();
});

Cypress.Commands.add('navToLogsPage', () => {
    HomePage.getAdminMnu().click();
    HomePage.getAdminLogsMnu().click();
});

Cypress.Commands.add('navToApiDocsPage', () => {
    HomePage.getAdminMnu().click();
    HomePage.getAdminApiDocsMnu().click();
});

Cypress.Commands.add('navToProdCompanyPage', () => {
    HomePage.getAccountNavMnuEntities().click();
    HomePage.getAccountNavMnuEntitiesProdCompany().click();
});

Cypress.Commands.add('loadItemsPage', () => {
    cy.visit('/item?page=1&sort=id,asc');
    HomePage.getAccountNavMnuEntitiesItem().click();
});

Cypress.Commands.add('navToPersonPage', () => {
    HomePage.getAccountNavMnuEntities().click();
    HomePage.getAccountNavMnuEntitiesPerson().click();
});

Cypress.Commands.add('navToCreditPage', () => {
    HomePage.getAccountNavMnuEntities().click();
    HomePage.getAccountNavMnuEntitiesCredit().click();
});

Cypress.Commands.add('navToHomePage', () => {
    cy.visit("http://localhost:8080");
});


Cypress.Commands.add('l', (textToLog) => {
    cy.log(textToLog);
});

Cypress.Commands.add("visitFresh", (url, options) => {
    return cy.visit(url, {
        ...options,
        onBeforeLoad: (win) => win.sessionStorage.clear(),
    });
});

Cypress.Commands.add('loginDirect', (login = Cypress.env('USERLOGIN'), password = Cypress.env('USERPASSWORD')) => {
    
    cy.request({
        url: 'http://localhost:8080/api/authenticate',
        method: 'POST',
        body: {"username": "admin","password":"admin","rememberMe":true},
      }).then((response) => {
        expect(response.status, 'status').to.equal(200)
        console.log(response.body)
      })
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Cypress.addParentCommand("login", function(email, password){
//   var email    = email || "joe@example.com"
//   var password = password || "foobar"
//
//   var log = Cypress.Log.command({
//     name: "login",
//     message: [email, password],
//     consoleProps: function(){
//       return {
//         email: email,
//         password: password
//       }
//     }
//   })
//
//   cy
//     .visit("/login", {log: false})
//     .contains("Log In", {log: false})
//     .get("#email", {log: false}).type(email, {log: false})
//     .get("#password", {log: false}).type(password, {log: false})
//     .get("button", {log: false}).click({log: false}) //this should submit the form
//     .get("h1", {log: false}).contains("Dashboard", {log: false}) //we should be on the dashboard now
//     .url({log: false}).should("match", /dashboard/, {log: false})
//     .then(function(){
//       log.snapshot().end()
//     })
// })

