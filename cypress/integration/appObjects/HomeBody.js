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
    this.getH5Tag().each(($e) => {
      const txt = $e.text();
      if (txt == value) {
        cy.wrap($e).click();
      }
    });
  };
}

export default HomeBody;
