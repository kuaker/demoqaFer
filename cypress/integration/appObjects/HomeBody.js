class HomeBody {
  getCatCardsDiv = () => {
    return cy.get(".category-cards");
  };

  getCards = () => {
    return cy.get(".card.mt-4.top-card");
  };

  getCardsAvatar = () => {
    return cy.get(".avatar.mx-auto.white");
  };

  getCardsSvg = () => {
    return this.getCardsAvatar().children("svg");
  };

  getCardsBodies = () => {
    return cy.get(".card-body");
  };

  getH5Tag = () => {
    return this.getCardsBodies().children("h5");
  };

  getIntoCardSelected = (value) => {
    return this.getH5Tag().each(($el, index) => {
      const txt = $el.text();
      if (value === txt) {
        cy.wrap($el).click();
      }
    });
  };
}

export default HomeBody;
