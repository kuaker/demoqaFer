/// <reference types="cypress" />

import ElementsRows from "../appObjects/ElementsRows";

class ElementsPage {
  constructor() {
    this.rows = new ElementsRows();
  }

  getDivMainHeaderElements = () => {
    return cy.get(".main-header");
  };

  getDivLeftPannel = () => {
    return cy.get(".left-pannel");
  };
}

export default ElementsPage;
