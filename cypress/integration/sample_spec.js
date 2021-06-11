// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('First', () => {
	it('Visit AMR server', () => {
    cy.visit('http://59.3.93.125:8085/aimir/login')
    cy.get('#login').click()
	});
  // it('login', () => {
  //   cy.get('#id').type("admin")
  //   cy.get('#pw').type("nuri1234")
  //   cy.get('#login').click()
  // });
});
describe('Second', () => {
  it('helloworld', () => {
    cy.get('#id').type('admin')
  })
})
