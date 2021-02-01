/// <reference types="cypress" />

import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import TasksHome from "../tasks/TasksHome";

const url = Cypress.env("baseUrl");
const taskhome = new TasksHome();

Given("I open the home page", () => {
  cy.visit(url);
});

Then("I validate Dom elements", function () {
  taskhome.TaskValidateHomeObjectsPresents();
});

Then("I get into pages", () => {
  taskhome.TaksGetIntoPages();
});
