import Button from '../components/Button'

describe('App Developers test', () => {

    before(() => {
        cy.visit('http://localhost:3000/');
    });

    it.only('should load skills list as the button is clicked', () => {
        Button.clickAddSkill()
    });
    it('should load one skill after input and click search button', () => {
        cy.get('input').type('front-end');
        cy.get('#search-button').click();
        cy.get('li').should('be.visible');
        cy.contains('Skill Name: front-end');
    });
    it('should load one skill after input with custom command', () => {
        cy.get('input').type('front-end');
        cy.clickButton('Search');
        cy.get('li').should('be.visible');
        cy.contains('Skill Name: front-end');
    });
});