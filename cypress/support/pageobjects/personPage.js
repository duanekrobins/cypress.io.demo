class personPage {
    getPersonWelcomeHeading() {
        return cy.get('#person-heading > :nth-child(1)')}
    getAddPersonBtn(){
        return cy.get('#jh-create-entity')}
    getPersonDisplayingTxt(){
        return cy.get('.info > span')}
    getRecordIdLink(){
        return cy.get('tbody > :nth-child(1) > :nth-child(1) > .btn')}
    getIdSortCtrl(){
        return cy.get('tr > :nth-child(1) > span')}
    getNameSortCtrl(){
        return cy.get('tr > :nth-child(2) > span')}
    getBdateSortCtrl(){
        return cy.get('thead > tr > :nth-child(3) > span')}
    getBioSortCtrl(){
        return cy.get('tr > :nth-child(4) > span')}
    getProfilePathSortCtrl(){
        return cy.get('tr > :nth-child(5) > span')}   
    getHomePageSortCtrl(){
        return cy.get('tr > :nth-child(6) > span')}
    getAkaSortCtrl(){
        return cy.get('tr > :nth-child(7) > span')}
     //Valid only on first page (controls identifier different for each page)
    getNextPageCtrl(){
        return cy.get(':nth-child(8) > .page-link')}
    getPrevPageCtrl(){
        return cy.get(':nth-child(2) > .page-link')}
     //Valid only on first page (controls identifier different for each page)
    getFirstPageCtrl(){
        return cy.get(':nth-child(1) > .page-link')}
     //Valid only on first page (controls identifier different for each page)
    getEndPageCtrl(){
        return cy.get(':nth-child(9) > .page-link')}
    getPage1Ctrl(){
        return cy.get(':nth-child(3) > .page-link')}
    getPage2Ctrl(){
        return cy.get(':nth-child(4) > .page-link')}
    getPage3Ctrl(){
        return cy.get(':nth-child(5) > .page-link')}    
    getPage10Ctrl(){
        return cy.get(':nth-child(7) > .page-link')}
    //First :nth-child is row 2nd :nth-child is column
    getNameDataTxt(){
        return cy.get('tbody > :nth-child(1) > :nth-child(2)')}
    //First :nth-child changes with each row. Row 2 would be :nth-child(2) etc
    getIdDataAndLinkTxt(){
        return cy.get('tbody > :nth-child(1) > :nth-child(1)')}       
    getBirthdateDataTxt(){
        return cy.get('tbody > :nth-child(1) > :nth-child(3)')}
}
export default personPage