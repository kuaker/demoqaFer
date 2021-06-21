class HomeHeader {
	getLink = () => cy.get('a').eq(0)

	getImageToolsQA = () => this.getLink().children('img')
}

export default HomeHeader
