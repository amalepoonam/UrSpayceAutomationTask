describe('sauceDemo product purchase',()=>{
    let data='';
    before(function () {
      

        // runs once before all tests in the block
        cy.fixture('sauceDemoProduct.json').then(function (file) {
         data = file
        })
      })
    it.skip("Add  product to cart and proceed to checkout",()=>{
        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]') .type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
         data.productName.forEach(function (element) {
       cy.selectProduct(element)
          });
      
        })
        it("perform the basic operation",()=>{
          cy.visit("https://nichethyself.com/tourism/home.html");
          cy.get("a[href='customised.html']").invoke('removeAttr','target').click();
          cy.get('#days').select('Home Stay');
          cy.get("input[type='checkbox']").eq(1).click();
          // cy.go('back')
          cy.contains('Contact us').click();
        })
    })

