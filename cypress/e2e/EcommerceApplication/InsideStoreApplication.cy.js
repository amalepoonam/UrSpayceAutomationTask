import { homePageInside } from "../pages/homePageInside";
import { purchaseProduct } from "../pages/purchaseProduct";
describe('Validate the Inside store application end to end functionality',()=>{
    beforeEach(()=>{
        cy.visit("http://training.inside.tm/shopping-basket/w4/i60/");
        let data='';
        cy.fixture('example.json').then((file)=>{
            data=file;
        })



    })
    it('Validate home page functionality of the inside store page',()=>{
        // cy.get()
        const homePage=new homePageInside();
        homePage.verifyLogo();
        homePage.verifyVisibilityOfSearchBox();
        homePage.verifyPlaceholderOfSearchBox();
        homePage.verifyBasketIcon();
        homePage.verifyEmptyCartMessage();

    })
    it('purchase product with the existing user',()=>{
        const product=new purchaseProduct();
        product.signingWithExistingUser();
        product.verifyLoginUser();
        product.continueShopping();
        product.addProductToBasket();
        product.nextStep();
        product.creditCardInfo();
        product.successPaymentMessage();
        
        
        

    })
})