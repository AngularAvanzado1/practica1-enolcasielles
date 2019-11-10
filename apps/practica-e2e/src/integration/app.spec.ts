import { getGreeting } from '../support/app.po';

describe('practica', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to practica!');
  });
});
