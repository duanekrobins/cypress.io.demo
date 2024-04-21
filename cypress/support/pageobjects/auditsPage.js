class auditsPage {
    getAuditsHeading() {
        return cy.get('#audits-page-heading')}
    getAuditsDisplayingTxt() {
        return cy.get('.info > span')}
    getAuditsFooter() {
        return cy.get('.footer')}
    }
export default auditsPage