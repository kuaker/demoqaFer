Feature: Tools QA

  I want to validate the elements page

  @focus
  Scenario: Validate all elements presents
    Given I open the home page
    When I select the page
    Then I validate Dom elements in Elemens Page