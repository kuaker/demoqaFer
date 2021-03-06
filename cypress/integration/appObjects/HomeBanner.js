class HomeBanner {
  getHomeBannerDiv = () => {
    return cy.get(".home-banner");
  };

  getBannerImage = () => {
    return cy.get(".banner-image");
  };

  getBannerLink = () => {
    return this.getHomeBannerDiv().children("a");
  };
}

export default HomeBanner;
