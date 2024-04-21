class usersPage {
    getUsersHeading() {
        return cy.get('#user-management-page-heading > :nth-child(1)')}
    getUsersCreateBtn() {
        return cy.get('#user-management-page-heading > .btn')}
    getUsersShowingItemsTxt() {
        return cy.get('.info > span')}
    getUsersSystemActBtn() {
        return cy.get('#system > :nth-child(4) > .btn')}
    getUsersAdminActBtn() {
        return cy.get('#admin > :nth-child(4) > .btn')}
    getUsersUserActBtn() {
        return cy.get('#user > :nth-child(4) > .btn')}
    getUsersSystemEditBtn() {
        return cy.get('#system > .text-right > .btn-group > .btn-primary')}
    getUsersAdminEditBtn() {
        return cy.get('#admin > .text-right > .btn-group > .btn-primary')}
    getUsersUserEditBtn() {
        return cy.get('#system > .text-right > .btn-group > .btn-primary')}
    }
export default usersPage