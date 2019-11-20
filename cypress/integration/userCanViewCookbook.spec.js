describe('User can view cookbook', () => {

  beforeEach(() => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes',
      response: 'fixture:recipes.json',
      status: 200
    })
  })
  it('Successfully view My Cookbook in the Navbar', () => {
    cy.loginUser('user@mail.com', 'password')
    cy.get('#navbar').within(() => {
      cy.get('#nav-cookbook').click({ force: true })
      cy.get('h1').should('contain','My Cookbook')
    }),

    beforeEach(() => {
      cy.route({
        method: 'POST',
        url: 'http://localhost:3000/v1/recipes/1/favorite',
        response: 'fixture:recipes.json',
        status: 201
      })
    })
    it("contains recipe content", () => {
      cy.get('[name="recipe-2"]').within(() => {
        cy.get('[name="recipe-title"]').should('contain', 'Chocolate Croissant')
      })
    })
  })
})