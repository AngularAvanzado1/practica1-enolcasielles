import { getGreeting } from '../support/app.po';

describe('world-bank', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to world-bank!');
  });
});
