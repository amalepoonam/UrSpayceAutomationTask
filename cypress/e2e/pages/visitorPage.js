export class visitorPage {
    verifyVisitorInformationField() {
        cy.get('.bg-light > span').should('contain', 'Visitor Information');
    }
    enterVistorFullName() {
        return cy.get('.mat-mdc-text-field-wrapper.mdc-text-field.ng-tns-c1205077789-0.mdc-text-field--outlined.mdc-text-field--no-label');
    }
    enterVisitorEmailAddress() {
        return cy.get(':nth-child(2) > :nth-child(2) > div[_ngcontent-ng-c3413909703=""] > .mat-mdc-form-field > .mat-mdc-text-field-wrapper')
    }
    enterVisitorVisitorPhoneNo() {
        return cy.get('#adsasd')
    }
    selectVisitorGender() {
        cy.get(':nth-child(3) > :nth-child(2) > div[_ngcontent-ng-c3413909703=""] > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').as('gender')
        cy.get('@gender').click().should('be.visible')
        // select gender
        cy.get('#mat-option-1').click().should('contain', 'Female')


    }
    visitingPurpose() {
        return cy.get(':nth-child(4) > .col-md-6.ng-star-inserted > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click({ force: true })

    }
    searchHostName() {
        return cy.get('.ng-invalid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper')

    }
    selectDepartment() {
        return cy.get(':nth-child(5) > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click({ force: true })


    }
    selectDesignation() {
        cy.get('.mat-mdc-form-field-infix.ng-tns-c1205077789-12').as('designation')
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
        cy.get(':nth-child(8) > :nth-child(3) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click();
        cy.get('#mat-option-7').click()
    }
    setTemperature() {
        cy.get('#mat-input-6').should('have.attr', 'placeholder', 'Enter Temperature');
        cy.get(':nth-child(9) > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').type('30°C')
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
}