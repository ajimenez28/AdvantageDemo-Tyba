describe('Creating account', ()=>{

    beforeEach(()=>{
        cy.once('uncaught:exception', () => false);
        cy.viewport(1920, 1080);
    })

    it('Get User menu in the main page', ()=>{
        cy.visit('https://www.advantageonlineshopping.com/#/');
        cy.get('#menuUserLink').click();
    })

    it('Get new account form', ()=>{
        cy.get('.create-new-account.ng-scope').click();
    })

    it('Fill new account form', ()=>{
        //Mandatory fields
        cy.get('input[name="usernameRegisterPage"]').type('AutomationUser');
        cy.get('input[name="emailRegisterPage"]').type('tybatester2022@gmail.com')
        cy.get('input[name="passwordRegisterPage"]').type('Tyb4*2022');
        cy.get('input[name="confirm_passwordRegisterPage"]').type('Tyb4*2022');
        //Agree checkbox
        cy.get('input[name="i_agree"]').click()
        cy.get('#register_btnundefined').click()
    })

    it('Validate new session', ()=>{
        cy.get('.hi-user.containMiniTitle.ng-binding').should('have.text','AutomationUser');
    })

})