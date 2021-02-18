import ElementsPage from "../page/ElementsPage";

class TasksElemenPage {
  constructor() {
    this.elemenpage = new ElementsPage();
  }

  taskValidElementsPresents = () => {
    this.elemenpage.getDivMainHeaderElements().should("be.visible");
    this.elemenpage.getDivLeftPannel().should("be.visible");
  };
}

export default TasksElemenPage;
