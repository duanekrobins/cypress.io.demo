class moviesPage {
    getMoviePageHeading() {
        return cy.get('#movie-heading > :nth-child(1)')}
    getEntireMoviePageCard() {
        return cy.get('.jh-card')}
    getMovieTitleSrch() {
        return cy.get(':nth-child(2) > input')}
    getMovieOverviewSrch() {
        return cy.get(':nth-child(3) > input')}
    getMovieTitleSrch() {
        return cy.get(':nth-child(2) > input')}
    getMovieTitleInput() {
        return cy.get(':nth-child(2) > input')}
    getMovieClearBtn() {
        return cy.get(':nth-child(1) > :nth-child(1) > .btn')}
    getMovieProdCompanyDropDwn() {
        return cy.get(':nth-child(5) > select')}       
    getMovieItemsPerPageDropDwn() {
        return cy.get('[classname="justify-content-start"] > select')}       
   getMovieDisplayingItemsTxt() {
        return cy.get('.info > span')}           
    }
export default moviesPage