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
      cy.log("Valor del tag: " + value );
        cy.log("Valor del texto: "+ txt );
      if (value === txt) {
        cy.log("encontró el objeto.")
        cy.wrap($e).click();
      } else {
        cy.log("No encontró el objeto.")
      }
    });
  };
}

export default HomeBody;
