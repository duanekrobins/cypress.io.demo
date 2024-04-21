class creditPage {
    getCreditHeading() {
        return cy.get('#credit-heading > :nth-child(1)')}
    getCreditCreateBtn() {
        return cy.get('#jh-create-entity')}
    getCreditShowingItemsTxt() {
        return cy.get('.info > span')}
    }
export default creditPage