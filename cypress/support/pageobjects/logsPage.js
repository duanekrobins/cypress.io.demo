class logsPage {
    getLogsHeading() {
        return cy.get('#logs-page-heading > span')}
    getLogsLoggersTxt() {
        return cy.get('p')}
    getLogsFooter() {
        return cy.get('.footer')}
    }
export default logsPage