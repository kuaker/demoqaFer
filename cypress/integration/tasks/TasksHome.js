import Home from "../page/home";
const cards = require("../../fixtures/cards.json");

class TasksHome {
  constructor() {
    this.homepage = new Home();
  }

  TaskValidateHomeObjectsPresents = () => {
    this.homepage.getDivHeader().should("be.visible");
    this.homepage.header
      .getLink()
      .should("be.visible")
      .and("have.attr", "href", "https://demoqa.com");
    this.homepage.header
      .getImageToolsQA()
      .should("be.visible")
      .and("have.attr", "src", "/images/Toolsqa.jpg");

    this.homepage.banner.getHomeBannerDiv().should("be.visible");
    this.homepage.banner
      .getBannerLink()
      .should("be.visible")
      .and("have.attr", "href", "https://www.toolsqa.com/selenium-training/");
    this.homepage.banner
      .getBannerImage()
      .and("have.attr", "src", "/images/WB.svg");

    this.homepage.body.getCatCardsDiv().should("be.visible");
    this.homepage.body.getCardsAvatar().should("be.visible");
    this.homepage.body
      .getCardsSvg()
      .should("be.visible")
      .and("have.attr", "stroke", "currentColor");
    this.homepage.body.getCards().should("be.visible");
    this.homepage.body.getCardsBodies().should("be.visible");
    this.homepage.body.getH5Tag().should("be.visible");
    this.homepage.body.getH5Tag().each(($e, i) => {
      expect($e.text()).to.be.eql(cards.cardsFront[i]);
    });
  };

  TaksGetIntoPage = () => {
    this.homepage.body.getIntoCardSelected("Elements")
  }
}

export default TasksHome;
