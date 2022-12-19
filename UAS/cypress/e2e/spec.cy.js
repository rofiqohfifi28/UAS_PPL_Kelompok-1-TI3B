
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
/*describe('login', () => {
  it('passes', () => {
 
    cy.visit('http://localhost/proyek2nya/admin/login.php')
    cy.get(':nth-child(1) > .form-control').type('jasmin')
    cy.get(':nth-child(2) > .form-control').type('rofiqoh')
    cy.get('.btn-success').click()    
  })
})
*/
/*describe('login', () => {
  it('passes', () => {
 
    cy.visit('http://localhost/proyek2nya/admin/login.php')
    cy.get(':nth-child(1) > .form-control')
    cy.get(':nth-child(2) > .form-control')
    cy.get('.btn-success').click()    
  })
})
*/
//TAMBAH DATA SISWA
//tambah data berhasil 
/*describe('login', () => {
  it('passes', () => {
 
    cy.visit('http://localhost/proyek2nya/admin/login.php')
    cy.get(':nth-child(1) > .form-control').type('jasmin')
    cy.get(':nth-child(2) > .form-control').type('jasmin')
    cy.get('.btn-success').click()    
    cy.get(':nth-child(1) > [data-toggle="modal"]').click()
    cy.get(':nth-child(1) > #exampleInputEmail1').type('Rahma Nur Samdari')
    cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > #exampleInputEmail1').type('RahmaNur')
    cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-body > form > :nth-child(3) > #exampleInputEmail1').type('siswa3')
    cy.get('form > select.form-control').select('Kelas 7')
    cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-body > form > :nth-child(6) > .form-control').type('Jln.Ronggolawe 14 Malang')
    cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-body > form > :nth-child(7) > #exampleInputEmail1').type('08123531689')
    cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  })
})
*/

//tambah data berhasil dengan inputan yang sama
/*describe('login', () => {
  it('passes', () => {
    cy.visit('http://localhost/proyek2nya/admin/login.php')
    cy.get(':nth-child(1) > .form-control').type('jasmin')
    cy.get(':nth-child(2) > .form-control').type('jasmin')
    cy.get('.btn-success').click()    
    cy.get(':nth-child(1) > [data-toggle="modal"]').click()
    cy.get(':nth-child(1) > #exampleInputEmail1').type('Rahma Nur Samdari')
    cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > #exampleInputEmail1').type('RahmaNur')
    cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-body > form > :nth-child(3) > #exampleInputEmail1').type('siswa3')
    cy.get('form > select.form-control').select('Kelas 7')
    cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-body > form > :nth-child(6) > .form-control').type('Jln.Ronggolawe 14 Malang')
    cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-body > form > :nth-child(7) > #exampleInputEmail1').type('08123531689')
    cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  })
})
*/

//tambah data dengan tidak menginputkan data apapun
/*describe('login', () => {
  it('passes', () => {
 
    cy.visit('http://localhost/proyek2nya/admin/login.php')
    cy.get(':nth-child(1) > .form-control').type('jasmin')
    cy.get(':nth-child(2) > .form-control').type('jasmin')
    cy.get('.btn-success').click()    
    cy.get(':nth-child(1) > [data-toggle="modal"]').click()
    cy.get(':nth-child(1) > #exampleInputEmail1')
    cy.get('#exampleModalCenter > .modal-dialog >.modal-content > .modal-body > form > :nth-child(2) > #exampleInputEmail1')
    cy.get('#exampleModalCenter > .modal-dialog >.modal-content > .modal-body > form > :nth-child(3) > #exampleInputEmail1')
    cy.get('form > select.form-control')
    cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-body > form > :nth-child(6) > .form-control')
    cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-body > form > :nth-child(7) > #exampleInputEmail1')
    cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  })
})
*/


//EDIT DATA SISWA
/*describe('login', () => {
  it('passes', () => {
 
    cy.visit('http://localhost/proyek2nya/admin/login.php')
    cy.get(':nth-child(1) > .form-control').type('jasmin')
    cy.get(':nth-child(2) > .form-control').type('jasmin')
    cy.get('.btn-success').click()    
    cy.get('[data-target="#edit-siswa0"] > .btn').click()
    cy.get('.in > .modal-dialog > .modal-content > .modal-body > form > :nth-child(6) > .form-control').type('jln.Mondoroko GG.01/13')
    cy.get('.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    
  })
})
*/


//Edit data siswa dengan mengosongkan semua inputan
/*describe('login', () => {
  it('passes', () => {
 
    cy.visit('http://localhost/proyek2nya/admin/login.php')
    cy.get(':nth-child(1) > .form-control').type('jasmin')
    cy.get(':nth-child(2) > .form-control').type('jasmin')
    cy.get('.btn-success').click()    
    cy.get('[data-target="#edit-siswa0"] > .btn').click()
    cy.get('.in > .modal-dialog > .modal-content > .modal-body > form > :nth-child(6) > .form-control').type('jln.Mondoroko GG.01/13')
    cy.get('.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    
  })
})


//HAPUS DATA
/*describe('login', () => {
  it('passes', () => {
 
    cy.visit('http://localhost/proyek2nya/admin/login.php')
    cy.get(':nth-child(1) > .form-control').type('jasmin')
    cy.get(':nth-child(2) > .form-control').type('jasmin')
    cy.get('.btn-success').click()    
    cy.get('[data-target="#hapus-admin2"] > .btn').click()
    cy.get(':nth-child(3) > :nth-child(7) > :nth-child(2) > .modal > .modal-dialog > .modal-content > .modal-footer > .btn-danger').click()
    
  })
})
*/
//TAMBAH DATA KELAS
/*
describe('login', () => {
  it('passes', () => {
 
    cy.visit('http://localhost/proyek2nya/admin/login.php')
    cy.get(':nth-child(1) > .form-control').type('jasmin')
    cy.get(':nth-child(2) > .form-control').type('jasmin')
    cy.get('.btn-success').click()    
    cy.get('.col-sm-3 > .nav > .active > a').click()
    cy.get(':nth-child(1) > [data-toggle="modal"]').click()
    cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-body > form > .form-group > #exampleInputEmail1').type('Kelas 9B')
    cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    
  })
})
*/

