import userData from '../users/userData.json'
import loginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const lP = new loginPage()
const Ds = new DashboardPage()
const Mp = new MenuPage()
describe('Orange HRM tests', () => {

const selectorsList = {

  firstNameField: "[name='firstName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  dateCloseButton: ".--close",
  submitButton: "[type='submit']",
  genericComboBox: ".oxd-select-text-input",

}


  it.only('User Info Update Success', () => {
    lP.accessLoginPage()
    lP.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    Ds.checkDashboardPage()
    Mp.accessMyinfo()

    
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('lastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('NickTeste')
    cy.get(selectorsList.genericField).eq(4).clear().type('Emploid')
    cy.get(selectorsList.genericField).eq(5).clear().type('Others')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(27)').click()
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    cy.get(selectorsList.submitButton).eq(0).click()
 
  })

  it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
