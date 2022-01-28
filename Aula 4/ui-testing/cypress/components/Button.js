import loc from  '../support/locators'

class Button {
    
    AddSkill () {
       return cy.get(loc.BUTTON)  
    }

}

export default Button
