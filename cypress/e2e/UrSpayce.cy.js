describe("Validate the functionality of Visitor Registration Page", () => {
    beforeEach(() => {
        cy.visit("https://stagevisitor.urspayce.com/new-visitor/641d80d7f97c654aaa1bb741")
    })
    it("Verify the home page functionality with valid data", () => {
        // verify title
        // cy.title().should('eq','UrSpayce Visitor App')
        cy.reload();
        cy.get('.bg-light > span').should('contain', 'Visitor Information')
        // visitor Full name
        cy.get('.mat-mdc-text-field-wrapper.mdc-text-field.ng-tns-c1205077789-0.mdc-text-field--outlined.mdc-text-field--no-label').type('abc');
        //     visitor mail address

        cy.get(':nth-child(2) > :nth-child(2) > div[_ngcontent-ng-c3413909703=""] > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').type('test@gmail.com');
        // visitor phone number
        cy.get('.iti__selected-flag').click();
        cy.get('#adsasd').click();
        // Visitor Gender
        cy.get(':nth-child(3) > :nth-child(2) > div[_ngcontent-ng-c3413909703=""] > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click().should('be.visible')
        // select gender
        cy.get('#mat-option-1').click().should('contain','Female')
        // .should('have.value', 'Female')
        // visiting purpose
        cy.get(':nth-child(4) > .col-md-6.ng-star-inserted > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click({ force: true }).should('not.be.enabled');
       //search host
        cy.get('.ng-invalid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').type('Bop');
        cy.wait(2000);
          
        // select department
        cy.get(':nth-child(5) > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click({ force: true }).should('not.be.enabled');
   
        //    select designation

    cy.get('.mat-mdc-form-field-infix.ng-tns-c1205077789-12').as('designation')
    cy.get('@designation').click();
    cy.get('#mat-option-29').click();
    //  cy.get('@designation').should('contain','Employee') 
// visiting date
const date="15";
const year="2024";
const desireMonth="OCT";
cy.get('#mat-input-4').click();

cy.get('.mdc-button__label > span').click();
cy.get('.mat-calendar-content').contains(year).click();
cy.get('.mat-calendar-content').contains(desireMonth).click()
cy.get('.mat-calendar-content').contains(date).click()

//temperature 
cy.get('#mat-input-6').should('have.attr', 'placeholder', 'Enter Temperature');
cy.get(':nth-child(9) > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').type('30°C')
cy.get(':nth-child(9) > :nth-child(2) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').type('10')
//select vaccination
cy.get(':nth-child(9) > :nth-child(3) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click();
cy.get('#mat-option-12 > .mdc-list-item__primary-text').click();

cy.get('.col-md-12 > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').type('test successfully')

     // send request
     cy.get('.text-white').click();

    });
    it.skip("Verify the home page functionality with invalid data", () => {
        // verify title
        // cy.title().should('eq','UrSpayce Visitor App')
        cy.reload();
        cy.get('.bg-light > span').should('contain', 'Visitor Information')
        // visitor Full name
        cy.get('.mat-mdc-text-field-wrapper.mdc-text-field.ng-tns-c1205077789-0.mdc-text-field--outlined.mdc-text-field--no-label').type('3456');
        //cy.get('#mat-mdc-error-7').should('contain','Name is not valid')
        //     visitor mail address

        cy.get(':nth-child(2) > :nth-child(2) > div[_ngcontent-ng-c3413909703=""] > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').type('test123');

        // visitor phone number
        cy.get('.iti__selected-flag').click();
        cy.get('#adsasd').click();
        // Visitor Gender
        cy.get(':nth-child(3) > :nth-child(2) > div[_ngcontent-ng-c3413909703=""] > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click().should('be.visible')
        // select gender
        cy.get('#mat-option-1').click().should('contain','Female')
        // .should('have.value', 'Female')
        cy.get(':nth-child(4) > .col-md-6.ng-star-inserted > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click({ force: true }).should('not.be.enabled');
        cy.get('.ng-invalid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').type('Bop');
        cy.wait(2000);
          
        // select department
        cy.get(':nth-child(5) > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click({ force: true }).should('not.be.enabled');
   
        //    select designation

    cy.get('.mat-mdc-form-field-infix.ng-tns-c1205077789-12').as('designation')
    cy.get('@designation').click();
    cy.get('#mat-option-29').click();
    //  cy.get('@designation').should('contain','Employee') 
// visiting date
const date="15";
const year="2024";
const desireMonth="OCT";
cy.get('#mat-input-4').click();

cy.get('.mdc-button__label > span').click();
cy.get('.mat-calendar-content').contains(year).click();
cy.get('.mat-calendar-content').contains(desireMonth).click()
cy.get('.mat-calendar-content').contains(date).click()

//temperature 
cy.get('#mat-input-6').should('have.attr', 'placeholder', 'Enter Temperature');
cy.get(':nth-child(9) > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').type('30°C')
cy.get(':nth-child(9) > :nth-child(2) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').type('10')
cy.get(':nth-child(9) > :nth-child(3) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click();
cy.get('#mat-option-12 > .mdc-list-item__primary-text').click();
cy.get('.col-md-12 > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').type('test successfully')

     // send request
     cy.get('.text-white').click();
     cy.get('.mr-3.btn-cancle').click();

    });
    it('validate cancel button functionality',()=>{
        cy.get('.mr-3.btn-cancle').click();   
    })
    it('validate send request button functionality ',()=>{
        cy.get('.text-white').click();
        cy.get('app-snackbar.ng-star-inserted > .alert-error').should('contain','Please Provide required Details')
    })
}
)
