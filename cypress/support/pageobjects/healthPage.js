class healthPage {
    getHealthHeading() {
        return cy.get('#health-page-heading')}
    getHealthRefreshBtn() {
        return cy.get('.btn')}
    getHealthPingSvsTxt() {
        return cy.get('tbody > :nth-child(3) > :nth-child(1)')}
    }
export default healthPage