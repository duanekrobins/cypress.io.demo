class homePage {
    getWelcomeHeading() {
        return cy.get('h2 > span')}
    getLoginLinkTxt() {
        return cy.get(':nth-child(1) > .alert-link > span')}   
    getLoggedInAsTxt() {
        return cy.get('.alert')}
    getHomeLeadSpan(){
        return cy.get('.lead > span')}
    getLoginLinkFromTxt(){
        return cy.get(':nth-child(1) > .alert-link > span')}
    getSTGImageContainer(){
        return cy.get('.hipster')}
    getDarkPageHeading(){
        return cy.get('.bg-dark')}
    getLoginInfoTxt(){
        return cy.get('.col-md-9 > :nth-child(3) > :nth-child(1) > :nth-child(3)')}
    getHomeNavLnk(){
        return cy.get(':nth-child(1) > .d-flex')}
    getHomeNavAccountLnk(){
        return cy.get('#account-menu > .d-flex')}
        getMoviesNavLnk(){
        return cy.get(':nth-child(2) > .d-flex')}
    getLanguageNavMnu(){
        return cy.get(':nth-child(3) > .d-flex') }
    getLanguageNavMnuEng(){
        return cy.get('[value="en"]')}
    getLanguageNavMnuEsp(){
        return cy.get('[value="es"]')}
    getAccountNavMnu(){
        return cy.get('#account-menu > .d-flex')}
    getAdminMnu(){
        return cy.get('#admin-menu > .d-flex')}
    getAdminUserMgtMnu(){
        return cy.get('[href="/admin/user-management"]')}
    getAdminUserTrackerMnu(){
        return cy.get('[href="/admin/tracker"]')}
    getAdminMetricsMnu(){
        return cy.get('[href="/admin/metrics"]')}
    getAdminHealthMnu(){
        return cy.get('[href="/admin/health"]')}
    getAdminConfigMnu(){
        return cy.get('[href="/admin/configuration"]')}
    getAdminAuditsMnu(){
        return cy.get('[href="/admin/audits"]')}
    getAdminLogsMnu(){
        return cy.get('[href="/admin/logs"]')}
    getAdminApiDocsMnu(){
        return cy.get('[href="/admin/docs"]')}
    getAccountNavMnu(){
        return cy.get('#account-menu > .d-flex')}
    getAccountLoginNavMnu(){
        return cy.get('#login-item')}
    getAccountNavMnu(){
        return cy.get('#account-menu > .d-flex')}
    getAccountLoginNavMnu(){
        return cy.get('#login-item')}
    getAccountNavMnuSettings(){
        return  cy.get('[href="/account/settings"]')}
    getAccountNavMnuPassword(){
        return  cy.get('[href="/account/password"]')}
    getAccountNavMnuEntities(){
        return  cy.get('#entity-menu > .d-flex')}
    getAccountNavMnuEntitiesItem(){
        return  cy.get('[href="/item"]')}
    getAccountNavMnuEntitiesMovie(){
        return cy.get('[href="/movie"]')}
    getAccountNavMnuEntitiesProdCompany(){
        return cy.get('[href="/production-company"]')}
    getAccountNavMnuEntitiesPerson(){
        return  cy.get('[href="/person"]')}
    getAccountNavMnuEntitiesCredit(){
        return  cy.get('[href="/credit"]')}
    getRegistrationCard(){
       return cy.get('.col-md-9 > :nth-child(3) > :nth-child(2)')}    
    getRegistrationText(){
        return cy.get('.col-md-9 > :nth-child(3) > :nth-child(2)')}  
    getRegistrationLink(){
        return cy.get(':nth-child(2) > .alert-link > span')}  
    }
export default homePage