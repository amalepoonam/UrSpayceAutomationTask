

import { SearchProduct } from "../pages/SearchAmazonProduct";
describe('Serch product as Titan watch',()=>{
    let data='';
    before(function(){
        cy.fixture('example').then(function(file){
            data=file;
        })
    })

    it('Validate the search functonality of amazon page', function(){
        cy.visit(Cypress.env('amazonUrl'))
        const searchProduct=new SearchProduct();
        searchProduct.enterProductToSearchBox().type(data.product);
        searchProduct.clickToSearchIcon().click();
        // searchProduct.clickProductName();


        cy.get(".rush-component.s-latency-cf-section").within(() => {
            cy.get(".a-size-mini.a-spacing-none.a-color-base.s-line-clamp-2 a").each(($el) => {
              if ($el.text().trim() === "G-Shock GM-2100G-1A9DR Gold IP Black Analog-Digital Dial Black Resin Strap Men's Watch Shock and 200M Water Resistant G1278") {
                console.log("prod "+$el.text())
                cy.wrap($el).invoke('removeAttr', 'target').click({ force: true });

                // cy.get(".a-price-whole").contains('3,196')

            }
        // cy.get('[data-asin="B0D7LW1HZX"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > [data-action="puis-card-container-declarative"] > [data-cy="asin-faceout-container"]').click();
        })


    })

    })
})