export class SearchAmazonProduct {

  locator = require('../fixtures/Locator/searchProduct.json');

  enterProductToSearchBox() {
    return cy.get(this.locator.searchBox);
  }
  clickToSearchIcon() {
    return cy.get(this.locator.searchIcon);
  }
  
     clickToAmazonProduct(){
       cy.get(".rush-component.s-latency-cf-section").within(() => {
        cy.get(".a-size-mini.a-spacing-none.a-color-base.s-line-clamp-2 a").each(($el) => {
          if ($el.text().trim() === "G-Shock GM-2100G-1A9DR Gold IP Black Analog-Digital Dial Black Resin Strap Men's Watch Shock and 200M Water Resistant G1278") {
            console.log("prod "+$el.text())
        
                cy.wrap($el).invoke('removeAttr', 'target').click({ force: true });
          }
          })
        })


        
          }  
     verifyProductTitle(){
      cy.title().should('contain', 'Casio G-Shock')
          }
          AddToCart(){
            // cy.get(this.locator.AddToCart);
            cy.get("#add-to-cart-button")
          }
          verifyWarrantyPopUp(){
            cy.get("#attach-warranty-pane").should("be.visible");
          }
          ClicktoSkipButton(){
            cy.get("#attachSiNoCoverage").click({force: true});;
          }
          cartItemCount(){
          cy.get("#nav-cart-count").invoke("text").then((itemCount)=> {
  
               expect(itemCount).eq("0");
          
              })
          
        }  
      } 

                

