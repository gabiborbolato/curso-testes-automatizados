import Button from '../components/Button';

describe('Add Skill button test', () => {

    before(() => {
        cy.visit('http://localhost:3000/');
    });

    it('User should be able to see Add Skill button', () => {
        Button.assertAddSkillButtonExist();
    });

    it('User should be able to click on Add Skill', () => {
        cy.clickAddSkillButton();
    });
});