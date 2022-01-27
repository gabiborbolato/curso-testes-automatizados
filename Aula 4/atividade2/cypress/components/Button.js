import loc from  '../support/locators'

class Button {
    clickAddSkill () {
        cy.get(loc.BUTTON).click()
    }
}

export default Button;