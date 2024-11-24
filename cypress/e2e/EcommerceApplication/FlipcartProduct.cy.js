describe('template spec', () => {

    beforeEach(() => {
      cy.visit("https://www.flipkart.com")
    })
  
    // it('Verify home page', () => {
    //   cy.title().should('eq', 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
    // })
  
    it('Verify home page', () => {
      cy.get('.Pke_EE').type("G-Shock GM-2100G-1A9DR Gold IP Black Analog-Digital Dial Black Resin Strap Men's Watch Shock and 200M Water Resistant G1278");
      cy.get('._2iLD__').click();
      //searchPLP
    // cy.title().should('includes', 'G-Shock');
    cy.url().should('include', 'G-Shock');
    cy.get("a[title='CASIO GM-110G-1A9DR G-SHOCK Gold Ip Dial Black Resin Strap Analog-Digital Watch  - For Men']").invoke('removeAttr', 'target').click({ force: true });
   
    cy.title().should('contain', 'G-SHOCK ');



     cy.contains("Add to cart").click();
cy.get('button[class="QqFHMw vslbG+ _3Yl67G _7Pd1Fp"]').click();
      cy.get('button[class="QqFHMw vslbG+ In9uk2"]').click()
    
      cy.get('.UOCQB1 > .hl05eU > .Nx9bqj').invoke('text').then((price) => {
        // Convert the price to an integer
        const numericPrice = parseInt(price.replace(/,/g, ''), 10);
        cy.wrap(numericPrice).as('amazonPrice');
      });
      //cart item count 
      // cy.get(".atHedL").invoke("text").then((itemCount)=> {
  
      //   expect(itemCount).eq("1");
  
      // })

      //product price

      // cy.get('#corePriceDisplay_desktop_feature_div > .a-spacing-none').invoke('text').then((price) => {
      //   // Convert the price to an integer
      //   const numericPrice = parseInt(price.replace(/,/g, ''), 10);
      //   cy.wrap(numericPrice).as('amazonPrice');
      // });
    })
    
    // })




    
})