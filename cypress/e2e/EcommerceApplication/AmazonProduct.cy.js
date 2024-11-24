describe('template spec', () => {

    beforeEach(() => {
      
    })
  
    // it('Verify home page', () => {
    //   cy.title().should('eq', 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
    // })
  
    it.only('Verify home page', () => {
      cy.visit("https://www.amazon.in/")
      cy.get("#twotabsearchtextbox").type("G-Shock GM-2100G-1A9DR Gold IP Black Analog-Digital Dial Black Resin Strap Men's Watch Shock and 200M Water Resistant G1278");
      cy.get("#nav-search-submit-button").click();
      //searchPLP
      cy.title().should('contain', 'Amazon.in');
      cy.get(".rush-component.s-latency-cf-section").within(() => {
        cy.get(".a-size-mini.a-spacing-none.a-color-base.s-line-clamp-2 a").each(($el) => {
          if ($el.text().trim() === "G-Shock GM-2100G-1A9DR Gold IP Black Analog-Digital Dial Black Resin Strap Men's Watch Shock and 200M Water Resistant G1278") {
            console.log("prod "+$el.text())
            cy.wrap($el).invoke('removeAttr', 'target').click({ force: true });
            // cy.wrap($el).closest(".a-section.a-spacing-base.a-text-center").within(() => {
            //   cy.get(".a-size-mini.a-spacing-none.a-color-base.s-line-clamp-2 a").focus();
            //   cy.get(".a-size-mini.a-spacing-none.a-color-base.s-line-clamp-2 a", { timeout: 10000 }).invoke('removeAttr', 'target').click({ force: true });
            // })
          }
        })
      })
      //pdp title
      cy.title().should('contain', 'Casio G-Shock');
      cy.get('#corePriceDisplay_desktop_feature_div > .a-spacing-none > .a-price > [aria-hidden="true"] > .a-price-whole').invoke('text').then((price) => {
        // Convert the price to an integer
        const numericPrice = parseInt(price.replace(/,/g, ''), 10);
        cy.wrap(numericPrice).as('amazonPrice');
      });
      cy.get("#add-to-cart-button").click();
      //warrenty popup 
      cy.get("#attach-warranty-pane").should("be.visible");
      //skip button
      cy.get("#attachSiNoCoverage").click();
  
      //cart item count 
      cy.get("#nav-cart-count").invoke("text").then((itemCount)=> {
  
        expect(itemCount).eq("0");
  
      })

      //product price

    
    })
    it.skip('verify filpcart',()=>{
      cy.visit("https://www.flipkart.com")
        cy.get('.Pke_EE').type("G-Shock GM-2100G-1A9DR Gold IP Black Analog-Digital Dial Black Resin Strap Men's Watch Shock and 200M Water Resistant G1278");
        cy.get('._2iLD__').click();
        //searchPLP
      // cy.title().should('includes', 'G-Shock');
      cy.url().should('include', 'G-Shock');
      cy.get(" a[title='CASIO GM-110G-1A9DR G-SHOCK Gold Ip Dial Black Resin Strap Analog-Digital Watch  - For Men']").invoke('removeAttr', 'target').click({ force: true });
     
    })
})
      
  
      
      
  
  