/// <reference types="cypress" />

import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

import TasksHome from '../../tasks/TasksHome'
import Home from '../../page/Home'

const url = Cypress.env('baseUrl')

const taskhome = new TasksHome()

const homepage = new Home()

Given('I open the home page', () => cy.visit(url))

Then('I validate Dom elements', () => taskhome.TaskValidateHomeObjectsPresents())

When('I get into Elements page {string}', ({ elems }) => taskhome.TaksGetIntoPage({ elems }))

And('I click into the element selected {string}', value => homepage.body.getIntoCardSelected(value))

Then('Url should be the correct path', () => cy.url().should('include','/elements'))