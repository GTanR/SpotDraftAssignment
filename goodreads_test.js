describe('Goodreads Automation Test', () => {
  it('Login, Search, Mark as Want to Read, Remove, and Logout', () => {
    // Step 1: Login to goodreads.com
    cy.visit('https://www.goodreads.com/')
    cy.contains('Sign in').click()

    cy.get('#userSignInFormEmail').type('your_username') // Replace with your username/email
    cy.get('#user_password').type('your_password') // Replace with your password
    cy.get('input[name="next"]').click()

    // Step 2: Search for a specific book title
    cy.get('#search_query_main').type('Book Title') // Replace with the book title you want to search for
    cy.get('#search_query_main').type('{enter}')

    // Step 3: Mark the book as 'want to read'
    cy.get('button.want-to-read').first().click()

    // Step 4: Remove the selected book from my book list
    cy.contains('My Books').click()
    cy.get('input[name="batch[item][]"]').first().click()
    cy.get('#actionRemoveShelf').click()

    // Step 5: Logout
    cy.get('.userAccountMenu').click()
    cy.contains('Sign Out').click()
  })
})
