import userData from '../fixtures/users/userData.json'
describe('Orange HRM tests', () => {

const selectoresList = {
  usernameField: "[name='username']",
  passwordFiend: "[name='password']",
  loginNutton: "[type= 'submit']",
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  deshboardGrid: ".orangehrm-dashboard-grid",
  wrongCredentialAlert: "[role='alert']",
}

  it('Login Success', () => {
    cy.visit('/auth/login')
    cy.get(selectoresList.usernameField).type(userData.userSuccess.username)
    cy.get(selectoresList.passwordFiend).type(userData.userSuccess.password)
    cy.get(selectoresList.loginNutton).click()    
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectoresList.deshboardGrid)
  })

  it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectoresList.usernameField).type(userData.userFail.username)
    cy.get(selectoresList.passwordFiend).type(userData.userFail.password)
    cy.get(selectoresList.loginNutton).click()
    cy.get(selectoresList.wrongCredentialAlert)
  })
})
