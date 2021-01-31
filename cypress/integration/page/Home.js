import HomeBanner from "../appObjects/HomeBanner";
import HomeHeader from "../appObjects/HomeHeader";

class Home {
  constructor() {
    this.header = new HomeHeader();
    this.banner = new HomeBanner();
  }

  getDivHeader = () => {
    return cy.get("#app");
  };
}

export default Home;
