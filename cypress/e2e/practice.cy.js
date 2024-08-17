
// require('@4tw/cypress-drag-drop')

// it.only('drag and drop',()=>{
//     cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette')

//     cy.get('#box6').should('be.visible')
//     cy.get('#box106').should('be.visible')
//     cy.wait(3000);
//     cy.get('#box6').drag('#box106',{force:true})
// })
  
describe('mouse over event',()=>{
    it.only('mouseover',()=>{
    cy.visit('https://demo.opencart.com/')
    cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover')
    cy.wait(10000)
    cy.get('body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').should('be.visible',{force:true});

    })
    
})