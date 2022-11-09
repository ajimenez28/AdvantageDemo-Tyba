describe('Creating account', ()=>{

    beforeEach(()=>{
        cy.once('uncaught:exception', () => false);
        cy.viewport(1920, 1080);
    })

    it('Get User menu in the main page', ()=>{
        cy.visit('https://www.advantageonlineshopping.com/#/');
        cy.get('#menuUserLink').click();
    })

    it('Enter credentials', ()=>{
        cy.get('input[name="username"]').type('AutomationUser');
        cy.get('input[name="password"]').type('Tyb4*2022');
        cy.get('#sign_in_btnundefined').click();
    })

    it('Validate new session', ()=>{
        cy.get('.hi-user.containMiniTitle.ng-binding').should('have.text','AutomationUser');
    })
})