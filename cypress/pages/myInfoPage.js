class MyInfoPage{
    selectorsList() {
        const selectors = {

            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            genericComboBox: ".oxd-select-text-input",
          
      
        }
        return selectors
    }
   fillPerDetais() {
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('lastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('NickTeste')
    cy.get(selectorsList.genericField).eq(4).clear().type('Emploid')
    cy.get(selectorsList.genericField).eq(5).clear().type('Others')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click()    
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(27)').click()
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    
   }


}

export default MyInfoPage