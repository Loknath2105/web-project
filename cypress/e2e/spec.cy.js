 describe("handle  basic web elements ",() => {
  beforeEach(()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  })
//   it("validate radio button functionality",()=>{
//     cy.get('[for="radio1"] .radioButton').check().should('be.checked')
//     cy.get('label input[type="checkbox"]').check(["option2","option3"]).should('be.checked')
//     cy.get('select').select('option2').should('have.value','option2')
//   })

// })


// dynamic dropdown
 
cy.get('fieldset #autocomplete').type('af')
cy.get('ul li.ui-menu-item div').each(($country)=>{
  if($country.text().includes('Afghanistan')){
     cy.wrap($country).click({force:true})
  }
})







})