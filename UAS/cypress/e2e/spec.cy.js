
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
    cy.get('.in > .modal-dialog > .modal-content > .modal-body > form > :nth-child(6) > .form-control').
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

//TAMBAH DATA KELAS dengan mengosongkan semua form
/*
describe('login', () => {
  it('passes', () => {
 
    cy.visit('http://localhost/proyek2nya/admin/login.php')
    cy.get(':nth-child(1) > .form-control').type('jasmin')
    cy.get(':nth-child(2) > .form-control').type('jasmin')
    cy.get('.btn-success').click()    
    cy.get('.col-sm-3 > .nav > .active > a').click()
    cy.get(':nth-child(1) > [data-toggle="modal"]').click()
    cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-body > form > .form-group > #exampleInputEmail1')
    cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    
  })
})
*/

//EDIT DATA KELAS yang sudah ada dengan null/ kosong
/*
describe('login', () => {
  it('passes', () => {
 
    cy.visit('http://localhost/proyek2nya/admin/login.php')
    cy.get(':nth-child(1) > .form-control').type('jasmin')
    cy.get(':nth-child(2) > .form-control').type('jasmin')
    cy.get('.btn-success').click()    
    cy.get('.col-sm-3 > .nav > :nth-child(2) > a').click()
    cy.get('[data-target="#edit-siswa5"] > .btn').click()
    cy.get('.in > .modal-dialog > .modal-content > .modal-body > form > .form-group > #exampleInputEmail1')
    cy.get('.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click() 
  })
})
*/

//HAPUS DATA KELAS
/*
describe('login', () => {
  it('passes', () => {
 
    cy.visit('http://localhost/proyek2nya/admin/login.php')
    cy.get(':nth-child(1) > .form-control').type('jasmin')
    cy.get(':nth-child(2) > .form-control').type('jasmin')
    cy.get('.btn-success').click()    
    cy.get('.col-sm-3 > .nav > :nth-child(2) > a').click()
    cy.get('[data-target="#hapus-admin5"] > .btn').click()
    cy.get(':nth-child(1) > :nth-child(3) > :nth-child(2) > .modal > .modal-dialog > .modal-content > .modal-footer > .btn-danger').click()
   
  })
})
*/

//MENAMBAH DEBIT SISWA
/*
describe('login', () => {
  it('passes', () => {
 
    cy.visit('http://localhost/proyek2nya/admin/login.php')
    cy.get(':nth-child(1) > .form-control').type('jasmin')
    cy.get(':nth-child(2) > .form-control').type('jasmin')
    cy.get('.btn-success').click()    
    cy.get('.col-sm-3 > .nav > :nth-child(3) > a').click()
    cy.get('[href="index.php?m=tabungan&s=tambah_setoran"] > .btn').click()
    cy.get('.input-group-btn > .btn').click()
    cy.get('[data-id_tabungan="7"] > :nth-child(2)').click()
    cy.get('#setoran').type('20000')
    cy.get('#endButton').click() 
  })
})
*/

//TAMBAH KREDIT SISWA
/*
describe('login', () => {
  it('passes', () => {
 
    cy.visit('http://localhost/proyek2nya/admin/login.php')
    cy.get(':nth-child(1) > .form-control').type('jasmin')
    cy.get(':nth-child(2) > .form-control').type('jasmin')
    cy.get('.btn-success').click()    
    cy.get('.col-sm-3 > .nav > :nth-child(3) > a').click()
    cy.get('[href="index.php?m=tabungan&s=penarikan"] > .btn').click()
    cy.get('.input-group-btn > .btn').click()
    cy.get('[data-id_tabungan="1"] > :nth-child(2)').click()
    cy.get('#penarikan').type('10000')
    cy.get('#endButton').click()

  })
})
*/


//EDIT DATA DIRI ADMIN
/*
describe('login', () => {
  it('passes', () => {
 
    cy.visit('http://localhost/proyek2nya/admin/login.php')
    cy.get(':nth-child(1) > .form-control').type('umi')
    cy.get(':nth-child(2) > .form-control').type('umi')
    cy.get('.btn-success').click()    
    cy.get('.dropdown-toggle').click()
    cy.get('.dropdown-menu > :nth-child(1) > a').click()
    cy.get('[data-toggle="modal"] > .btn').click()
    cy.get(':nth-child(5) > #exampleInputEmail1').type('081235216889')
    cy.get('.btn-primary').click()
  })
})
*/

//TAMBAH ADMIN

describe('login', () => {
  it('passes', () => {
 
    cy.visit('http://localhost/proyek2nya/admin/login.php')
    cy.get(':nth-child(1) > .form-control').type('rofiqoh')
    cy.get(':nth-child(2) > .form-control').type('rofiqoh')
    cy.get('.btn-success').click()  
    cy.get('.dropdown-toggle').click()
    cy.get('.dropdown-menu > :nth-child(1) > a').click()  
    cy.get('.dropdown-toggle').click()
    cy.get('.dropdown-menu > :nth-child(1) > a').click()
    cy.get('[data-toggle="modal"]').click()
    cy.get(':nth-child(1) > #exampleInputEmail1').type('putri')
    cy.get(':nth-child(2) > #exampleInputEmail1').type('putri')
    cy.get(':nth-child(3) > .form-control').type('putri')
    cy.get(':nth-child(4) > #exampleInputEmail1').type('0987654321')
    cy.get('.modal-footer > .btn-primary').click()
   
    
  })
})







