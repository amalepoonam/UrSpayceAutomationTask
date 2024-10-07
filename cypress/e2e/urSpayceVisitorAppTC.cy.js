import { visitorPage } from "./pages/visitorPage";
describe('Visitor Form verification',()=>{
    const  vp=new visitorPage();

    beforeEach(() => {
        cy.visit("https://stagevisitor.urspayce.com/new-visitor/641d80d7f97c654aaa1bb741")
    })
    it("Verify the home page functionality with valid data", () => {
         vp.verifyVisitorInformationField();
         vp.enterVistorFullName().type('ABC');
         vp.enterVisitorEmailAddress().type('test@example.com');
         vp.enterVisitorVisitorPhoneNo().type('9876543210')
         vp.selectVisitorGender();
         vp.visitingPurpose().should('not.be.enabled');
         vp.searchHostName().type('Bop');
         vp.selectDepartment().should('not.be.enabled');
         vp.selectDesignation();
         vp.SetVisitingDate();
         vp.setMeetingDuration();
         vp.setTemperature();
         vp.selectNoOfpeople();
         vp.selectVaccinationDose();
         vp.setPrivateNote().type('test successfully');
         vp.clickToSendRequest();
    })
    it("cancel Button functionality ",()=>{
        vp.clickToCancelButton();

    })
    it("verify  by adding invalid details",()=>{
        vp.enterVistorFullName().type('123');

        vp.enterVisitorEmailAddress().type('test');
        vp.enterVisitorVisitorPhoneNo().type('9876543210');

        vp.ErrorMessageInvalidEmail()
        vp.ErrorMessageInvalidName();
         
        
    } )
    it("verify the message without entering the detail click to send request",()=>{
       vp.clickToSendRequest();
       cy.get('.alert-error > .d-flex').should('be.visible') .and('contain', 'Please Provide Required Details');
    }) 


})