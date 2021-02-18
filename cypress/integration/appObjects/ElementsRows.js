class ElementsRows {
  getElementsRows = () => {
    return cy.get(".row").children("div");
  };

  getLefPanelDiv = () => {
    return cy.get(".left-pannel");
  };

  getAccordionDiv = () => {
    return cy.get(".accordion");
  };
}

export default ElementsRows;
