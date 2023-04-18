class addOther
{
    menScent()
    {
        //cy.get('a[href*="index.php?rt=product/category&path="]').contains(link).click()
        //cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=58"]').invoke('show')
        cy.contains("Fragrance Sets").click({force: true})
        
    }
    addToCart(link)
    {
        cy.get('a[title="ck IN2U Eau De Toilette Spray for Him"]').click()
        cy.get('.productpagecart  .cart').click()
        cy.contains("Fragrance Sets").click({force: true})
        //cy.get('a[href*="index.php?rt=product/category&path="]').contains(link).click()
        
           
    }
    addAnother(link)
    {
        cy.log('hello')
        cy.get('.fixed_wrapper > .fixed').each(($el,index,$list)=>{
            if($el.text().includes(link))
            {
                cy.wrap($el).click()
            }
        })
        cy.get('.productpagecart  .cart').click()

        //cy.get('a[title="Euphoria Men Intense Eau De Toilette Spray"]').click()
        
    }
}
export default addOther