describe('User can view cookbook', () => {
  beforeEach(() => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/favorites',
      response: 'fixture:favorites.json',
      status: 200
    })
  })

  it('Successfully view My Cookbook in the Navbar', () => {
    cy.loginUser('user@mail.com', 'password')
    cy.get('#navbar').within(() => {
      cy.get('#nav-cookbook').click({ force: true })
      cy.get('h1').should('contain','My Cookbook')
    })
    cy.get('[name="recipe-2"]').within(() => {
      cy.get('[name="recipe-title"]').should('contain', 'Chocolate Croissant')
    })
  })
})