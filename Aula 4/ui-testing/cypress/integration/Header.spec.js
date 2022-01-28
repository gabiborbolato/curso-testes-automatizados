import Header from '../components/Header';

describe('Header test', () => {

    before(() => {
        cy.visit('http://localhost:3000/');
    });

    it('User should be able to see Header title', () => {
        Header.assertHeaderTitle();
    });
});