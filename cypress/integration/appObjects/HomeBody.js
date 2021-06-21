class HomeBody {
	getCatCardsDiv = () => cy.get('.category-cards')

	getCards = () => cy.get('.card.mt-4.top-card')

	getCardsAvatar = () => cy.get('.avatar.mx-auto.white')

	getCardsSvg = () => this.getCardsAvatar().children('svg')

	getCardsBodies = () => cy.get('.card-body')

	getH5Tag = () => this.getCardsBodies().children('h5')

	getIntoCardSelected = value => {
		this.getH5Tag().each(($e) => {
			const txt = $e.text()
			if (txt == value) {
				cy.wrap($e).click()
			}
		})
	}
}

export default HomeBody
