class productionCompanyPage {
    getProdCompanyHeading() {
        return cy.get('#production-company-heading > :nth-child(1)')}
    getProdCompanyAddBtn() {
        return cy.get('#jh-create-entity')}
    getProdCompanyShowingItemsTxt() {
        return cy.get('.info > span')}
    }
export default productionCompanyPage