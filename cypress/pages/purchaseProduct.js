export class purchaseProduct{
    locator =require('../fixtures/Locator/insideStore.json');
    data=require('../fixtures/example.json')
    signingWithExistingUser(){
        cy.get('a').contains('sign in ').click();
        cy.get(this.locator.emailAddress).type(this.data.emailId);
        cy.get(this.locator.password).type(this.data.password)
        cy.get(this.locator.signIn).click();
    }
    verifyLoginUser(){
        cy.get('td > strong').should('contain','hi Joe!')
    }
    continueShopping(){
        cy.get('a').contains('Continue Shopping').click();
    }
    addProductToBasket(){
        cy.get(this.locator.menSection).trigger('mouseover').then(() => {
            //   cy.contains("a","denim").click({force:true});
            cy.get(this.locator.denims).click();
            
        cy.get('a').contains(this.data.mensProductName).click()
        cy.get(this.locator.productPrice).should('be.visible') // Ensure the price is visible
            .and('contain', this.data.productPrice)
        // add the quqntity
        cy.get(this.locator.productQuantityBox).clear({force:true}).type('2');
        // Add to basket 
        cy.get(this.locator.addToBasket).click();
        })
    }
    nextStep(){
        cy.get(this.locator.nextStepButton).click();

    }
    editDetails(){
        cy.get(this.locator.editDetails).click();
        cy.get(this.locator.firstName).type(this.data.firstName)
        cy.get(this.locator.saveAndContinueBtn).click();

    }
        applyInvalidPromocode(){
            cy.get(this.locator.promocodeBox).type('Save234');
            cy.get(this.locator.useCode).click();
            cy.get(this.locator.popUp).click();
        }
    creditCardInfo(){
        cy.get(this.locator.nameOnCard).type(this.data.nameOnCard);
        cy.get(this.locator.cardType).select(this.data.cardType);
        cy.get(this.locator.cardNumber).type(this.data.cardNumber);
        cy.get(this.locator.cardExpiryMonth).type(this.data.cardMonth);
        cy.get(this.locator.cardExpiryYear).type(this.data.cardYear);
        cy.get(this.locator.cvvNumBox).type(this.data.cvv);
        cy.get(this.locator.completeAndPayBox).click();
        
}
successPaymentMessage(){
    cy.get(this.locator.successMsg).then((x)=>{
        const actualText = x.text();
            expect(actualText.includes("Thank you for shopping with us")).to.be.true

    })
}
    }
   

