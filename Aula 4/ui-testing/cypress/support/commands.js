import loc from  '../support/locators'

Cypress.Commands.add('clickAddSkillButton', (label) => {
    cy.get(loc.BUTTON).click();
  });
  