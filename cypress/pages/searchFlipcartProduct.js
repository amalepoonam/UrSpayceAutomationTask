export class searchFlipcartProduct {
    locator = require('../fixtures/Locator/searchProduct.json');

  enterProductToFlipcartSearchBox() {
    return cy.get(this.locator.seachFlipcartBox);
  }
  clickToFlipcartSearchIcon() {
    return cy.get(this.locator.searchIconFlipCart);
  }
  clickToFlipcartProduct(){
    cy.get(" a[title='CASIO GM-110G-1A9DR G-SHOCK Gold Ip Dial Black Resin Strap Analog-Digital Watch  - For Men']").invoke('removeAttr', 'target').click({ force: true });
       }

    validateProducturl(){
      cy.url().should('include', 'G-Shock');

    }
    validateProductTitle(){
      cy.title().should('contain', 'G-SHOCK ');
    }
    addToCartFlipcart(){
      cy.contains("Add to cart").click();
    }     
    

}

