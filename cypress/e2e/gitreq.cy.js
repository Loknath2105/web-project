describe("sample http get request",()=>{

    // it("get call",()=>{
    //     cy.request ('GET','https://reqres.in/api/users?page=2')
    //     .its('status')
    //     .should('equal',200);
    // })
    //  it("postcall",()=>{
    //         cy.request({
    //         method :  'POST',
    //         url : 'https://reqres.in/api/users?page=2' ,
        
    //         body:{

    //             name : "morpheus",
    //             job : "leader"
    //         }
    //     }).its('status').should('equal',201)

    // })


    const bodyValue={
        name : "morpheus",
        job : "zion resient"
    }

    it("get call",()=>{
        cy.request({
            method :  'PUT',
            url : 'https://reqres.in/api/users/2' ,
        
            body : bodyValue
           
        }).its('status').should('equal',200)

    })
})



