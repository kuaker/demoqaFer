#languaje:es
Feature: Tools QA
 
  I want to open the home
  
  Scenario: Validate all elements presents
    Given I open the home page
    Then I validate Dom elements
 
 @focus
  Scenario: Get in Elements
    Given I open the home page
    When I get into Elements page 'Elements'
    And I click into the element selected 'Elements'
    Then Url should be the correct path