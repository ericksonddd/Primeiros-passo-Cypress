import userData from '../fixtures/users/userData.json'
describe('Orange HRM tests', () => {

const selectoresList = {
  usernameField: "[name='username']",
  passwordFiend: "[name='password']",
  loginNutton: "[type= 'submit']",
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  deshboardGrid: ".orangehrm-dashboard-grid",
  wrongCredentialAlert: "[role='alert']",
  myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
  firstNameField: "[name='firstName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  dateCloseButton: ".--close",
  submitButton: "[type='submit']"

}




  it.only('User Info Update Success', () => {
    cy.visit('/auth/login')
    cy.get(selectoresList.usernameField).type(userData.userSuccess.username)
    cy.get(selectoresList.passwordFiend).type(userData.userSuccess.password)
    cy.get(selectoresList.loginNutton).click()    
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectoresList.deshboardGrid)
    cy.get(selectoresList.myInfoButton).click()
    cy.get(selectoresList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectoresList.lastNameField).clear().type('lastNameTest')
    cy.get(selectoresList.genericField).eq(3).clear().type('NickTeste')
    cy.get(selectoresList.genericField).eq(4).clear().type('Emploid')
    cy.get(selectoresList.genericField).eq(5).clear().type('Others')
    cy.get(selectoresList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectoresList.dateCloseButton).click()
    cy.get(selectoresList.submitButton).eq(0).click()
    
    

  })

  it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectoresList.usernameField).type(userData.userFail.username)
    cy.get(selectoresList.passwordFiend).type(userData.userFail.password)
    cy.get(selectoresList.loginNutton).click()
    cy.get(selectoresList.wrongCredentialAlert)
  })
})
