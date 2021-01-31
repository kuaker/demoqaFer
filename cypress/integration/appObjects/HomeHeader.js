class HomeHeader {
  getLink = () => {
    return cy.get("a").eq(0);
  };

  getImageToolsQA = () => {
    return this.getLink().children("img");
  };
}

export default HomeHeader;
