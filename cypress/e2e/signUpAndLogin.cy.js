import { faker } from '@faker-js/faker';

beforeEach(async () => {
  await cy.request('POST', 'http://localhost:4000/ready-db-test');
});

it('Should make an account and log into it', async () => {
  const username = faker.internet.userName();
  const displayname = faker.name.fullName();
  const password = faker.internet.password();

  cy.visit('http://localhost:5173');
  cy.intercept('POST', 'http://localhost:4000/sign-up').as('signUp');
  cy.intercept('POST', 'http://localhost:4000/sign-in').as('login');
  cy.get('[data-cy="SIGN_UP"').click();
  cy.get('[data-cy="USERNAME"').type(username);
  cy.get('[data-cy="DISPLAYNAME"').type(displayname);
  cy.get('[data-cy="PASSWORD"').type(password);
  cy.get('[data-cy="PASSWORD_CONFIRM"').type(password);
  cy.get('[data-cy="SUBMIT"').click();
  cy.wait('@signUp');
  cy.get('[data-cy="POPUP_OK"').click();
  cy.get('[data-cy="LOGIN"').click();
  cy.get('[data-cy="USERNAME"').type(username);
  cy.get('[data-cy="PASSWORD"').type(password);
  cy.get('[data-cy="SUBMIT"').click();
  cy.wait('@login');
  
  cy.url().should('equal', 'http://localhost:5173/dashboard');
});