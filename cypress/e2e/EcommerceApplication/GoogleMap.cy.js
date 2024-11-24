
describe("Google Map", () => {
    beforeEach(function () {

    })
    it('verify Location', function () {
        cy.visit('https://www.google.com/maps/');
        cy.get('#searchboxinput').type("Wankhede Stadium");
        cy.get('#cell0x0').click();
        cy.wait(1000);
        cy.get('.DUwDvf').then((ele) => {
            const actText = ele.text();
            expect(actText.includes("Wankhede Stadium")).to.be.true;
            // cy.screenshot();// screenshotsaved in screen folder
            cy.log("saved the screenshot succesfully");
            cy.title().should('contain', 'Wankhede Stadium');

        })
    
        cy.get("div[class='fontDisplayLarge']").then($rating => {
            const rating = $rating.text().trim();
            cy.log('Rating: ' + rating);
            cy.get('.HHrUdb').then($reviews => {
                const reviews = $reviews.text().trim();
                cy.log('Number of Reviews: ' + reviews);
                console.log('Rating: ' + rating);
                console.log('Number of Reviews: ' + reviews);
            })
        })
    })
})