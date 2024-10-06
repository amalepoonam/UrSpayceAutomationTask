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
    it.skip("cancel Button functionality ",()=>{
        vp.clickToCancelButton();

    })

})