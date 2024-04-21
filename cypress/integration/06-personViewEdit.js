/// <reference types="Cypress" />

import loginPage from '../support/pageObjects/loginPage';       import homePage from '../support/pageObjects/homePage';     import itemsPage from '../support/pageObjects/itemsPage';
import moviesPage from '../support/pageObjects/moviesPage';     import creditPage from '../support/pageObjects/creditPage'; import personPage from '../support/pageObjects/personPage';
import settingsPage from '../support/pageObjects/settingsPage'; import usersPage from '../support/pageObjects/usersPage';   import trackerPage from '../support/pageObjects/trackerPage';
import metricsPage from '../support/pageObjects/metricsPage';   import healthPage from '../support/pageObjects/healthPage'; import configPage from '../support/pageObjects/configPage';
import auditsPage from '../support/pageObjects/auditsPage';     import logsPage from '../support/pageObjects/logsPage';     import apiDocsPage from '../support/pageObjects/apiDocsPage';
import productionCompanyPage from '../support/pageObjects/productionCompanyPage';
import personDetailPage from '../support/pageObjects/personDetailPage';

const HomePage = new homePage();            const LoginPage = new loginPage();      const ItemsPage = new itemsPage();
const MoviesPage = new moviesPage();        const CreditPage = new creditPage();    const PersonPage = new personPage();
const SettingsPage = new settingsPage();    const UsersPage = new usersPage();      const TrackerPage = new trackerPage();
const MetricsPage = new metricsPage();      const HealthPage = new healthPage();    const ConfigPage = new configPage();
const AuditsPage = new auditsPage();        const LogsPage = new logsPage();        const ApiDocsPage = new apiDocsPage();
const ProductionCompanyPage = new productionCompanyPage();                          const PersonDetailPage = new personDetailPage(); 



describe("visiting app home page on localhost 8080", () => {
    beforeEach(() => {
        cy.visitFresh("http://localhost:8080");
    });

    it('Exercise 6: UAC As a non-admin user, I should be able to navigate to, load and view all controls on the PEOPLE PAGE ', () => {
        cy.loginUsingNavMenu('user','user');
        cy.navToPersonPage();
        PersonPage.getPersonWelcomeHeading().should('contain.text','People');
        PersonPage.getPersonDisplayingTxt().should('contain.text','Showing 1 - 20');
        PersonPage.getAddPersonBtn().should('be.visible');
        PersonPage.getAkaSortCtrl().should('be.visible');
        PersonPage.getBdateSortCtrl().should('be.visible');
        PersonPage.getBioSortCtrl().should('be.visible');
        PersonPage.getHomePageSortCtrl().should('be.visible');
        PersonPage.getIdSortCtrl().should('be.visible');
        PersonPage.getNameSortCtrl().should('be.visible');
        PersonPage.getProfilePathSortCtrl().should('be.visible');
        PersonPage.getNextPageCtrl().should('be.visible');
        PersonPage.getPage10Ctrl().should('be.visible');
        PersonPage.getPage1Ctrl().should('be.visible');
        PersonPage.getPage3Ctrl().should('be.visible');
        PersonPage.getPage10Ctrl().should('be.visible');
        PersonPage.getNameDataTxt().should('be.visible');
        PersonPage.getIdDataAndLinkTxt().should('be.visible');
        PersonPage.getBirthdateDataTxt().should('be.visible');
        cy.logOut();
    });

    it('Exercise 6: UAC As a non-admin user, I need for all sort controls on the PERSON PAGE to function correctly.', () => {
        cy.loginUsingNavMenu('user','user');
        cy.navToPersonPage();
        PersonPage.getIdSortCtrl().click();
        PersonPage.getIdDataAndLinkTxt().should('contain.text','194');
        PersonPage.getNameSortCtrl().click();
        PersonPage.getNameDataTxt().should('contain.text','Aaron Taylor-Johnson');
        PersonPage.getBdateSortCtrl().click();
        PersonPage.getBirthdateDataTxt().should('contain.text','Invalid date');
        cy.logOut();
    });

    it('Exercise 6: UAC As a non-admin user, I should need for every pagination control on the PERSON PAGE to function correctly.', () => {
        cy.loginUsingNavMenu('user','user');
        cy.navToPersonPage();
        PersonPage.getEndPageCtrl().click();
        PersonPage.getPersonDisplayingTxt().should('contain.text','Showing 181');
        PersonPage.getFirstPageCtrl().click();
        PersonPage.getPersonDisplayingTxt().should('contain.text','Showing 1');
        PersonPage.getPage10Ctrl().click();
        PersonPage.getPersonDisplayingTxt().should('contain.text','Showing 181');
        PersonPage.getPage1Ctrl().click();
        PersonPage.getPersonDisplayingTxt().should('contain.text','Showing 1');
        PersonPage.getPage2Ctrl().click();
        PersonPage.getPersonDisplayingTxt().should('contain.text','Showing 21');
        PersonPage.getFirstPageCtrl().click();
        PersonPage.getNextPageCtrl().click();
        PersonPage.getPersonDisplayingTxt().should('contain.text','Showing 21');
        PersonPage.getPrevPageCtrl().click();
        PersonPage.getPersonDisplayingTxt().should('contain.text','Showing 1');
        cy.logOut();
    });
   
    
    it('Exercise 6: UAC As a non-admin user, I need to be able to view a person record(s) on the PERSON PAGE.', () => {
        cy.loginUsingNavMenu('user','user');
        cy.navToPersonPage();
        PersonPage.getRecordIdLink().click();
        cy.location('pathname').should('include', '/person/1');
        PersonDetailPage.getPersonDetailNameTxt().should('contain.text','Michael Curtiz');
        PersonDetailPage.getPersonDetailBirthDateTxt().should('contain.text','12/24/1886')
        cy.logOut();
    });
});