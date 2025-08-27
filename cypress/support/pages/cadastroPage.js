class CadastroPage {
  visit() {
    cy.visit('http://automationpractice.pl/index.php');
  }
  clickSignIn() {
    cy.get('.login').click();
  }
  fillCreateEmail(email) {
    cy.get('#email_create').type(email);
  }
  submitCreate() {
    cy.get('#SubmitCreate').click();
  }
  selectTitleMr() {
    cy.get('#id_gender1').check();
  }
  fillFirstName(firstName) {
    cy.get('#customer_firstname').type(firstName);
  }
  fillLastName(lastName) {
    cy.get('#customer_lastname').type(lastName);
  }
  fillPassword(password) {
    cy.get('#passwd').type(password);
  }
  selectDay(day) {
    cy.get('#days').select(day); 
  }
  selectMonth(month) {
    cy.get('#months').select(month); 
  }
  selectYear(year) {
    cy.get('#years').select(year); 
  }
  fillAddress(addr) {
  cy.get('#account-creation_form', { timeout: 50000 }).should('be.visible');
}
  fillMobile(mobile) {
    cy.get('#phone_mobile').type(mobile);
  }
    checkNewsletter() {
     cy.get('label[for="newsletter"]').click();
  }
  submitAccount() {
    cy.get('#submitAccount').click();
  }
  getAccountName() {
    return cy.get('.account > span');
  }
}
export default CadastroPage;
