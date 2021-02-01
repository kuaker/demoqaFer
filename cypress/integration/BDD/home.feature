Feature: Tools QA
 
  I want to open the home
  
  @focus
  Scenario: Validate all elements presents
    Given I open the home page
    Then I validate Dom elements
 
 @focus
  Scenario: Get in Elements
    Given I open the home page
    Then I get into Elements page