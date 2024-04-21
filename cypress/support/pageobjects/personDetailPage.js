class personDetailPage {
    getPersonDetailHeading() {
        return cy.get('h2')}
    getPersonDetailNameTxt(){
        return cy.get('.jh-entity-details > :nth-child(2)')}
    getPersonDetailBirthDateTxt(){
        return cy.get('.jh-entity-details > :nth-child(4) > span')}
    getPersonDetailBackBtn(){
        return cy.get('tbody > :nth-child(1) > :nth-child(1) > .btn')}
    getPersonDetailEditBtn(){
        return cy.get('.btn-primary')}
    getNameSortCtrl(){
        return cy.get('tr > :nth-child(2) > span')}
    getBdateSortCtrl(){
        return cy.get('thead > tr > :nth-child(3) > span')}

}
export default personDetailPage