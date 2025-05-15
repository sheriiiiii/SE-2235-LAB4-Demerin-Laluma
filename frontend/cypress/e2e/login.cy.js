
describe('Login Page', () => {
    beforeEach(() => {
      // Visit your login route — adjust if you're using nested routing
      cy.visit('http://localhost:3000/login');
    });
  
    it('should render login form', () => {
      cy.get('#emailInput').should('exist');
      cy.get('#passInput').should('exist');
      cy.contains('Login').should('exist');
    });
  
    it('should show error on invalid credentials', () => {
      cy.get('#emailInput').type('invalid@example.com');
      cy.get('#passInput').type('wrongpassword');
      cy.get('button[type="submit"]').click();
  
      cy.contains('Invalid email or password').should('exist'); // update based on actual error
    });
  
    it('should login successfully with valid credentials', () => {
      cy.get('#emailInput').type('validuser@example.com');
      cy.get('#passInput').type('validpassword');
      cy.get('button[type="submit"]').click();
  
      // Wait for redirection — update URL if redirected somewhere else
      cy.url().should('eq', 'http://localhost:3000/'); 
    });
  });
  