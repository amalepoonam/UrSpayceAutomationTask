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
        return cy.get("[placeholder='Enter Temperature']").type('99')
        }

    selectNoOfpeople() {
        cy.get('#mat-input-7').should('have.attr', 'placeholder', 'Enter No of People');
        cy.get("[placeholder='Enter No of People']").type('10')
    }
    selectVaccinationDose() {
        cy.get('#mat-select-value-11').click();
        cy.get('#mat-option-12').click();
    }
    setPrivateNote() {
        return cy.get("[placeholder='Leave private note']")
    }
   clickToSendRequest(){
    cy.get("[type='submit']").click();
   }
   clickToCancelButton(){
    cy.get('.mr-3.btn-cancle').click();
const expectedText="Welcome to Visitor Management System"
cy.get("div[class='card'] h2").then(($el) => {
    const actualText = $el.text().replace(/\s+/g, ' ').trim();  // Normalize spaces
    expect(actualText).to.equal(expectedText.trim());  // Expected text trimmed
  });
   }
   ErrorMessageInvalidName(){
    const expectedText= "Name is not valid"
    cy.get(':nth-child(1) > div[_ngcontent-ng-c3413909703=""] > .mat-mdc-form-field > .mat-mdc-form-field-subscript-wrapper > .mat-mdc-form-field-error-wrapper').then(($el) => {
    const actualText = $el.text().replace(/\s+/g, ' ').trim();  // Normalize spaces
    expect(actualText).to.equal(expectedText.trim());  // Expected text trimmed
  });
   
   }
   ErrorMessageInvalidEmail(){
    const expectedText= "Please provide a valid email address"
    cy.get(':nth-child(2) > div[_ngcontent-ng-c3413909703=""] > .mat-mdc-form-field > .mat-mdc-form-field-subscript-wrapper > .mat-mdc-form-field-error-wrapper').then(($el) => {
    const actualText = $el.text().replace(/\s+/g, ' ').trim();  // Normalize spaces
    expect(actualText).to.equal(expectedText.trim());  // Expected text trimmed
  });
   
   }
}
// Example: Validate using custom logic with .then()
