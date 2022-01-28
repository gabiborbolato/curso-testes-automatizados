import Button from '../components/Button'

describe('App Developers test', () => {

    before(() => {
        cy.visit('http://localhost:3000/');
    });

    it('User should be able to click on Add Skill', () => {
        Button.AddSkill().click()
    });
});