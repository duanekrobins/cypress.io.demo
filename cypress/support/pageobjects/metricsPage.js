class metricsPage {
    getMetricsHeading() {
        return cy.get('#metrics-page-heading')}
    getMetricsRefreshBtn() {
        return cy.get(':nth-child(2) > .btn')}
    getDataSourceStatsTxt() {
        return cy.get(':nth-child(9) > .col-sm-12 > div > h3')}
    getMetricsFooter() {
        return cy.get('.footer')}
    }
export default metricsPage