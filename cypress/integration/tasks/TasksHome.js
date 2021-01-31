import Home from "../page/home";

class TasksHome {
  constructor() {
    this.homepage = new Home();
  }

  validateHomeObjectsPresents = () => {
    this.homepage.getDivHeader().should("be.visible");
    this.homepage.header
      .getLink()
      .should("be.visible")
      .and("have.attr", "href", "https://demoqa.com");
    this.homepage.header
      .getImageToolsQA()
      .should("be.visible")
      .and("have.attr", "src", "/images/Toolsqa.jpg");
  };



}

export default TasksHome;
