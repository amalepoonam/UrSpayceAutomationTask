export class visitorPage {
    verifyVisitorInformationField() {
        cy.get("div[class='bg-light mb-3'] span").should('contain', 'Visitor Information');
    }
    enterVistorFullName() {
        return cy.get("[placeholder='Enter Full Name']");
    }
    enterVisitorEmailAddress() {
        return cy.get("[placeholder='Enter Email Id']");
    }
    enterVisitorVisitorPhoneNo() {
        return cy.get('#adsasd')
    }
    selectVisitorGender() {
        cy.get('#mat-select-value-1').as('gender')
        cy.get('@gender').click().should('be.visible')
        // select gender
        cy.get('#mat-option-1').click().should('contain', 'Female')


    }
    visitingPurpose() {
        return cy.get('#mat-select-value-3').click({ force: true })

    }
    searchHostName() {
        return cy.get('#mat-input-3')

    }
    selectDepartment() {
        return cy.get('#mat-select-value-5').click({ force: true })


    }
    selectDesignation() {
        cy.get('#mat-select-value-7').as('designation')
        cy.get('@designation').click();
        cy.get('#mat-option-29').click();

    }
    SetVisitingDate() {
        const date = "15";
        const year = "2024";
        const desireMonth = "OCT";
        cy.get('#mat-input-4').click();
        cy.get('.mdc-button__label > span').click();
        cy.get('.mat-calendar-content').contains(year).click();
        cy.get('.mat-calendar-content').contains(desireMonth).click()
        cy.get('.mat-calendar-content').contains(date).click()

    }
    setMeetingDuration() {
        cy.get('#mat-select-value-9').click();
        cy.get('#mat-option-7').click()
    }
    setTemperature() {
        cy.get('#mat-input-6').should('have.attr', 'placeholder', 'Enter Temperature');
        return cy.get("[placeholder='Enter Temperature']").type('97')
    }
    selectNoOfpeople() {
        cy.get('#mat-input-7').should('have.attr', 'placeholder', 'Enter No of People');
        cy.get(':nth-child(9) > :nth-child(2) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').type('10')
    }
    selectVaccinationDose() {
        cy.get(':nth-child(9) > :nth-child(3) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click();
        cy.get('#mat-option-12 > .mdc-list-item__primary-text').click();
    }
    setPrivateNote() {
        return cy.get('.col-md-12 > .mat-mdc-form-field > .mat-mdc-text-field-wrapper')
    }
   clickToSendRequest(){
    cy.get('.text-white').click();
   }
   clickToCancelButton(){
    cy.get('.mr-3.btn-cancle').click();  
    cy.get('h2')
   }
}