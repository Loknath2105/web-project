// // describe('Amazon Add MuscleTech Whey Protein to Cart', () => {
// //     it('should add MuscleTech Whey Protein to the cart', () => {
      
// //       cy.visit('https://www.amazon.com')
      
// //       cy.get('#twotabsearchtextbox').type('MuscleTech Whey Protein{enter}')
  
// //       cy.wait(2000) 

// //       cy.contains('MuscleTech').parents('.s-result-item').first().click()
  
// //       cy.get('#add-to-cart-button').click()

// //       cy.wait(2000)
      
// //       cy.get('#nav-cart').click()

// //       cy.get('.sc-list-item').should('exist')
// //     })
// //   })


//    describe ('protocommerce filling page', () =>{

//     it('should add the details',()=>{

//       cy.visit('https://rahulshettyacademy.com/angularpractice/')

//       cy.get('[minlength="2"]').type('Loknath')

//       cy.get('[name="email"]').type('logusmart33@gmail.com')

//       cy.get('[type="password"]').type('Loknath2105')

//       cy.get('[id="exampleCheck1"]').click()

//       cy.get('[id="exampleFormControlSelect1"]').select(0)

//       cy.get('[id="inlineRadio1"]').click()

//       cy.get('[max="3000-12-31"]').type('2000-05-21')

//       cy.get('[type="submit"]').click()

//       cy.wait(4000)

//       cy.get('[href="/angularpractice/shop"]').click()
//       cy.wait(4000)

//       cy.get('.btn.btn-info').eq(0).click()

//       cy.get('.btn.btn-info').eq(1).click()

//       // cy.get('.nav-link.btn.btn-primary').click()

//         cy.get('[class="nav-link btn btn-primary"]').should('be.visible').click()
//         let sum=0;
//         cy.get('table tr td:nth-child(4) strong').each(($prices)=>{
//           const prices=$prices.text()
//           const splitted=prices.split(" ")
//           const actualPrice=splitted[1].trim();
//           sum=Number(sum)+Number(actualPrice)
//     }).then(()=>{
//       cy.log(sum)
//     })
//     cy.get('table tr td h3 strong').then((totalAmount)=>{
//       const totalTxt=totalAmount.text()
//       const splitted=totalTxt.split(" ")
//       const actualTotal=splitted[1].trim();
//       expect(Number(actualTotal)).to.eq(sum)
//       // cy.get('.nav-link.btn.btn-primary').click()
//       cy.get('.btn.btn-success').click()

//       cy.get('[id="country"]').type('Ind')
//       cy.wait(10000)
//       cy.get('.suggestions ul li a').each(($country)=>{
//         if($country.text().includes('India')){
//           cy.wrap($country).click({force:true})

//           cy.get('.checkbox.checkbox-primary input').click({force:true})
//           cy.get('.btn.btn-success.btn-lg').click()
//           cy.wait(10000)
//           cy.get('.alret.alret-success.alret-dismissible').should('be.visible','Success! Thank you! Your order will be delivered in next few weeks :-).')
//         }
//         })



//     })
//         })
      
//     })


  console.log(obj.name); // update




  

