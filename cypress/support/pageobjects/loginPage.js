class loginPage {
    getUsernameInput() {
        return cy.get('#username')}
    getPasswordInput() {
        return cy.get('#password')}
    getSignInBtn() {
        return cy.get('.btn-primary')}
}
export default loginPage