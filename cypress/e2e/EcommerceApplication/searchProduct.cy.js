///<reference types="Cypress"/>
import { SearchAmazonProduct } from "../pages/SearchAmazonProduct";
import { searchFlipcartProduct } from "../pages/searchFlipcartProduct";
describe('Page object frame work ', () => {
    let data = '';
    before(function () {
        cy.fixture('example').then(function (file) {
            data = file;
        })
    })

    it('Validate the search functonality of amazon page', function () {
        cy.visit(Cypress.env('amazonUrl'))
        const searchProduct = new SearchAmazonProduct();
        searchProduct.enterProductToSearchBox().type(data.product);
        searchProduct.clickToSearchIcon().click();
        searchProduct.clickToAmazonProduct();
        searchProduct.verifyProductTitle();
        cy.get('#corePriceDisplay_desktop_feature_div > .a-spacing-none > .a-price > [aria-hidden="true"] > .a-price-whole').as('amazonPrice').invoke('text').then((price) => {
            // Convert the price to an integer
            const numericPrice = parseInt(price.replace(/,/g, ''), 10);
            // cy.wrap(numericPrice).as('amazonPrice');
          });
        searchProduct.AddToCart();
        // searchProduct.verifyWarrantyPopUp();
        searchProduct.ClicktoSkipButton();
        searchProduct.cartItemCount();

    
    // it('verify filpcart', () => {
        cy.origin(Cypress.env('flipcartUrl'), () => {
         
        const searchProductflip = new searchFlipcartProduct()
        searchProductflip.enterProductToFlipcartSearchBox().type(data.product);
        searchProductflip.clickToFlipcartSearchIcon().click();
        searchProductflip.validateProducturl();
        searchProductflip.clickToFlipcartProduct();
        searchProductflip.validateProductTitle()
        cy.get('.UOCQB1 > .hl05eU > .Nx9bqj').as('FlipcartPrice').invoke('text').then((price) => {
            // Convert the price to an integer
            const numericPrice = parseInt(price.replace(/,/g, ''), 10);
           // cy.wrap(numericPrice).as('FlipcartPrice');
          
           searchProductflip.addToCartFlipcart();
    // it('Compare prices and log the platform with the lowest price', () => {
        cy.get('@amazonPrice').then((priceAmazon) => {
          cy.get('@FlipcartPrice').then((priceFlipkart) => {
            if (priceAmazon < priceFlipkart) {
              cy.log('Amazon offers the lowest price.');
            } else {
              cy.log('Flipkart offers the lowest price.');
            }
          });   
          })
      
        });
})
    })
})




