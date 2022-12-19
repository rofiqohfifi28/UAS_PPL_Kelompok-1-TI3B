
//LOGIN

//login berhasil( username dan password benar)
/*describe('login', () => {
  it('passes', () => {
 
    cy.visit('http://localhost/proyek2nya/admin/login.php')
    cy.get(':nth-child(1) > .form-control').type('jasmin')
    cy.get(':nth-child(2) > .form-control').type('jasmin')
    cy.get('.btn-success').click()    
  })
})
*/
//login gagal (username salah password benar)

/*describe('login', () => {
  it('passes', () => {
 
    cy.visit('http://localhost/proyek2nya/admin/login.php')
    cy.get(':nth-child(1) > .form-control').type('rofiqoh')
    cy.get(':nth-child(2) > .form-control').type('jasmin')
    cy.get('.btn-success').click()    
  })

})
*/

//login gagal (username benar password salah)
describe('login', () => {
  it('passes', () => {
 
    cy.visit('http://localhost/proyek2nya/admin/login.php')
    cy.get(':nth-child(1) > .form-control').type('jasmin')
    cy.get(':nth-child(2) > .form-control').type('rofiqoh')
    cy.get('.btn-success').click()    
  })
})

