class apiDocsPage {
    getApiDocsPage() {
        return cy.get('.view-routes > :nth-child(1) > div')}
    getApiDocsFooter() {
        return cy.get('.footer')}
    }
export default apiDocsPage