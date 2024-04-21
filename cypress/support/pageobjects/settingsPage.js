class settingsPage {
    getSettingsHeading() {
        return cy.get('#settings-title > span')}
    getSettingsFirstName() {
        return cy.get('#firstName')}
    getSettingsLastName() {
        return cy.get('#lastName')}
    getSettingsEmail() {
        return cy.get('#email')}
    getSettingsLangDrpDwn() {
        return cy.get('#langKey')}
    getSettingsSaveBtn() {
        return cy.get('.btn')}
     }
export default settingsPage