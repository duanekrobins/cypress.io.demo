class configPage {
    getConfigHeading() {
        return cy.get('#configuration-page-heading > span')}
    getConfigDefaultPropTxt() {
        return cy.get(':nth-child(14) > h4 > span')}
    getConfigFooter() {
        return cy.get('.footer')}
    }
export default configPage