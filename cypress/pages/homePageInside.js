export class homePageInside {

    locator = require('../fixtures/Locator/insideStore.json');
    verifyLogo() {
        cy.get(this.locator.logo).should('be.visible')
    }
    verifyVisibilityOfSearchBox() {
        cy.get(this.locator.searchBox).should('be.visible')
    }
    verifyPlaceholderOfSearchBox() {
        cy.get(this.locator.searchBox).should('have.attr', 'placeholder', 'Search the site . . .');
    }
    verifyBasketIcon() {
        cy.get(this.locator.basketIcon).should('be.visible').invoke("text").then((itemCount) => {
            expect(itemCount).eq("0");
        })
    }

    verifyEmptyCartMessage() {
        cy.get(this.locator.emptyCartMessage).should('contain.text', 'Your Cart is Empty');

    }
    verifyEmailAddressField(){
        cy.get(this.locator.searchBox).should('be.visible')
    }



}
