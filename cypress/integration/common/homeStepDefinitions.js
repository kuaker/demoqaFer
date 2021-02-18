/// <reference types="cypress" />

import { Given, When,Then } from "cypress-cucumber-preprocessor/steps";
import TasksElemenPage from "../tasks/TasksElemenPage";
import TasksHome from "../tasks/TasksHome";

const url = Cypress.env("baseUrl");
const taskhome = new TasksHome();
const taskelems = new TasksElemenPage();

Given("I open the home page", () => {
  cy.visit(url);
});

Then("I validate Dom elements", function () {
  taskhome.TaskValidateHomeObjectsPresents();
});

When("I get into pages", () => {
  taskhome.TaksGetIntoPages();
});

Then("I select the page", function () {
  taskhome.TaskGetIntoPageSelected("Elements")
});

Then("I validate Dom elements in Elemens Page", function () {
  taskelems.taskValidElementsPresents();
});

