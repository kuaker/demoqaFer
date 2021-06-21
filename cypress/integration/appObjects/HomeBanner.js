class HomeBanner {
	getHomeBannerDiv = () => cy.get('.home-banner')

	getBannerImage = () => cy.get('.banner-image')

	getBannerLink = () => this.getHomeBannerDiv().children('a')
}

export default HomeBanner
