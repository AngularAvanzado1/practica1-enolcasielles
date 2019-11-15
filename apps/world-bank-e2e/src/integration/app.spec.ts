import { getTitle } from '../support/app.po';

describe('GIVEN: world-bank app', () => {
  describe('WHEN: user visit home page', () => {
    beforeEach(() => cy.visit('/'));
    it(`should display 'Regiones' title`, () => {
      getTitle().contains('Regiones');
    });
  })
  describe('WHEN: user visit region page', () => {
    beforeEach(() => cy.visit('/region/EAS'));
    it(`should display 'East Asia & Pacific' title`, () => {
      getTitle().contains('East Asia & Pacific');
    });
  })
  describe('WHEN: user visit country page', () => {
    beforeEach(() => cy.visit('/country/MAC'));
    it(`should display 'Macao SAR, China' title`, () => {
      getTitle().contains('Macao SAR, China');
    });
  })
});
