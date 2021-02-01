import HomeBanner from "../appObjects/HomeBanner";
import HomeBody from "../appObjects/HomeBody";
import HomeHeader from "../appObjects/HomeHeader";

class Home {
  constructor() {
    this.header = new HomeHeader();
    this.banner = new HomeBanner();
    this.body = new HomeBody();
  }

  getDivHeader = () => {
    return cy.get("#app");
  };
}

export default Home;
