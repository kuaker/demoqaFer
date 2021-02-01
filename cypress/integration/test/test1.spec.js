/// <reference types="cypress" />

import TasksHome from "../tasks/TasksHome";

const url = Cypress.env("baseUrl");
const taskhome = new TasksHome();

context("DEMO TOOLS QA", () => {
  beforeEach(() => {
    cy.visit(url);
  });

  describe("Home", function () {
    it("Validación de Objetos en pantalla", () => {
      taskhome.TaskValidateHomeObjectsPresents();
    });

    
  });
});
