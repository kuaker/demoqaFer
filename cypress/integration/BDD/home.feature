Feature: Tools QA

  I want to open the home

  @focus
  Scenario: Validate all elements presents
    Given I open the home page
    Then I validate Dom elements

  @focus
  Scenario: Get into the home cards
    Given I open the home page
    Then I get into pages