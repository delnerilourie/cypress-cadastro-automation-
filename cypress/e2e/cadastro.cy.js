import CadastroPage from '../support/pages/cadastroPage';

describe('Cadastro de usuário - AutomationPractice', () => {
  const page = new CadastroPage();

  it('cadastro bem-sucedido', () => {
    page.visit();
    page.clickSignIn();

    // Gerar email 
    const email = `testuser${Date.now()}@example.com`;
    page.fillCreateEmail(email);
    page.submitCreate();

    // Aguardar página de cadastro carregar
    cy.url().should('include', 'account-creation');
    cy.get('#account-creation_form', { timeout: 20000 }).should('be.visible');

    // Preencher dados pessoais
    page.selectTitleMr();
    page.fillFirstName('Test');
    page.fillLastName('User');
    page.fillPassword('Test@1234');

    // Preencher data de nascimento
    page.selectDay('10');
    page.selectMonth('May');
    page.selectYear('1990');

    // checkbox
    page.checkNewsletter();

    // Finalizar cadastro
    page.submitAccount();

    // Validar cadastro com sucesso
    page.getAccountName()
      .should('be.visible')
      .and('contain.text', 'Test User');
  });
});
