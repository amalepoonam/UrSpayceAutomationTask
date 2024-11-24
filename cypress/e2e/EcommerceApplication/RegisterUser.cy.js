describe('User Resiteration', () => {
    // beforeEach(()=>{
    //     cy.visit( 'http://automationexercise.com')
    // })
    it.skip('Test_1 Purchase Product', () => {
        cy.get("a[href='/login']").click();
        cy.get('[data-qa="signup-name"]').type('Poonam')
        cy.get('[data-qa="signup-email"]').type('amalepoonam15@gmail.com');
        cy.get('[data-qa="signup-button"]').click()
        // enter info
        cy.get('#id_gender2').check().should('be.checked');
        //check the mail Id 
        cy.get('[data-qa="name"]').should('have.value', 'Poonam');
        cy.get('[data-qa="email"]').should('have.value', 'amalepoonam15@gmail.com');
        cy.get('[data-qa="password"]').type('Poonam@123');
        cy.get('select[data-qa="days"]').select('6').should('have.value', '6');
        cy.get('select[data-qa="months"]').select('February').should('have.value', '2');
        cy.get('select[data-qa="years"]').select('1996').should('have.value', '1996');;
        cy.get('#optin').check().should('be.checked');
        cy.get('#first_name').type('Poonam');
        cy.get('[data-qa="last_name"]').type('Amale');
        cy.get('#company').type('Stulz');
        cy.get('#address1').type("Parvati Nagar, pune");
        cy.get('#country').should('have.value', 'India');
        cy.get('#state').type('Maharastra');
        cy.get('#city').type('Pune');
        cy.get('#zipcode').type('411030');
        cy.get('#mobile_number').type('7890765454');
        cy.get('button').contains('Create Account').click();


    })
    it('Test_2 User SignIn', function () {
        cy.SignIn();
        cy.Product();

        cy.get('.modal-footer > .btn').click();
        cy.wait(1000)
        cy.get('.shop-menu > .nav > :nth-child(3)').click();
        cy.checkOut();
        

    })
})