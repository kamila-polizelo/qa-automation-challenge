import { LoginPage } from '../../pages/loginPage';

const loginPage = new LoginPage();

describe('Invalid Login Frontend', () => {
  it(
    'Should display error message for invalid credentials',
    {
      tags: ['@frontend', '@negative'],
    },
    () => {
      loginPage.accessLoginPage();

      loginPage.fillEmail('invalid@email.com');

      loginPage.fillPassword('wrongPassword');

      loginPage.clickLogin();

      cy.contains('Email e/ou senha inválidos').should('be.visible');
    }
  );
});
