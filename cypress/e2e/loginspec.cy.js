describe('Orange HRM tests', () => {

const selectoresList = {
  usernameField: "[name='username']",
  passwordFiend: "[name='password']",
  loginNutton: "[type= 'submit']",
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  wrongCredentialAlert: "[role='alert']",
}


  it('Login Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectoresList.usernameField).type('Admin')
    cy.get(selectoresList.passwordFiend).type('admin123')
    cy.get(selectoresList.loginNutton).click()    
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectoresList.sectionTitleTopBar).contains('Dashboard')
  })

  it('Login Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectoresList.usernameField).type('test')
    cy.get(selectoresList.passwordFiend).type('test')
    cy.get(selectoresList.loginNutton).click()
    cy.get(selectoresList.wrongCredentialAlert)
  })
})
